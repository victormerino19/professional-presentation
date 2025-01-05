import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const t = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full bg-gray-900 bg-opacity-95 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-emerald-400 transition-colors">
          <span>V</span>
          <span className="inline-block -translate-y-1">M</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks t={t} />
          <LanguageToggle />
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-gray-900 py-4"
        >
          <div className="flex flex-col items-center space-y-4">
            <NavLinks t={t} mobile setIsOpen={setIsOpen} />
            <LanguageToggle />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLinks = ({ t, mobile = false, setIsOpen = () => {} }) => {
  const links = [
    { name: t.nav.about, path: '#about' },
    { name: t.nav.projects, path: '#projects' },
    { name: t.nav.skills, path: '#skills' },
    { name: t.nav.contact, path: '#contact' },
  ];

  return links.map((link) => (
    <a
      key={link.name}
      href={link.path}
      className="text-gray-300 hover:text-emerald-400 transition-colors"
      onClick={() => mobile && setIsOpen(false)}
    >
      {link.name}
    </a>
  ));
};

export default Navigation;