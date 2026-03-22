"use client";

import { Github, Globe } from "lucide-react";
import { Carousel } from "./carousel";

const projects = [
  {
    title: "Sakafo malagasy",
    description: "Un site interactif où les utilisateurs peuvent découvrir, sauvegarder et partager des recettes malgaches. L’idée est de combiner découverte culturelle et fonctionnalités pratiques pour la cuisine.",
    tags: ["Django", "Sqlite3", "Python"],
    images: ["/img/sakafo.PNG", "/img/sakafo1.PNG", "/img/sakafo2.PNG", "/img/sakafo3.PNG", "/img/sakafo4.PNG"],
    github: "https://github.com/MizyJo/sakafoMalagasy.git",
    live: "",
  },
  {
    title: "Krohy",
    description: "un espace collaboratif en ligne destiné à renforcer la visibilité et les interactions entre les enseignants-chercheurs malgaches. La plateforme permet aux utilisateurs de créer des profils, d’échanger via un système de messages privés et de participer à un petit forum de discussion pour partager idées.",
    tags: ["Next", "Socket.io", "Sqlite", "Django", "tailwind", "JWT"],
    images: ["/img/krohy.PNG", "/img/krohy1.PNG", "/img/krohy2.PNG", "/img/krohy3.PNG", "/img/krohy4.PNG"],
    github: "https://github.com/FifaRandria/krohy_front.git",
    live: "",
  },
  {
    title: "victimes du photovoltaique",
    description: "Depuis 2014 l’Association des Victimes du Photovoltaïque accompagne les personnes victimes des arnaques du photovoltaïque dans toutes leurs démarches L’Association des victimes du photovoltaïque vous aide également à préparer votre dossier pour faire reconnaître vos droits en justice ou auprès des organismes concernés.",
    tags: ["Wordpress", "tampletaly"],
    images: ["/img/wp.PNG", "/img/wp1.PNG", "/img/wp2.PNG", "/img/wp3.PNG"],
    github: "",
    live: "https://victimesduphotovoltaique.com/",
  },

  {
    title: "Gestion des carriers",
    description: "une application développée en React et PHP lors de mon stage de L2 à la Caisse d’Épargne. Elle sert de référence interne pour l’entreprise afin d’optimiser le placement des employés dans les postes les plus adaptés à leurs compétences.",
    tags: ["REACT", "bootstrap", "php", "MVC", "MYSQL"],
    images: ["/img/gdc.PNG", "/img/gdc1.PNG", "/img/gdc2.PNG", "/img/gdc3.PNG", "/img/gdc4.PNG"],
    github: "https://github.com/FifaRandria/Gestion_de_carrieres.git",
    live: "",
  },
  // {
  //   title: "Weather Dashboard",
  //   description: "Beautiful weather app with location-based forecasts and real-time updates.",
  //   tags: ["React", "OpenWeather"],
  //   images: ["/img/krohy3.PNG", "/img/krohy4.PNG"],
  //   github: "https://github.com/yourusername",
  //   live: "https://example.com",
  // },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold text-white mb-10">
          Quelques-unes de  <span className="text-indigo-400">mes réalisations</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all backdrop-blur-sm"
            >
              <Carousel images={project.images} alt={project.title} />
              
              <div className="p-5">
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    <Globe size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
