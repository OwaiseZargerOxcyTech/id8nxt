"use client";
import React, { useEffect, useRef } from "react";

// WebGL utilities
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

const WorkHero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const overlayRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", { alpha: true });
    if (!gl) return;

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = vec2(position.x * 0.5 + 0.5, 0.5 - position.y * 0.5);
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader
    const fragmentShaderSource = `
      precision mediump float;
      uniform sampler2D uTexture;
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        
        float wave = 0.0;
        float frequency = 12.0;
        float speed = 1.0;
        float amplitude = 0.005;

        // Create diagonal wave patterns
        vec2 direction = vec2(-1.0, 0.15);
        float pattern1 = dot(uv, direction);
        float pattern2 = dot(uv + vec2(0.5, 0.5), direction);
        float pattern3 = dot(uv + vec2(0.25, 0.75), direction);
        
        // Calculate base wave effect
        wave += sin(pattern1 * frequency + uTime * speed) * amplitude;
        wave += sin(pattern2 * frequency * 1.2 + uTime * speed * 0.7) * amplitude * 0.5;
        wave += sin(pattern3 * frequency * 0.7 - uTime * speed * 1.1) * amplitude * 0.3;
        
        vec2 crossDirection = vec2(-0.4, -0.6);
        float crossPattern1 = dot(uv, crossDirection);
        float crossPattern2 = dot(uv + vec2(0.3, 0.6), crossDirection);
        
        wave += sin(crossPattern1 * frequency * 0.8 - uTime * speed * 0.8) * amplitude * 0.4;
        wave += sin(crossPattern2 * frequency * 1.1 + uTime * speed * 0.9) * amplitude * 0.3;
        
        // Add subtle circular waves
        vec2 center = vec2(0.5, 0.5);
        float dist = length(uv - center);
        wave += sin(dist * frequency * 0.4 - uTime * speed * 0.4) * amplitude * 0.2;

        // Create a mask for the bottom portion
        float bottomMask = smoothstep(0.7, 0.3, uv.y); // Adjust these values to control the fade position
        
        // Apply the mask to the wave effect
        wave *= bottomMask;
        
        uv += wave;
        
        vec4 color = texture2D(uTexture, uv);
        gl_FragColor = color;
      }
    `;

    // Create and set up shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );
    const program = createProgram(gl, vertexShader, fragmentShader);

    gl.useProgram(program);

    // Set up buffers
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
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Load water overlay image
    const image = new Image();
    image.src = "/images/our-work/hero-img/water.png";
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
    };

    // Enable transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Get uniform location for time
    const timeLocation = gl.getUniformLocation(program, "uTime");

    // Animation loop
    let startTime = performance.now();
    const animate = () => {
      const time = (performance.now() - startTime) * 0.001;
      gl.uniform1f(timeLocation, time);

      // Update canvas size
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }

      // Clear canvas with transparency
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  // Text scaling logic
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
      heading.style.transform = `scale(${scaleFactor})`;
      paragraph.style.transform = `scale(${Math.max(scaleFactor, 0.7)})`;

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
          className=" w-full h-full object-cover object-top"
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
          className="absolute bottom-0 left-0 w-full h-[40%]"
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

export default WorkHero;
