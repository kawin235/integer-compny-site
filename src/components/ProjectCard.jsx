import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Code,
  Palette,
  Database,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ProjectCard = ({ projects, className = '' }) => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'web development':
        return <Code className="h-4 w-4" />;
      case 'health tech':
        return <Database className="h-4 w-4" />;
      default:
        return <Palette className="h-4 w-4" />;
    }
  };

  return (
    <div className={`relative w-full max-w-5xl mx-auto ${className}`}>
      <div
        className={`text-right mb-4 text-sm font-medium ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {currentIndex + 1} / {projects.length}
      </div>

      <div className="relative mx-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <motion.div
              className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border backdrop-blur-[2px]
                ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-800/60 border-gray-700/40'
                    : 'bg-gradient-to-br from-white/95 via-white/90 to-gray-50/80 border-gray-200/60'
                }`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {/* Content First */}
              <div className="p-6 md:p-8 space-y-5">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(projects[currentIndex].category)}
                  <span className="text-emerald-400 text-sm font-medium">
                    {projects[currentIndex].category}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {projects[currentIndex].title}
                </h2>

                <p
                  className={`text-base md:text-lg leading-relaxed font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {projects[currentIndex].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[currentIndex].technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        isDark
                          ? 'bg-gray-800/80 text-gray-300 border border-gray-700/50'
                          : 'bg-gray-100/80 text-gray-700 border border-gray-200/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    See Online
                  </a>
                </div>
              </div>

              {/* Image Second */}
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                <motion.img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Prev/Next Buttons - always visible */}
        <motion.button
          onClick={handlePrev}
          disabled={isAnimating}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            absolute left-2 top-1/2 -translate-y-1/2 z-50
            w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200
            ${
              isDark
                ? 'bg-gray-900/80 border border-gray-700 text-gray-200'
                : 'bg-white/90 border border-gray-300 text-gray-700'
            }
            shadow-xl backdrop-blur-sm disabled:opacity-50
          `}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={handleNext}
          disabled={isAnimating}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            absolute right-2 top-1/2 -translate-y-1/2 z-50
            w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200
            ${
              isDark
                ? 'bg-gray-900/80 border border-gray-700 text-gray-200'
                : 'bg-white/90 border border-gray-300 text-gray-700'
            }
            shadow-xl backdrop-blur-sm disabled:opacity-50
          `}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 300);
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 w-7'
                : isDark
                ? 'bg-gray-600 hover:bg-gray-500'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;