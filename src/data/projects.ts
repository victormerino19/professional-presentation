import { Project } from '../types';
import facturacion from '../assets/facturacion.jpg';
import dasboard from '../assets/dasboard.jpg';
import generador from '../assets/generador.jpg';
import software from '../assets/software.jpg';
import analisis from '../assets/analisis.jpg';

export const projects: Project[] = [
  {
    title: "Software contable y automatización para facturas electrónicas",
    description: "Desarrollé un sistema contable integrado con funciones de automatización para la generación y envío de facturas electrónicas cumpliendo con las normativas fiscales. El sistema incluye herramientas de análisis financiero y generación de reportes detallados.",
    technologies: ["Python", "Tkinter", "Selenium", "Pandas"],
    imageUrl: facturacion,
    githubUrl: "https://github.com/victormerino19/portfolio-victor-merino/blob/main/AUTOVIC02.py",
  },
  {
    title: "Software de informes automatizados",
    description: "Este software automatiza la recopilación de datos y genera informes personalizados en tiempo real, reduciendo el tiempo de análisis manual. Fue diseñado para adaptarse a las necesidades específicas de empresas medianas.",
    technologies: ["Python", "Tkinter", "Pandas"],
    imageUrl: generador,
    githubUrl: "https://github.com/victormerino19/portfolio-victor-merino/blob/main/generador_informesCV.py",
  },
  {
    title: "Página web para un periódico",
    description: "Diseñé y desarrollé una página web dinámica para un periódico local. La plataforma incluye un sistema de gestión de contenido (CMS) que permite a los administradores publicar artículos, noticias y multimedia de forma eficiente.",
    technologies: ["Javascript", "HTML", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
    githubUrl: "https://github.com/victormerino19/portfolio-victor-merino/tree/main/cuarto-poder",
  },
  {
    title: "Software contable para empresa de refrigeración y mantenimiento",
    description: "Implementé un sistema contable que optimiza el control de inventarios, genera facturas y organiza los reportes financieros para una empresa mediana del sector de refrigeración y mantenimiento.",
    technologies: ["Python", "SQL"],
    imageUrl: software,
    githubUrl: "https://github.com/victormerino19/portfolio-victor-merino/blob/main/untitled19.py",
  },
  {
    title: "Analítico de datos para una empresa de caja de compensación",
    description: "Realicé un análisis exhaustivo de datos para identificar patrones de comportamiento y optimizar la gestión de recursos en una empresa grande de caja de compensación. Este proyecto incluyó el desarrollo de modelos predictivos.",
    technologies: ["Python"],
    imageUrl: analisis,
    githubUrl: "https://github.com/victormerino19/portfolio-victor-merino/tree/main/software%20contable%20erp",
  },
  {
    title: "Análisis estadístico y dashboard para red de compraventas",
    description: "Desarrollé un dashboard interactivo que presenta análisis estadísticos clave para una red de compraventas. Este proyecto mejoró la visualización de datos y facilitó la toma de decisiones basadas en información.",
    technologies: ["Python", "Bootstrap", "Pandas", "Plotly", "Sklearn"],
    imageUrl: dasboard,
    githubUrl: "https://github.com/victormerino19/portfolio-victor-merino/blob/main/dashboard.py",
  }
];