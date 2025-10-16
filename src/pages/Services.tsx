import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Instagram, Palette, Globe, Shield, BarChart3, TrendingUp, Smartphone, Camera, Megaphone, Users, FileText, Briefcase, User, Layers } from 'lucide-react';
import InteractiveCard from '../components/InteractiveCard';
import { useTheme } from '../contexts/ThemeContext';
import ReviewCarousel from '../components/ReviewCarousel';

const Services = () => {
  const { isDark } = useTheme();
  
  const coreServices = [
    {
      category: 'Web Development',
      icon: <Code className="h-12 w-12" />,
      color: 'emerald' as const,
      isCore: true,
      description: 'High demand, shows tech & design skills',
      features: [
        'Static & Dynamic Website Design',
        'Responsive & Mobile-Ready Designs',
        'Free/Paid Hosting Options',
        'School/Business Packages',
        'E-commerce Solutions',
        'CMS Integration',
        'SEO Optimization',
        'Performance Optimization'
      ]
    },
    {
      category: 'AI & ML Projects',
      icon: <Brain className="h-12 w-12" />,
      color: 'purple' as const,
      isCore: true,
      description: 'Your unique skill — sets you apart',
      features: [
        'Commercial AI Tools',
        'Sales Prediction Models',
        'Customer Segmentation',
        'Python/Streamlit Dashboards',
        'ML, NLP, CV Projects',
        'Forensics-AI Solutions'
      ]
    },
    {
      category: 'Logo Design',
      icon: <Palette className="h-12 w-12" />,
      color: 'pink' as const,
      isCore: true,
      description: 'Entry point for small businesses',
      features: [
        'Professional Logo Creation',
        'Brand Identity Design',
        'Business Card Design',
        'Letterhead & Stationery',
        'Social Media Kit',
        'Brand Guidelines'
      ]
    },
    {
      category: 'Data Analysis / SEO',
      icon: <BarChart3 className="h-12 w-12" />,
      color: 'blue' as const,
      isCore: true,
      description: 'Helps businesses grow online',
      features: [
        'Business Intelligence Reports',
        'Data Visualization Dashboards',
        'Statistical Analysis',
        'Market Research Analysis',
        'Performance Analytics',
        'Predictive Analytics',
        'SEO Optimization',
        'Website Analytics'
      ]
    },
    {
      category: 'Video Editing',
      icon: <TrendingUp className="h-12 w-12" />,
      color: 'indigo' as const,
      isCore: true,
      description: 'Essential for engaging content',
      features: [
        'Professional Video Editing',
        'YouTube Content Creation',
        'Social Media Videos',
        'Corporate Presentations',
        'Motion Graphics',
        'Color Correction & Grading'
      ]
    }
  ];

  const supportingServices = [
    {
      category: 'Poster Design',
      icon: <Palette className="h-8 w-8" />,
      color: 'cyan' as const,
      note: 'Good for branding packages'
    },
    {
      category: 'Product Shoots',
      icon: <Camera className="h-8 w-8" />,
      color: 'green' as const,
      note: 'Add-on for eCommerce sites'
    },
    {
      category: 'Digital Marketing',
      icon: <Megaphone className="h-8 w-8" />,
      color: 'orange' as const,
      note: 'Connects with SEO & analytics'
    },
    {
      category: 'Social Media Handling',
      icon: <Users className="h-8 w-8" />,
      color: 'pink' as const,
      note: 'Suggest if clients want full package'
    },
    {
      category: 'YouTube Thumbnails',
      icon: <Smartphone className="h-8 w-8" />,
      color: 'red' as const,
      note: 'Niche but useful'
    },
    {
      category: 'Business Card Design',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'gray' as const,
      note: 'Simple upsell'
    },
    {
      category: 'Resume/Portfolio Design',
      icon: <User className="h-8 w-8" />,
      color: 'teal' as const,
      note: 'Popular among job seekers'
    },
    {
      category: 'UI/UX Designing',
      icon: <Layers className="h-8 w-8" />,
      color: 'violet' as const,
      note: 'High-value service'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
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
            Our Services
          </h1>
          <p className={`text-xl max-w-3xl mx-auto font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            Comprehensive digital solutions tailored for businesses, institutions, and students worldwide
          </p>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Client Reviews
          </h2>
          
          <ReviewCarousel />
        </motion.div>

        {/* Core Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              🏆 Core Services
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Our main expertise that drives business success
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={service.category}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group"
              >
                <div className={`
                  relative p-8 rounded-2xl backdrop-blur-lg border transition-all duration-500
                  ${isDark 
                    ? 'bg-gray-900/70 border-gray-700/50 hover:bg-gray-800/80' 
                    : 'bg-white/90 border-gray-300/50 hover:bg-white/95'
                  }
                  hover:shadow-2xl hover:shadow-${service.color}-500/20
                  transform-gpu will-change-transform
                `}>
                  {/* Glow effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-r from-${service.color}-500/10 via-transparent to-${service.color}-500/10
                  `} />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`text-${service.color}-400 mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {service.category}
                    </h3>
                    <p className={`text-sm mb-4 font-medium text-${service.color}-400`}>
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className={`flex items-center ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 bg-${service.color}-400`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Supporting Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              🔧 Supporting Services
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Additional services to complete your digital transformation
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {supportingServices.map((service, index) => (
              <motion.div
                key={service.category}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="group"
              >
                <div className={`
                  relative p-6 rounded-xl backdrop-blur-lg border transition-all duration-300
                  ${isDark 
                    ? 'bg-gray-900/60 border-gray-700/50 hover:bg-gray-800/70' 
                    : 'bg-white/80 border-gray-300/50 hover:bg-white/90'
                  }
                  hover:shadow-xl transform-gpu will-change-transform
                `}>
                  <motion.div 
                    className={`text-${service.color}-400 mb-4`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {service.category}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Legacy services grid - hidden */}
        <div className="hidden">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <InteractiveCard glowColor={service.color} className="h-full hover-3d">
                <div className={`text-${service.color}-400 mb-6`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {service.category}
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                        service.color === 'emerald' ? 'bg-emerald-400' :
                        service.color === 'pink' ? 'bg-pink-400' :
                        service.color === 'purple' ? 'bg-purple-400' :
                        service.color === 'blue' ? 'bg-blue-400' :
                        service.color === 'indigo' ? 'bg-indigo-400' :
                        'bg-emerald-400'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>

        {/* Special Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Special Packages
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <InteractiveCard glowColor="emerald" className="p-8 hover-3d">
              <Globe className="h-16 w-16 text-emerald-400 mb-6" />
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Complete Business Package</h3>
              <ul className={`space-y-3 mb-6 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  Professional Website
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  Logo & Brand Identity
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  Social Media Setup
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  3 Months Marketing Support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  Free Hosting (1 Year)
                </li>
              </ul>
              <div className="text-emerald-400 font-bold text-lg">Contact for Quote</div>
            </InteractiveCard>

            <InteractiveCard glowColor="purple" className="p-8 hover-3d">
              <Shield className="h-16 w-16 text-purple-400 mb-6" />
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Student Special Package</h3>
              <ul className={`space-y-3 mb-6 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Final Year Project
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Complete Documentation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Source Code
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Presentation Support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  1-on-1 Guidance
                </li>
              </ul>
              <div className="text-purple-400 font-bold text-lg">Contact for Quote</div>
            </InteractiveCard>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <InteractiveCard className="p-12 hover-3d">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className={`text-xl mb-8 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              Contact us today for a free consultation and custom quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8015355914"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Call Now: 8015355914
              </a>
              <a
                href="mailto:integer.ai.io@gmail.com"
                className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Email Us
              </a>
            </div>
          </InteractiveCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;