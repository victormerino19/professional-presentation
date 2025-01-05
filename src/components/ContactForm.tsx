import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const ContactForm = () => {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-300 mb-2">{t.contact.form.name}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-300 mb-2">{t.contact.form.email}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-gray-800 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 mb-2">{t.contact.form.message}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full bg-gray-800 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white py-3 rounded flex items-center justify-center space-x-2 hover:bg-emerald-600 transition-colors"
      >
        <span>{t.contact.form.send}</span>
        <Send size={20} />
      </button>
    </motion.form>
  );
};

export default ContactForm;