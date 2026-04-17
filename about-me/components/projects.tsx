"use client";

import { Github, Globe, ArrowUpRight, Calendar } from "lucide-react";
import { Carousel } from "./carousel";

const projects = [
  {
    title: "Explain like I'am 5",
    subtitle: "Integration d'une petite IA",
    description: "J'utilise l'IA pour transformer des concepts techniques complexes en explications claires et adaptées à ton niveau. Tu peux télécharger le résultat en PDF pour le garder !",
    fullDescription: [
      "Adapté à ton niveau, que tu sois débutant ou avancé",
      "Rend l’apprentissage plus rapide, clair et efficace grâce à l’IA",
      "Génère des contenus structurés et pédagogiques en quelques secondes",
      "Possibilité de télécharger le résultat en PDF pour le consulter à tout moment",
      "Idéal pour réviser, comprendre ou approfondir un sujet sans prise de tête",
    ],
    tags: ["Javascript", "Next.js", "app rooter", "IA api (openrouter)", "react-hook", "prisma", "supabase", "postgresql"],
    images: ["/img/elia1.PNG", "/img/elia2.PNG", "/img/elia3.PNG"],
    github: "",
    live: "https://lia5-v01.vercel.app/",
    year: "2026",
    type: "Site Web",
  },

  {
    title: "Linkd",
    subtitle: "Une application web conçue pour mettre en valeur et partager des exploits compétences ou de services ",
    description: "Dans un environnement interactif et dynamique. projet Transcendence de 42, elle permet aux utilisateurs de publier leurs réalisations, de découvrir celles des autres et d’échanger facilement grâce à un système de chat intégré. L’objectif est de créer une plateforme vivante où la collaboration, le networking et le partage de savoirs sont au cœur de l’expérience.",
    fullDescription: [
      "Publication et mise en avant de projets, compétences et services",
      "Interaction entre utilisateurs (likes, commentaires, échanges)",
      "Interface moderne et intuitive pour une navigation fluide",
      "Idéal pour construire un portfolio vivant et évoluer en réseau",
    ],
    tags: ["Next", "Nest", "i18N", "tailwind", "Docker"],
    images: ["/img/notf.PNG"],
    github: "https://github.com/DevAina/ft_transcendence.git",
    live: "",
    year: "2026",
    type: "site web",
  },

  {
    title: "Sakafo Malagasy",
    subtitle: "Plateforme de recettes malgaches",
    description: "Une application web complète permettant aux utilisateurs de découvrir, sauvegarder et partager des recettes traditionnelles malgaches. Le projet combine découverte culturelle et fonctionnalités pratiques pour promouvoir la cuisine locale.",
    fullDescription: [
      "Système d'authentification avec gestion des utilisateurs",
      "Base de données de recettes avec recherche avancées",
      "Favoris et personnalisation des recettes",
      "Interface responsive pour mobile et desktop",
    ],
    tags: ["Django", "SQLite", "Python", "HTML", "CSS", "JavaScript"],
    images: ["/img/sakafo.PNG", "/img/sakafo1.PNG", "/img/sakafo2.PNG", "/img/sakafo3.PNG", "/img/sakafo4.PNG"],
    github: "https://github.com/MizyJo/sakafoMalagasy.git",
    live: "",
    year: "2023",
    type: "Full-Stack",
  },
  {
    title: "Krohy",
    subtitle: "Réseau social académique",
    description: "Une plateforme collaborative destinée aux enseignants-chercheurs malgaches pour renforcer leur visibilité et faciliter les échanges professionnels.",
    fullDescription: [
      "Profils utilisateur personnalisés",
      "Messagerie instantanée en temps réel",
      "Forum de discussion thématique",
      "Système d'authentification JWT",
    ],
    tags: ["Next.js", "Socket.io", "Django", "REST API", "JWT", "Tailwind"],
    images: ["/img/krohy.PNG", "/img/krohy1.PNG", "/img/krohy2.PNG", "/img/krohy3.PNG", "/img/krohy4.PNG"],
    github: "https://github.com/FifaRandria/krohy_front.git",
    live: "",
    year: "2024",
    type: "Full-Stack",
  },
  {
    title: "Victimes du Photovoltaïque",
    subtitle: "Site associatif",
    description: "Site web institutionnel pour l'Association des Victimes du Photovoltaïque, offrant accompagnement et ressources aux personnes victimes d'arnaques.",
    fullDescription: [
      "Présentation de l'association et ses missions",
      "Formulaire de contact et demande d'aide",
      "Ressources juridiques et administratives",
      "Optimisation SEO et référencement local",
    ],
    tags: ["WordPress", "Templetaly", "PHP", "SEO", " responsive"],
    images: ["/img/wp.PNG", "/img/wp1.PNG", "/img/wp2.PNG", "/img/wp3.PNG"],
    github: "",
    live: "https://victimesduphotovoltaique.com/",
    year: "2025",
    type: "Site Web",
  },
  {
    title: "Gestion des Carrières",
    subtitle: "Application RH",
    description: "Application interne développée lors de mon stage à la Caisse d'Épargne pour optimiser la gestion et le placement des employés.",
    fullDescription: [
      "Dashboard administrateur",
      "Gestion des profils employees",
      "Module d'affectation aux postes",
      "Statistiques et rapports",
    ],
    tags: ["React", "PHP", "Bootstrap", "MySQL", "MVC"],
    images: ["/img/notf.PNG"],
    github: "https://github.com/FifaRandria/Gestion_de_carrieres.git",
    live: "",
    year: "2022",
    type: "Application",
  }


];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Mes <span className="text-indigo-400">réalisations</span>
        </h2>
        <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
          Découvrez quelques projets sur lesquels j&apos;ai travaillé avec passion. Chaque projet représente un défi relever et une opportunité d&apos;apprendre.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500"
            >
              <div className="relative h-44 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                <Carousel images={project.images} alt={project.title}/>
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2.5 py-1 text-xs font-medium bg-zinc-900/80 backdrop-blur-sm rounded-full text-zinc-300 border border-zinc-700/50">
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-zinc-900/80 backdrop-blur-sm rounded-full text-zinc-300">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </div>
              </div>

              <div className="flex-1 p-5 flex flex-col">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{project.subtitle}</p>
                </div>

                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {project.fullDescription.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-zinc-800/60 border border-zinc-700/30 rounded text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs px-2 py-0.5 text-zinc-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/50">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors"
                      >
                        <Globe size={14} />
                        <span>Site</span>
                      </a>
                    )}
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}