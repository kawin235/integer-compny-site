import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Users,
} from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const subject = `Service Inquiry: ${formData.service}`;
      const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

      // Open email client
      window.open(
        `mailto:integer.io.ai@gmail.com?subject=${subject}&body=${body}`
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: '',
        });
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const teamContacts = [
    {
      role: 'CEO',
      name: 'Kawin M.S.',
      phone: '+91 8015355914',
      email: 'integeriokawin@gmail.com',
      color: 'emerald',
      linkedin: 'https://www.linkedin.com/in/kawin-m-s-570961285/',
    },
    {
      role: 'COO',
      name: 'Hemanth K',
      phone: '+91 6385279258',
      email: 'integeriohemanth@gmail.com',
      color: 'purple',
      linkedin: 'https://www.linkedin.com/in/hemanth-hk-a66960285/',
    },
    {
      role: 'CXO',
      name: 'Nisha S',
      phone: '+91 7418173021',
      email: 'integerionisha@gmail.com',
      color: 'blue',
      linkedin: 'https://linkedin.com/in/Nishasanthosh',
    },
    {
      role: 'CFO',
      name: 'Muthulakshmi',
      phone: '+91 9585610156',
      email: 'integeriomuthu@gmail.com',
      color: 'pink',
      linkedin: 'https://www.linkedin.com/in/muthulakshmirajaram/',
    },
    {
      role: 'Creative Director',
      name: 'Livan',
      phone: '+91 6385243064',
      email: 'integeriolivan@gmail.com',
      color: 'indigo',
      linkedin: 'https://linkedin.com/in/livan',
    },
  ];

  // Split team into two rows for PC view: first 3, then 2
  const firstRowTeam = teamContacts.slice(0, 3);
  const secondRowTeam = teamContacts.slice(3, 5);

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: 'text-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/10',
      purple: 'text-purple-400 hover:text-purple-400 hover:bg-purple-400/10',
      blue: 'text-blue-400 hover:text-blue-400 hover:bg-blue-400/10',
      pink: 'text-pink-400 hover:text-pink-400 hover:bg-pink-400/10',
      indigo: 'text-indigo-400 hover:text-indigo-400 hover:bg-indigo-400/10',
    };
    return colorMap[color as keyof typeof colorMap] || 'text-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/10';
  };

  const getGlowClasses = (color: string) => {
    const glowMap = {
      emerald: 'hover:shadow-emerald-500/20',
      purple: 'hover:shadow-purple-500/20',
      blue: 'hover:shadow-blue-500/20',
      pink: 'hover:shadow-pink-500/20',
      indigo: 'hover:shadow-indigo-500/20',
    };
    return glowMap[color as keyof typeof glowMap] || 'hover:shadow-emerald-500/20';
  };

  const getGradientClasses = (color: string) => {
    const gradientMap = {
      emerald: 'from-emerald-500/10 via-transparent to-emerald-500/10',
      purple: 'from-purple-500/10 via-transparent to-purple-500/10',
      blue: 'from-blue-500/10 via-transparent to-blue-500/10',
      pink: 'from-pink-500/10 via-transparent to-pink-500/10',
      indigo: 'from-indigo-500/10 via-transparent to-indigo-500/10',
    };
    return gradientMap[color as keyof typeof gradientMap] || 'from-emerald-500/10 via-transparent to-emerald-500/10';
  };

  return (
    <div className="relative min-h-screen pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDark 
              ? 'bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
              : 'text-gray-900'
          }`}>
            Contact Us
          </h1>
          <p className={`text-xl font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            Ready to transform your ideas into reality? Get in touch with
            Integer.io Services today!
          </p>
        </motion.div>

        {/* Role-wise Contact Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Contact Our Team
          </h2>

          {/* Mobile View - Single Column */}
          <div className="grid grid-cols-1 gap-6 lg:hidden">
            {teamContacts.map((contact, index) => (
              <motion.div
                key={contact.role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  rotateX: 5,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                className="group"
              >
                <div
                  className={`
                  relative p-6 rounded-xl backdrop-blur-lg border transition-all duration-500 text-center
                  ${
                    isDark
                      ? 'bg-gray-900/70 border-gray-700/50 hover:bg-gray-800/80'
                      : 'bg-white/90 border-gray-300/50 hover:bg-white/95'
                  }
                  hover:shadow-2xl ${getGlowClasses(contact.color)}
                  transform-gpu will-change-transform
                `}
                >
                  {/* Glow effect */}
                  <div
                    className={`
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-r ${getGradientClasses(contact.color)}
                  `}
                  />

                  <div className="relative z-10">
                    <h3 className={`text-lg font-bold mb-2 ${getColorClasses(contact.color).split(' ')[0]}`}>
                      {contact.role}
                    </h3>
                    <h4
                      className={`text-md font-semibold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {contact.name}
                    </h4>
                    <div className="space-y-3">
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className={`block text-sm transition-colors ${
                          isDark ? 'text-gray-200' : 'text-gray-700'
                        } ${getColorClasses(contact.color)}`}
                      >
                        {contact.phone}
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className={`block text-sm transition-colors break-words ${
                          isDark ? 'text-gray-200' : 'text-gray-700'
                        } ${getColorClasses(contact.color)}`}
                        style={{
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                        }}
                      >
                        {contact.email}
                      </a>

                      {/* LinkedIn Only */}
                      <div className="flex justify-center mt-4 pt-3 border-t border-gray-200/20">
                        <motion.a
                          href={contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg transition-colors hover:bg-blue-500/20 hover:text-blue-400 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="h-5 w-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop View - Two Rows Layout */}
          <div className="hidden lg:block space-y-6">
            {/* First Row - 3 Cards */}
            <div className="grid grid-cols-3 gap-6">
              {firstRowTeam.map((contact, index) => (
                <motion.div
                  key={contact.role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    rotateX: 5,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                  className="group"
                >
                  <div
                    className={`
                    relative p-6 rounded-xl backdrop-blur-lg border transition-all duration-500 text-center
                    ${
                      isDark
                        ? 'bg-gray-900/70 border-gray-700/50 hover:bg-gray-800/80'
                        : 'bg-white/90 border-gray-300/50 hover:bg-white/95'
                    }
                    hover:shadow-2xl ${getGlowClasses(contact.color)}
                    transform-gpu will-change-transform
                  `}
                  >
                    {/* Glow effect */}
                    <div
                      className={`
                      absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-r ${getGradientClasses(contact.color)}
                    `}
                    />

                    <div className="relative z-10">
                      <h3 className={`text-lg font-bold mb-2 ${getColorClasses(contact.color).split(' ')[0]}`}>
                        {contact.role}
                      </h3>
                      <h4
                        className={`text-md font-semibold mb-3 ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        {contact.name}
                      </h4>
                      <div className="space-y-2">
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, '')}`}
                          className={`block text-sm transition-colors ${
                            isDark ? 'text-gray-200' : 'text-gray-700'
                          } ${getColorClasses(contact.color)}`}
                        >
                          {contact.phone}
                        </a>
                        <a
                          href={`mailto:${contact.email}`}
                          className={`block text-sm transition-colors break-words leading-tight ${
                            isDark ? 'text-gray-200' : 'text-gray-700'
                          } ${getColorClasses(contact.color)}`}
                          style={{
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                          }}
                        >
                          {contact.email}
                        </a>

                        {/* LinkedIn Only */}
                        <div className="flex justify-center mt-4 pt-3 border-t border-gray-200/20">
                          <motion.a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-colors hover:bg-blue-500/20 hover:text-blue-400 ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Linkedin className="h-4 w-4" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 Cards Centered with same width as first row */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6 w-2/3">
                {secondRowTeam.map((contact, index) => (
                  <motion.div
                    key={contact.role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      rotateX: 5,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    className="group"
                  >
                    <div
                      className={`
                      relative p-6 rounded-xl backdrop-blur-lg border transition-all duration-500 text-center
                      ${
                        isDark
                          ? 'bg-gray-900/70 border-gray-700/50 hover:bg-gray-800/80'
                          : 'bg-white/90 border-gray-300/50 hover:bg-white/95'
                      }
                      hover:shadow-2xl ${getGlowClasses(contact.color)}
                      transform-gpu will-change-transform
                    `}
                    >
                      {/* Glow effect */}
                      <div
                        className={`
                        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        bg-gradient-to-r ${getGradientClasses(contact.color)}
                      `}
                      />

                      <div className="relative z-10">
                        <h3 className={`text-lg font-bold mb-2 ${getColorClasses(contact.color).split(' ')[0]}`}>
                          {contact.role}
                        </h3>
                        <h4
                          className={`text-md font-semibold mb-3 ${
                            isDark ? 'text-white' : 'text-gray-800'
                          }`}
                        >
                          {contact.name}
                        </h4>
                        <div className="space-y-2">
                          <a
                            href={`tel:${contact.phone.replace(/\s/g, '')}`}
                            className={`block text-sm transition-colors ${
                              isDark ? 'text-gray-200' : 'text-gray-700'
                            } ${getColorClasses(contact.color)}`}
                          >
                            {contact.phone}
                          </a>
                          <a
                            href={`mailto:${contact.email}`}
                            className={`block text-sm transition-colors break-words leading-tight ${
                              isDark ? 'text-gray-200' : 'text-gray-700'
                            } ${getColorClasses(contact.color)}`}
                            style={{
                              wordWrap: 'break-word',
                              overflowWrap: 'break-word',
                            }}
                          >
                            {contact.email}
                          </a>

                          {/* LinkedIn Only */}
                          <div className="flex justify-center mt-4 pt-3 border-t border-gray-200/20">
                            <motion.a
                              href={contact.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-lg transition-colors hover:bg-blue-500/20 hover:text-blue-400 ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Linkedin className="h-4 w-4" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="space-y-6 mb-8">
              <InteractiveCard glowColor="emerald" className="hover-3d">
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8 text-emerald-400" />
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      Phone / WhatsApp
                    </h3>
                    <a
                      href="tel:8015355914"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      +91 8015355914
                    </a>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard glowColor="purple" className="hover-3d">
                <div className="flex items-center space-x-4">
                  <Mail className="h-8 w-8 text-purple-400" />
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:integer.ai.io@gmail.com"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      integer.io.ai@gmail.com
                    </a>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard glowColor="red" className="hover-3d">
                <div className="flex items-center space-x-4">
                  <Youtube className="h-8 w-8 text-red-400" />
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      YouTube Channel
                    </h3>
                    <a
                      href="https://youtube.com/@integerio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      @integerio
                    </a>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard glowColor="pink" className="hover-3d">
                <div className="flex items-center space-x-4">
                  <Instagram className="h-8 w-8 text-pink-400" />
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      Instagram
                    </h3>
                    <a
                      href="https://instagram.com/integer.io.services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      @integer.io.services
                    </a>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard glowColor="blue" className="hover-3d">
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-8 w-8 text-blue-400" />
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      LinkedIn
                    </h3>
                    <a
                      href="https://linkedin.com/company/integer-io-services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Integer.io Services
                    </a>
                  </div>
                </div>
              </InteractiveCard>

              <InteractiveCard glowColor="teal" className="hover-3d">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8 text-teal-400" />
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      Service Areas
                    </h3>
                    <div className="space-y-1">
                      <p className="text-teal-400 flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        Online Clients: Worldwide
                      </p>
                      <p className="text-teal-400 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Offline Clients: Madurai, Coimbatore, Chennai, Bangalore
                      </p>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918015355914"
                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg btn-hover-effect hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </a>
              <a
                href="tel:8015355914"
                className="flex items-center justify-center border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            id="contact-form"
          >
            <InteractiveCard
              glowColor="emerald"
              className="p-8 hover-3d"
              noTilt={true}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
              >
                Send us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Message Sent Successfully!
                  </h3>
                  <p
                    className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                  >
                    We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-emerald-500 transition-colors ${
                        isDark
                          ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-emerald-500 transition-colors ${
                        isDark
                          ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-emerald-500 transition-colors ${
                        isDark
                          ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-emerald-500 transition-colors ${
                        isDark
                          ? 'bg-gray-800 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="Web Services">Web Services</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Logo & Poster Design">
                        Logo & Poster Design
                      </option>
                      <option value="AI & ML Projects">AI & ML Projects</option>
                      <option value="Data Analytics Projects">
                        Data Analytics Projects
                      </option>
                      <option value="Final Year Projects">
                        Final Year Projects
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none ${
                        isDark
                          ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                      }`}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg btn-hover-effect hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </InteractiveCard>
          </motion.div>
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <InteractiveCard className="p-8 text-center hover-3d">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Business Hours
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  Regular Hours
                </h3>
                <p className={isDark ? 'text-gray-200' : 'text-gray-700'}>
                  Monday - Saturday: 9:00 AM - 8:00 PM
                </p>
                <p className={isDark ? 'text-gray-200' : 'text-gray-700'}>
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
              <div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  Emergency Support
                </h3>
                <p className={isDark ? 'text-gray-200' : 'text-gray-700'}>
                  24/7 WhatsApp support for urgent queries
                </p>
                <p className={isDark ? 'text-gray-200' : 'text-gray-700'}>
                  Response within 2-4 hours
                </p>
              </div>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* Interesting Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <InteractiveCard className="p-8 text-center hover-3d">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-2xl"
              >
                📞
              </motion.div>
              <h3
                className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
              >
                Let's Create Something Amazing Together!
              </h3>
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="text-2xl"
              >
                💡
              </motion.div>
            </div>
            <p className={`mb-6 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              Your next big idea is just one conversation away. We're excited to
              hear about your project and help bring your vision to life with
              cutting-edge technology and creative solutions.
            </p>
            <div className="flex justify-center space-x-4">
              {['🌟', '💻', '🚀', '✨', '🎯'].map((emoji, index) => (
                <motion.span
                  key={index}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: 'easeInOut',
                  }}
                  className="text-xl"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </InteractiveCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;