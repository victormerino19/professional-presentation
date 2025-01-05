import React from 'react';
import { Laptop, Server, Wrench } from 'lucide-react';
import SkillCategory from './SkillCategory';
import { useTranslation } from '../../hooks/useTranslation';

const Skills = () => {
  const t = useTranslation();

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{t.skills.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory
            title={t.skills.frontend}
            icon={<Laptop size={40} />}
            skills={['Javascript', 'Bootstrap', 'HTML', 'CSS']}
          />
          <SkillCategory
            title={t.skills.backend}
            icon={<Server size={40} />}
            skills={["Python", "R", "Java", "Kotlin", "SQL", "React Native"]}
          />
          <SkillCategory
            title={t.skills.tools}
            icon={<Wrench size={40} />}
            skills={['Power BI', 'Tableau', 'Django', 'Flask', 'Tkinter', 'Pandas', 'Selenium', 'Sklearn']}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;