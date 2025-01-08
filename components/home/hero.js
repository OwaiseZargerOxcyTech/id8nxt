"use client"
import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);
  const titleRefs = useRef([]);
  const imageRefs = useRef([]);
  const descRefs = useRef([]);
  const bgRefs = useRef([]);
  
  const sections = [
    {
      bgImage: '/images/home/home-hero-bg-1.png',
      content: {
        title: 'Digital\n& Beyond',
        description: 'ID8NXT is a Digital Marketing agency in Mumbai, India. We specialize in boosting businesses by focusing on their brand, using strategies, and harnessing digital tools.',
        mainImage: './images/home/V1.png',
        overlayImages: [
          './images/home/cloud-1.png',
          './images/home/rectangle-1.png'
        ]
      }
    },
    {
      bgImage: '/images/home/home-hero-bg-2.1.png',
      content: {
        title: 'Creativity\nmeets\nInnovation',
        description: 'We offer branding, print, and digital marketing services across India.',
        mainImage: './images/home/V2 The Magic_.png',
        hasBoxDecoration: true
      }
    }
  ];

  const animateSection = (direction, nextIndex) => {
    const currentSection = activeSection;
    const duration = 1;
    const ease = "power2.inOut";

    // Background zoom effect
    gsap.to(bgRefs.current[currentSection], {
      scale: direction > 0 ? 1.3 : 0.9,
      duration: duration,
      ease: ease
    });

    gsap.fromTo(bgRefs.current[nextIndex],
      {
        scale: direction > 0 ? 0.9 : 1.3
      },
      {
        scale: 1.1,
        duration: duration,
        ease: ease
      }
    );

    // Content animations
    if (direction > 0) { // Scrolling down
      // Current section animations (moving up)
      gsap.to(titleRefs.current[currentSection], {
        y: "-100%",
        opacity: 0,
        duration: duration,
        ease: ease
      });
      gsap.to(imageRefs.current[currentSection], {
        y: "-100%",
        opacity: 0,
        duration: duration,
        ease: ease
      });
      gsap.to(descRefs.current[currentSection], {
        y: "-100%",
        opacity: 0,
        duration: duration,
        ease: ease
      });

      // Next section animations (coming from below)
      gsap.fromTo([titleRefs.current[nextIndex], imageRefs.current[nextIndex], descRefs.current[nextIndex]],
        {
          y: "100%",
          opacity: 0
        },
        {
          y: "0%",
          opacity: 1,
          duration: duration,
          ease: ease,
          stagger: 0.1
        }
      );
    } else { // Scrolling up
      // Current section animations (moving down)
      gsap.to(titleRefs.current[currentSection], {
        y: "100%",
        opacity: 0,
        duration: duration,
        ease: ease
      });
      gsap.to(imageRefs.current[currentSection], {
        y: "100%",
        opacity: 0,
        duration: duration,
        ease: ease
      });
      gsap.to(descRefs.current[currentSection], {
        y: "100%",
        opacity: 0,
        duration: duration,
        ease: ease
      });

      // Next section animations (coming from above)
      gsap.fromTo([titleRefs.current[nextIndex], imageRefs.current[nextIndex], descRefs.current[nextIndex]],
        {
          y: "-100%",
          opacity: 0
        },
        {
          y: "0%",
          opacity: 1,
          duration: duration,
          ease: ease,
          stagger: 0.1
        }
      );
    }
  };
  
  // Initial load animation
  useLayoutEffect(() => {
    if (isInitialLoad) {
      const duration = 1.2;
      const ease = "power2.out";

      // Set initial positions
      gsap.set(titleRefs.current[0], { y: "100%", opacity: 0 });
      gsap.set(imageRefs.current[0], { y: "100%", opacity: 0 });
      gsap.set(descRefs.current[0], { y: "100%", opacity: 0 });
      gsap.set(bgRefs.current[0], { scale: 1.2 });

      // Animate in
      gsap.to(bgRefs.current[0], {
        scale: 1.1,
        duration: duration * 1.2,
        ease: ease
      });

      gsap.to([titleRefs.current[0], imageRefs.current[0], descRefs.current[0]], {
        y: "0%",
        opacity: 1,
        duration: duration,
        ease: ease,
        stagger: 0.1,
        onComplete: () => setIsInitialLoad(false)
      });
    }
  }, [isInitialLoad]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    let touchStartY = 0;
    let lastScrollTime = Date.now();
    const scrollCooldown = 1000;
    
    const handleScroll = (direction) => {
      const now = Date.now();
      if (isScrolling.current || now - lastScrollTime < scrollCooldown) return;
      
      const rect = container.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (!isInView) return;
      
      isScrolling.current = true;
      lastScrollTime = now;
      
      setActiveSection(prev => {
        const next = prev + direction;
        if (next >= 0 && next < sections.length) {
          animateSection(direction, next);
          return next;
        }
        if (prev === sections.length - 1 && direction > 0) {
          document.body.style.overflow = 'auto';
          return prev;
        }
        if (prev === 0 && direction < 0) {
          document.body.style.overflow = 'auto';
          return prev;
        }
        return prev;
      });
      
      setTimeout(() => {
        isScrolling.current = false;
      }, scrollCooldown);
    };
    
    // Rest of the event handlers remain the same
    const handleWheel = (e) => {
      const rect = container.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (isInView) {
        const direction = e.deltaY > 0 ? 1 : -1;
        
        if ((activeSection > 0 || (activeSection === 0 && direction > 0)) &&
            (activeSection < sections.length - 1 || (activeSection === sections.length - 1 && direction < 0))) {
          e.preventDefault();
          document.body.style.overflow = 'hidden';
        }
        
        handleScroll(direction);
      }
    };
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e) => {
      const rect = container.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (isInView) {
        const touchEndY = e.touches[0].clientY;
        const direction = touchStartY > touchEndY ? 1 : -1;
        
        if (Math.abs(touchStartY - touchEndY) > 50) {
          if ((activeSection > 0 || (activeSection === 0 && direction > 0)) &&
              (activeSection < sections.length - 1 || (activeSection === sections.length - 1 && direction < 0))) {
            e.preventDefault();
            document.body.style.overflow = 'hidden';
          }
          
          handleScroll(direction);
          touchStartY = touchEndY;
        }
      }
    };

    const handleScrollIntoView = () => {
      const rect = container.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('scroll', handleScrollIntoView);
    
    handleScrollIntoView();
    
    return () => {
      window.removeEventListener('wheel', handleWheel, { capture: true });
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScrollIntoView);
      document.body.style.overflow = 'auto';
    };
  }, [activeSection]);
  
  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black isolate">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full overflow-hidden transition-transform duration-1000 ease-in-out ${
            index === activeSection ? 'translate-y-0' : 
            index < activeSection ? '-translate-y-full' : 'translate-y-full'
          }`}
        >
          {/* Background with parallax effect */}
          <div
            ref={el => bgRefs.current[index] = el}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${section.bgImage})`,
              transform: `scale(${isInitialLoad && index === 0 ? 1.2 : 1.1})`,
              transformOrigin: 'center',
              willChange: 'transform'
            }}
          />
          
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
          
          {/* Content */}
          <div className="relative z-10 h-full">
            <div className={`container mx-auto h-full ${
              index === activeSection ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 h-full items-center">
                {/* Left column - Title */}
                <div className="section-text z-20">
                  {index === 1 && (
                    <div className="hidden md:block absolute left-96 top-56 w-24 h-24 border-8 border-red-500">
                      <div className="absolute inset-0 border-8 border-red-500"></div>
                    </div>
                  )}
                  <h2 
                    ref={el => titleRefs.current[index] = el}
                    className={`md:relative ${index === 0 ? 'md:top-0 md:left-12' : 'md:top-0 md:left-24'} text-4xl md:text-7xl text-white font-uni whitespace-pre-line`}
                  >
                    {section.content.title}
                  </h2>
                </div>

                {/* Middle column - Images */}
                <div 
                  ref={el => imageRefs.current[index] = el}
                  className="relative"
                >
                  <img
                    src={section.content.mainImage}
                    alt="Section Visual"
                    className="w-1/2 md:w-full h-auto relative z-10"
                  />
                  {index === 0 && section.content.overlayImages && section.content.overlayImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Overlay ${i + 1}`}
                      className={`absolute ${
                        i === 0 ? 'top-60 scale-[2]' : 'top-6'
                      } w-1/2 md:w-full h-auto z-${9 - i}`}
                    />
                  ))}
                </div>

                {/* Right column - Description */}
                <div 
                  ref={el => descRefs.current[index] = el}
                  className={`relative ${index === 0 ? 'md:top-40' : 'md:top-40 md:right-24'} section-text z-20`}
                >
                  <p className="text-white/80 text-lg text-right">
                    {section.content.description}
                  </p>
                  <button className="absolute top-30 right-0 border-b border-red-500 text-white px-4 py-2 rounded hover:bg-red-500/20 transition duration-300">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const direction = index > activeSection ? 1 : -1;
              animateSection(direction, index);
              setActiveSection(index);
            }}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              index === activeSection ? 'bg-white scale-150' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;