import React, { useState ,useRef,useEffect} from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { useCursorEffect } from "../../contexts/onMouseEffectContext";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  const { registerHoverRef } = useCursorEffect();
    const iconRef1 = useRef();
    const iconRef2 = useRef();
    const iconRef3 = useRef();
    useEffect(() => {
      if (iconRef1.current) registerHoverRef(iconRef1.current);
      if (iconRef2.current) registerHoverRef(iconRef2.current);
      if (iconRef3.current) registerHoverRef(iconRef3.current);
    }, [registerHoverRef]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-red-900/20 to-black/90 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl  mb-4  ">
              TIME<span className='text-red-500'> ZONE</span>
            </h1>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-300">
              Contact Our Watch Specialists
            </h2>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience luxury timepieces with personalized service. Our experts are here to assist you.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold mb-8  "
            >
              Get in Touch
            </motion.h3>

            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-r from-gray-900/80 to-black/60 border border-red-900/30 rounded-2xl p-6 backdrop-blur-sm hover:border-white transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold ">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-400">Mon - Sat, 9AM - 7PM</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-r from-gray-900/80 to-black/60 border border-red-900/30 rounded-2xl p-6 backdrop-blur-sm hover:border-white transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold ">Email</h4>
                    <p className="text-gray-300">contact@timezone.luxury</p>
                    <p className="text-sm text-gray-400">We reply within 24 hours</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-r from-gray-900/80 to-black/60 border border-red-900/30 rounded-2xl p-6 backdrop-blur-sm hover:border-white transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold ">Visit Our Showroom</h4>
                    <p className="text-gray-300">123 Luxury Avenue</p>
                    <p className="text-gray-300">New York, NY 10001</p>
                    <p className="text-sm text-gray-400">By appointment only</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-r from-gray-900/80 to-black/60 border border-red-900/30 rounded-2xl p-6 backdrop-blur-sm hover:border-white transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold ">Business Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-xl font-semibold  mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-700 transition-all duration-300 "
                  ref={iconRef1}
                >
                  <Instagram className="w-6 h-6 text-white pointer-events-none" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-700 transition-all duration-300 "
                  ref={iconRef2}
                >
                  <Facebook className="w-6 h-6 text-white pointer-events-none" />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-700 transition-all duration-300 "
                  ref={iconRef3}
                >
                  <Twitter className="w-6 h-6 text-white pointer-events-none" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-gray-900/50 to-black/70 border border-red-900/30 rounded-3xl p-8 backdrop-blur-lg"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold mb-8 "
            >
              Send us a Message
            </motion.h3>

            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-900/30"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}