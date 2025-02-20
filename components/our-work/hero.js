"use client";
import React, { useEffect, useRef, useState } from "react";

// WebGL utilities remain the same
const createShader = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const createProgram = (gl, vertexShader, fragmentShader) => {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(program));
    return null;
  }
  return program;
};

const ParallaxHero = ({
  waterImageSrc = "/images/our-work/hero-img/our-work-water.png",
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const overlayRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [textureLoaded, setTextureLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", { alpha: true });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Shader sources remain the same
    const vertexShaderSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = vec2(position.x * 0.5 + 0.5, 0.5 - position.y * 0.5);
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform sampler2D uTexture;
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        float wave = 0.0;
        float frequency = 20.0;
        float speed = 3.0;
        float amplitude = 0.05;

        // Bottom wave effect (stronger)
        vec2 direction = vec2(-1.0, 0.15);
        
        // Add vertical movement
        float verticalMove = sin(uTime * 1.0) * 0.02;
        uv.y += verticalMove * (1.0 - uv.y);  // More movement at bottom
        
        float pattern1 = dot(uv, direction);
        float pattern2 = dot(uv + vec2(0.5, 0.5), direction);
        float pattern3 = dot(uv + vec2(0.25, 0.75), direction);
        
        float bottomWave = sin(pattern1 * frequency + uTime * speed) * amplitude;
        bottomWave += sin(pattern2 * frequency * 1.2 + uTime * speed * 0.7) * amplitude * 0.5;
        bottomWave += sin(pattern3 * frequency * 0.7 - uTime * speed * 1.1) * amplitude * 0.3;
        
        // Upper wave effect (subtler)
        float upperFrequency = frequency * 0.5;
        float upperSpeed = speed * 0.2;
        float upperAmplitude = amplitude * 0.04;
        
        float upperWave = sin(pattern1 * upperFrequency + uTime * upperSpeed) * upperAmplitude;
        upperWave += sin(pattern2 * upperFrequency * 1.2 + uTime * upperSpeed * 0.7) * upperAmplitude * 0.5;
        
        // Combine waves with masks
        float bottomMask = smoothstep(0.7, 0.3, uv.y);
        float upperMask = 1.0 - bottomMask;
        
        wave = bottomWave * bottomMask + upperWave * upperMask;

        uv += wave;
        
        vec4 color = texture2D(uTexture, uv);
        gl_FragColor = color;
       
      }
    `;

    // Create and compile shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );
    if (!vertexShader || !fragmentShader) {
      console.error("Failed to create shaders");
      return;
    }

    // Create and link program
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) {
      console.error("Failed to create program");
      return;
    }

    gl.useProgram(program);

    // Set up vertex buffer
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Create and set up texture
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set texture parameters
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Load water overlay image with error handling
    const image = new Image();
    image.crossOrigin = "anonymous"; // Add this if loading from external sources

    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image
      );
      setTextureLoaded(true);
    };

    image.onerror = (e) => {
      console.error("Error loading texture image:", e);
      setTextureLoaded(false);
    };

    image.src = waterImageSrc;

    // Enable transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const timeLocation = gl.getUniformLocation(program, "uTime");
    let startTime = performance.now();

    const animate = () => {
      if (!textureLoaded) return;

      const time = (performance.now() - startTime) * 0.001;
      gl.uniform1f(timeLocation, time);

      // Update canvas size if needed
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    if (textureLoaded) {
      animate();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteTexture(texture);
    };
  }, [waterImageSrc, textureLoaded]);

  // Text scaling logic remains the same
  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const overlay = overlayRef.current;

    const handleTextScaling = () => {
      const scrolled = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const scrollProgress = Math.min(scrolled / maxScroll, 1);

      const scaleFactor = 1 - scrollProgress * 0.5;
      heading.style.transform = `scale(${(scaleFactor, 0.8)})`;
      paragraph.style.transform = `scale(${Math.max(scaleFactor, 0.9)})`;

      const windowWidth = window.innerWidth;
      const xlBreakpoint = 1280;
      const xxlBreakpoint = 1440;

      let maxMargin =
        windowWidth >= xxlBreakpoint
          ? 150
          : windowWidth >= xlBreakpoint
          ? 220
          : 0;

      if (maxMargin > 0) {
        const marginValue = scrollProgress * maxMargin;
        paragraph.style.marginLeft = `${marginValue}px`;
        paragraph.style.marginTop = `${marginValue}px`;
        heading.style.marginTop = `${marginValue}px`;
      }

      const overlayStartThreshold = 0.2;
      const overlayOpacity = Math.max(
        0,
        Math.min(1, (scrollProgress - overlayStartThreshold) / 0.3)
      );
      overlay.style.opacity = overlayOpacity;
    };

    window.addEventListener("resize", handleTextScaling);
    container.addEventListener("scroll", handleTextScaling);

    return () => {
      container.removeEventListener("scroll", handleTextScaling);
      window.removeEventListener("resize", handleTextScaling);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-y-scroll scrollbar-container"
      style={{
        scrollBehavior: "smooth",
        perspective: "1px",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative w-full">
        <img
          src="/images/our-work/hero-img/our-work.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div
          ref={overlayRef}
          className="absolute top-0 right-0 w-full h-full bg-black/20"
          style={{
            opacity: 0,
            transition: "opacity 0.3s ease-out",
          }}
        />
        <canvas
          ref={canvasRef}
          className="absolute bottom-0 left-0 w-full h-full"
        />
      </div>

      <div className="absolute top-0 left-0 w-full" style={{ height: "135vh" }}>
        <div className="sticky top-0 z-20 h-screen">
          <div className="h-full xl:max-w-6xl 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-8 md:gap-4">
            <div
              className="max-w-2xl"
              style={{ transformOrigin: "left center" }}
            >
              <h1
                ref={headingRef}
                className="text-4xl md:text-6xl lg:text-7xl 4xl:text-110px font-light text-white leading-tight text-left"
                style={{ willChange: "transform" }}
              >
                Your digital
                <br />
                odyssey
                <br />
                starts here
              </h1>
            </div>
            <div
              className="max-w-md"
              style={{ transformOrigin: "left center" }}
            >
              <p
                ref={paragraphRef}
                className="text-lg md:text-xl 4xl:text-2xl text-gray-200 md:mt-40 text-left"
                style={{ willChange: "transform" }}
              >
                Here are our standout projects that highlight the impactful
                digital marketing strategies we've implemented at ID8NXT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;
