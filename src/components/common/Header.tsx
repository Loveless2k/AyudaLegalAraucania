import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../../data/content';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-white/20 py-3'
          : 'bg-primary-600/95 backdrop-blur-md shadow-soft py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img
            src="/img/logotipo.png"
            alt="Logo"
            className="w-16 h-16"
            />
            <div className="ml-3">
              <div className={`text-3xl font-serif font-bold leading-tight transition-colors duration-500 ${
                scrolled ? 'text-secondary-900' : 'text-white'
              }`}>
                Asesorías <span className="text-[#D39C2E]">Legales</span>
              </div>
              <div className="text-[10px] tracking-widest uppercase mt-1">
                <span className={`transition-colors duration-500 ${
                  scrolled ? 'text-secondary-700' : 'text-white/90'
                }`}>Ayuda Legal </span>
                <span className="text-[#D39C2E] font-semibold">Araucanía</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    scrolled
                      ? `nav-link-header-scrolled ${isActive ? 'nav-link-header-scrolled-active' : ''}`
                      : `nav-link-header ${isActive ? 'nav-link-header-active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="ml-6"
            >
              <a
                href="tel:+56982243242"
                className={`btn transition-all duration-500 ${
                  scrolled
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-soft hover:shadow-glow'
                    : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30'
                }`}
              >
                <Phone className="h-4 w-4 mr-2" />
                Llámanos
              </a>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-500 ${
                scrolled
                  ? 'bg-primary-500/10 text-primary-500'
                  : 'bg-white/20 text-white'
              }`}
              whileHover={{
                backgroundColor: scrolled ? "rgba(99, 102, 241, 0.2)" : "rgba(255, 255, 255, 0.3)"
              }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-secondary-900/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative bg-white/95 backdrop-blur-md border-b border-white/20 shadow-large"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <nav className="container-custom py-8">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                            isActive
                              ? 'text-primary-500 bg-primary-50/80'
                              : 'text-secondary-700 hover:text-primary-500 hover:bg-primary-50/50'
                          }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.2 }}
                    className="pt-6"
                  >
                    <a
                      href="tel:+56982243242"
                      className="btn-primary w-full"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Llámanos Ahora
                    </a>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;