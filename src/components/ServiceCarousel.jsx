import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './ServiceCarousel.css';

const ServiceCarousel = () => {
  const { isDark } = useTheme();
  const [rotation, setRotation] = useState(0); // kept for initial paint only
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const rafRef = useRef(null);
  const rotationRef = useRef(0);

  const services = [
    {
      title: 'Web Development',
      description:
        'Professional websites with responsive design and modern features',
      image:
        'https://i.postimg.cc/9097sDcx/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image-1496223-remo.png',
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive interfaces and seamless user experiences',
      image: 'https://i.postimg.cc/Dz7PsP77/Ui-ux-Testing.png',
    },
    {
      title: 'Logo Design',
      description: 'Professional brand identity and creative logo solutions',
      image: 'https://i.postimg.cc/JndxRCNg/graphic.png',
    },
    {
      title: 'Final Year Projects',
      description: 'AI, ML, DL, NLP, Data Analysis Projects with Documentation',
      image: 'https://i.postimg.cc/tC6KvByy/about-inner.png',
    },
    {
      title: 'Video Editing',
      description: 'Professional video editing and post-production services',
      image:
        'https://i.postimg.cc/J0Q1y8xr/seo-services-500x500-removebg-preview.png',
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social media planning and content creation',
      image: 'https://i.postimg.cc/R0TGbbg3/social-media-management.png',
    },
  ];

  // Intersection Observer to optimize performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Optimized animation: drive transform via ref + CSS variable (no state churn)
  useEffect(() => {
    if (!isIntersecting || !carouselRef.current) return;

    let lastTime = performance.now();
    const speed = window.innerWidth < 768 ? 0.175 : 0.25; // ~30% slower on mobile

    const step = (now) => {
      if (document.hidden) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const delta = now - lastTime;
      if (delta >= 16) {
        rotationRef.current = (rotationRef.current - speed) % 360;
        carouselRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
        lastTime = now;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [isIntersecting]);

  // Keep rotation state in sync for initial render and when ref resets
  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  return (
    <div
      ref={sectionRef}
      className={`service-section ${
        isDark ? 'dark-theme' : 'light-theme'
      }`}
      data-theme={isDark ? 'dark' : 'light'}
    >
      <div className="carousel-container">
        <div
          className="carousel"
          ref={carouselRef}
          style={{
            transform: `rotateY(${rotation}deg)`,
            willChange: isIntersecting ? 'transform' : 'auto',
          }}
        >
          {services.map((service, index) => {
            const theta = (360 / services.length) * index;

            return (
              <div
                key={index}
                className="carousel__face"
                style={{
                  transform: `rotateY(${theta}deg) translateZ(var(--translateZ))`,
                  '--theta': `${theta}deg`,
                }}
              >
                <div className="carousel-content">
                  <div className="service-image-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="view-all-services-wrapper">
        <Link to="/services" className="view-all-button">
         
          <ArrowRight className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCarousel;
