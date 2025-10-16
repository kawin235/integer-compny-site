import React, { useState } from 'react';
import {
  Target,
  Eye,
  Award,
  Users,
  Code,
  Brain,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Globe,
  Shield,
  HeadphonesIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveCard from '../components/InteractiveCard';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../components/logo.png';

// Add these styles to your CSS file or add as a style tag in your component
const flipCardStyles = `
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
`;

const About = () => {
  const { isDark } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Kawin M.S.',
      role: 'Founder & CEO',
      description: 'Leads the company vision, projects, and development.',
      email: 'integeriokawin@gmail.com',
      phone: '+91 8015355914',
      linkedin: 'https://www.linkedin.com/in/kawin-m-s-570961285/',
      portfolio: 'https://kawin-portfolio.netlify.app/',
      image: 'https://i.postimg.cc/28DQW47p/kawin-removebg-preview.png',
      color: 'emerald',
    },
    {
      name: 'Hemanth K',
      role: 'COO (Operations Head)',
      description: 'Handles client research, strategy, and script writing.',
      email: 'integeriohemanth@gmail.com',
      phone: '+91 6385279258',
      linkedin: 'https://www.linkedin.com/in/hemanth-hk-a66960285/',
      image: 'https://i.postimg.cc/Dwm84ZHk/professional.png',
      color: 'blue',
    },
    {
      name: 'Nisha S',
      role: 'CXO (Design & Client Lead)',
      description: 'Manages UI/UX design and connects with new clients.',
      email: 'integerionisha@gmail.com',
      phone: '+91 7418173021',
      linkedin: 'https://linkedin.com/in/Nishasanthosh',
      image:
        'https://i.postimg.cc/yY4vXLZn/Whats-App-Image-2025-08-07-at-20-51-40-72ba0bd3.png',
      color: 'purple',
    },
    {
      name: 'Muthulakshmi',
      role: 'CFO (Finance & Relations)',
      description: 'Oversees profit/loss and supports client communication.',
      email: 'integeriomuthu@gmail.com',
      phone: '+91 9585610156',
      linkedin: 'https://www.linkedin.com/in/muthulakshmirajaram/',
      image: 'https://i.postimg.cc/SQ9D0Qxr/muthulakshmi-removebg-preview.png',
      color: 'pink',
    },
    {
      name: 'Livan',
      role: 'Creative Director',
      description: 'Edits videos and manages YouTube & Instagram content.',
      email: 'integeriolivan@gmail.com',
      phone: '+91 6385243064',
      linkedin: 'https://linkedin.com/in/livan',
      image:
        'https://i.postimg.cc/pTgPMDzN/IMG-20250426-WA0007-1-removebg-preview.png',
      color: 'indigo',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: 'from-emerald-500 to-emerald-400',
      purple: 'from-purple-500 to-purple-400',
      blue: 'from-blue-500 to-blue-400',
      pink: 'from-pink-500 to-pink-400',
      indigo: 'from-indigo-500 to-indigo-400',
      cyan: 'from-cyan-500 to-cyan-400',
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      'from-emerald-500 to-emerald-400'
    );
  };

  const getTextColor = (color: string) => {
    const colorMap = {
      emerald: 'text-emerald-400',
      purple: 'text-purple-400',
      blue: 'text-blue-400',
      pink: 'text-pink-400',
      indigo: 'text-indigo-400',
      cyan: 'text-cyan-400',
    };
    return colorMap[color as keyof typeof colorMap] || 'text-emerald-400';
  };

  return (
    <div className="relative min-h-screen pt-20">
      {/* Inject flip card styles */}
      <style>{flipCardStyles}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Page Title - Fixed spacing to prevent 'g' cutoff */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 pb-8" // Increased bottom margin and padding
        >
          <h1
            className={`text-4xl md:text-6xl font-bold ${
              isDark 
                ? 'bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                : 'text-gray-900'
            }`}
            style={{
              lineHeight: '1.3', // Custom line height to prevent cutoff
              paddingBottom: '0.4rem', // Extra padding to ensure 'g' is visible
              letterSpacing: '0.02em', // Better letter spacing
            }}
          >
            <span style={{ letterSpacing: '0.02em', paddingRight: '4px', paddingBottom: '6px', display: 'inline-block' }}>
              About Integer.io
            </span>
          </h1>
        </motion.div>

        {/* Company Introduction Section - Added more spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-21" // Significantly increased bottom margin
        >
          {/* Section title with proper spacing */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <InteractiveCard glowColor="emerald" className="p-6 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 flex-shrink-0"
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center border-2 ${
                    isDark
                      ? 'border-emerald-400/30'
                      : 'bg-gradient-to-r from-emerald-100/10 to-purple-500/10 border-emerald-500/40'
                  }`}
                >
                  <img
                    src={logo}
                    alt="Integer.io Services Logo"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                  />
                </div>
              </motion.div>

              <div className="text-center md:text-left">
                <p
                  className={`text-base sm:text-lg md:text-xl leading-relaxed ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Integer.io Services is a leading digital solutions provider
                  specializing in web development, AI/ML solutions, and digital
                  marketing. We empower small businesses and students with
                  cutting-edge technology and personalized support. Our mission
                  is to make technology accessible and affordable for everyone,
                  transforming ideas into reality with innovation and
                  excellence.
                </p>
              </div>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* Team Section with Flip Cards - Added significant top spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-30 pt-16" // Added pt-16 for extra top padding
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-80 w-full perspective-1000"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Flip Card Container */}
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    hoveredCard === index ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front Face */}
                  <div
                    className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden transition-all duration-300 ${
                      isDark
                        ? 'bg-white/5 backdrop-blur-md border border-white-100/10'
                        : 'bg-white/70 backdrop-blur-md border border-gray-200/50'
                    } shadow-lg`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getColorClasses(
                        member.color
                      )}`}
                    />
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex justify-center mb-4">
                        <div
                          className={`w-28 h-28 rounded-full overflow-hidden border-2 ${
                            isDark ? 'border-white/50' : 'border-gray-300/50'
                          }`}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-center mb-3">
                        <h3
                          className={`text-xl font-bold mb-1 bg-gradient-to-r ${getColorClasses(
                            member.color
                          )} bg-clip-text text-transparent`}
                        >
                          {member.name}
                        </h3>
                        <p
                          className={`text-sm font-medium bg-gradient-to-r ${getColorClasses(
                            member.color
                          )} bg-clip-text text-transparent`}
                        >
                          {member.role}
                        </p>
                      </div>
                      <p
                        className={`text-sm text-center mb-4 flex-grow ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {member.description}
                      </p>
                      <div className="text-center text-xs text-gray-400 mt-auto">
                        Hover for contact details
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div
                    className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden rotate-y-180 transition-all duration-300 ${
                      isDark
                        ? 'bg-white/5 backdrop-blur-md border border-white/10'
                        : 'bg-white/70 backdrop-blur-md border border-gray-200/50'
                    } shadow-lg`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getColorClasses(
                        member.color
                      )}`}
                    />
                    <div className="p-6 h-full flex flex-col justify-center">
                      <h3
                        className={`text-xl font-bold mb-4 text-center bg-gradient-to-r ${getColorClasses(
                          member.color
                        )} bg-clip-text text-transparent`}
                      >
                        Contact Details
                      </h3>
                      <div className="space-y-4">
                        <a
                          href={`mailto:${member.email}`}
                          className={`flex items-center space-x-2 text-sm ${
                            isDark
                              ? 'text-white hover:text-emerald-400'
                              : 'text-gray-800 hover:text-emerald-600'
                          } transition-colors`}
                        >
                          <Mail className="h-4 w-4" />
                          <span className="truncate">{member.email}</span>
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          className={`flex items-center space-x-2 text-sm ${
                            isDark
                              ? 'text-white hover:text-emerald-400'
                              : 'text-gray-800 hover:text-emerald-600'
                          } transition-colors`}
                        >
                          <Phone className="h-4 w-4" />
                          <span>{member.phone}</span>
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 text-sm ${
                            isDark
                              ? 'text-white hover:text-emerald-400'
                              : 'text-gray-800 hover:text-emerald-600'
                          } transition-colors`}
                        >
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn</span>
                        </a>
                        {member.portfolio && (
                          <a
                            href={member.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center space-x-2 text-sm ${
                              isDark
                                ? 'text-white hover:text-emerald-400'
                                : 'text-gray-800 hover:text-emerald-600'
                            } transition-colors`}
                          >
                            <Globe className="h-4 w-4" />
                            <span>Portfolio</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us - Added significant top spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 pt-16" // Added pt-16 for extra top padding
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <InteractiveCard glowColor="emerald" className="p-6">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    isDark ? 'bg-emerald-500/20' : 'bg-emerald-100'
                  }`}
                >
                  <Target
                    className={`h-8 w-8 ${
                      isDark ? 'text-emerald-400' : 'text-emerald-600'
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  Precision & Quality
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  We deliver pixel-perfect solutions with meticulous attention
                  to detail and rigorous quality standards.
                </p>
              </div>
            </InteractiveCard>

            <InteractiveCard glowColor="purple" className="p-6">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    isDark ? 'bg-purple-500/20' : 'bg-purple-100'
                  }`}
                >
                  <Shield
                    className={`h-8 w-8 ${
                      isDark ? 'text-purple-400' : 'text-purple-600'
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  Reliability & Support
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  Count on our dedicated team for ongoing support and
                  maintenance long after project completion.
                </p>
              </div>
            </InteractiveCard>

            <InteractiveCard glowColor="blue" className="p-6">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                  }`}
                >
                  <Brain
                    className={`h-8 w-8 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  Innovation & Expertise
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  We leverage cutting-edge technologies and industry best
                  practices to create forward-thinking solutions.
                </p>
              </div>
            </InteractiveCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
