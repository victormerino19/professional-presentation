import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills/Skills';
import ContactForm from './components/ContactForm';
import { projects } from './data/projects';
import { useTranslation } from './hooks/useTranslation';

function AppContent() {
  const t = useTranslation();

  return (
    <div className="bg-gray-900 text-white">
      <Navigation />
      
      <main>
        <Hero />

        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.projects.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Skills />

        <section id="contact" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">{t.contact.title}</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>{t.footer.text}</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App;