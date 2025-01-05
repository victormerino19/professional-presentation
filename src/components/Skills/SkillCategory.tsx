import React from 'react';
import { IconProps } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <div className="flex items-center justify-center mb-6 text-emerald-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-400 text-center">{skill}</li>
      ))}
    </ul>
  </div>
);

export default SkillCategory;