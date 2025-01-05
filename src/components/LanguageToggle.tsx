import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors"
      aria-label="Toggle language"
    >
      <Languages size={20} />
      <span className="text-sm uppercase">{language}</span>
    </button>
  );
};

export default LanguageToggle;