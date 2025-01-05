import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Hero = () => {
  const t = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-6 bg-gray-900"
    >
      <div className="max-w-4xl">
        <h1 className="text-1 sm text-emerald-400 font-bold mb-5">{t.hero.greeting}</h1>
        <h2 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4">
          {t.hero.name}
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">
          {t.hero.tagline}
        </h3>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          {t.hero.description}
        </p>
        
        <div className="flex space-x-6">
          <SocialLink href="https://github.com/victormerino19" icon={<Github size={24} />} />
          <SocialLink href="https://www.linkedin.com/in/victor-meri%C3%B1o-036b26120/" icon={<Linkedin size={24} />} />
          <SocialLink href="mailto:merinovictor07@gmail.com" icon={<Mail size={24} />} />
          <SocialLink href="https://wa.me/573116113828" icon={<MessageCircle size={24} />} />
        </div>
      </div>
    </motion.section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-emerald-400 transition-colors"
  >
    {icon}
  </a>
);

export default Hero;