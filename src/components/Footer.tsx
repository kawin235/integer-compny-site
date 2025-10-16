import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ExternalLink,
  Instagram,
  Linkedin,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logo from './logo.png';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Students', path: '/students' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const services = [
    'Web Services',
    'Digital Marketing',
    'Video Editing',
    'Logo & Poster Design',
    'AI & ML Projects',
    'Data Analytics Projects',
  ];

  return (
    <footer
      className={`relative mt-20 border-t transition-all duration-300 ${
        isDark
          ? 'bg-black/30 border-white/10 backdrop-blur-2xl' // glassy dark
          : 'bg-white/70 border-gray-200/60 backdrop-blur-xl'
      }`}
      style={{
        backgroundImage: isDark
          ? 'linear-gradient(180deg, rgba(17,24,39,0.35) 0%, rgba(17,24,39,0.25) 60%, rgba(17,24,39,0.35) 100%)'
          : 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.8) 100%)',
      }}
    >
      {/* Subtle gradient and grid accents for professional feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-40"
      >
        <div className={`absolute -top-24 -right-24 w-80 h-80 blur-3xl rounded-full ${
          isDark ? 'bg-emerald-500/10' : 'bg-purple-400/10'
        }`} />
        <div className={`absolute -bottom-16 -left-24 w-96 h-96 blur-3xl rounded-full ${
          isDark ? 'bg-cyan-500/10' : 'bg-pink-400/10'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
                Integer.io
              </span>
            </div>
            <p
              className={`mb-4 text-sm leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Empowering Tamil Nadu's future through smart web & AI solutions.
              Professional digital services for businesses, institutions, and
              students.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/918015355914"
                className={`p-2 rounded-lg transition-colors border ${
                  isDark
                    ? 'text-gray-200 border-white/10 hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-400/10'
                    : 'text-gray-600 border-gray-200 hover:text-emerald-600 hover:border-emerald-600/50 hover:bg-emerald-600/5'
                }`}
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:integer.io.ai@gmail.com"
                className={`p-2 rounded-lg transition-colors border ${
                  isDark
                    ? 'text-gray-200 border-white/10 hover:text-purple-400 hover:border-purple-400/40 hover:bg-purple-400/10'
                    : 'text-gray-600 border-gray-200 hover:text-purple-600 hover:border-purple-600/50 hover:bg-purple-600/5'
                }`}
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/integer.io/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors border ${
                  isDark
                    ? 'text-gray-200 border-white/10 hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10'
                    : 'text-gray-600 border-gray-200 hover:text-pink-600 hover:border-pink-600/50 hover:bg-pink-600/5'
                }`}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/integer-io-services/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors border ${
                  isDark
                    ? 'text-gray-200 border-white/10 hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10'
                    : 'text-gray-600 border-gray-200 hover:text-blue-600 hover:border-blue-600/50 hover:bg-blue-600/5'
                }`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className={`text-lg font-semibold tracking-wide mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-all hover:translate-x-1 transform duration-200 flex items-center group ${
                      isDark
                        ? 'text-gray-300 hover:text-emerald-400'
                        : 'text-gray-700 hover:text-emerald-600'
                    }`}
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4
              className={`text-md font-bold mt-6 mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-all hover:translate-x-2 transform duration-200 flex items-center group ${
                      isDark
                        ? 'text-gray-300 hover:text-emerald-400'
                        : 'text-gray-700 hover:text-emerald-600'
                    }`}
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className={`text-lg font-semibold tracking-wide mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center">
                  <ArrowRight className={`h-4 w-4 mr-2 ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`} />
                  <span
                    className={`text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3
              className={`text-lg font-semibold tracking-wide mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone
                  className={`h-4 w-4 ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                />
                <a
                  href="tel:8015355914"
                  className={`text-sm ${
                    isDark
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-600 hover:text-emerald-600'
                  } transition-colors`}
                >
                  +91 8015355914
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail
                  className={`h-4 w-4 ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}
                />
                <a
                  href="mailto:integer.ai.io@gmail.com"
                  className={`text-sm ${
                    isDark
                      ? 'text-gray-300 hover:text-purple-400'
                      : 'text-gray-600 hover:text-purple-600'
                  } transition-colors`}
                >
                  integer.ai.io@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin
                  className={`h-4 w-4 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                />
                <span
                  className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram
                  className={`h-4 w-4 ${
                    isDark ? 'text-pink-400' : 'text-pink-600'
                  }`}
                />
                <a
                  href="https://instagram.com/integer.io.services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm hover:scale-105 transition-all ${
                    isDark
                      ? 'text-gray-300 hover:text-pink-400'
                      : 'text-gray-600 hover:text-pink-600'
                  }`}
                >
                  @integer.io.services
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin
                  className={`h-4 w-4 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                />
                <a
                  href="https://linkedin.com/company/integer-io-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm hover:scale-105 transition-all ${
                    isDark
                      ? 'text-gray-300 hover:text-blue-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Integer.io Services
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h4
                className={`text-md font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Business Hours
              </h4>
              <div
                className={`text-sm space-y-1 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
                <p className="text-xs text-emerald-400">
                  24/7 WhatsApp Support
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-10 pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p
              className={`text-sm flex items-center ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              © 2024 Integer.io Services. Crafted with{' '}
              <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> by
              MS Kawin
            </p>
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="text-emerald-400"
              >
                🚀
              </motion.div>
              <span
                className={`text-xs ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}
              >
                Launching Dreams into Digital Reality
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
            <div className="flex items-center space-x-2 mb-1">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-emerald-400"
              >
                ⭐
              </motion.span>
              <span
                className={`text-sm font-medium ${
                  isDark ? 'text-emerald-400' : 'text-emerald-600'
                }`}
              >
                Trusted Worldwide
              </span>
            </div>
            <div className="flex items-center space-x-1">
              {['🌍', '💻', '🎯', '✨'].map((emoji, index) => (
                <motion.span
                  key={index}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeInOut',
                  }}
                  className="text-sm"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Animated Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 text-center"
        >
          <div
            className={`p-6 rounded-xl border ${
              isDark
                ? 'border-emerald-400/20 bg-emerald-400/5'
                : 'border-emerald-500/20 bg-emerald-500/5'
            }`}
          >
            <div className="flex justify-center items-center space-x-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="text-2xl"
              >
                🌟
              </motion.div>
              <h3
                className={`text-lg font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent`}
              >
                Building Tomorrow's Digital World Today
              </h3>
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-2xl"
              >
                🚀
              </motion.div>
            </div>
            <p
              className={`text-sm mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Every pixel, every line of code, every creative solution - crafted
              with passion to transform your digital dreams into reality.
            </p>
            <div className="flex justify-center items-center space-x-4">
              {[
                { emoji: '💡', text: 'Innovate' },
                { emoji: '🎨', text: 'Create' },
                { emoji: '🚀', text: 'Launch' },
                { emoji: '🌟', text: 'Succeed' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <motion.span
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: 'easeInOut',
                    }}
                    className="text-lg mb-1"
                  >
                    {item.emoji}
                  </motion.span>
                  <span
                    className={`text-xs ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="text-2xl"
          >
            🛸
          </motion.div>
        </div>

        <div className="absolute bottom-4 left-4 opacity-20">
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-xl"
          >
            🌟
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
