import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Refonte de site WordPress / Elementor, Stop aux Arnaques Photovoltaïques",
    company: "Freelance",
    period: "2025",
    description: "Réalisation complète en freelance de la refonte du site Stop aux Arnaques Photovoltaïques sous WordPress avec Elementor. Optimisation du design, de l’ergonomie et du contenu pour améliorer l’expérience utilisateur.",
  },
  {
    role: "Stage d’insertion",
    company: "Centre d’Information et de Documentation Scientifique et Technique",
    period: "juin 2024 - oct 2024",
    description: "Conception  d’un espace communautaire et d’échange pour  accroître la visibilité des travaux des enseignants chercheurs malagasy (Theme licence django/next.js)",
  },
  {
    role: "Stage d'imprégnation ",
    company: "Caisse d'épargne Madagascar",
    period: "fev 2023 - juin 2023 ",
    description: "Création d'une application web pour la gestion de carrière des employés de l'institution afin d'attribuer le poste convenable a chaque employé (php /react).",
  },
];

const education = [
 {
    degree: "Cursus en tronc communs",
    school: "42 Antananarivo",
    period: "Depuis 2024",
    description: "École de codage innovante centrée sur l’apprentissage par projets et la collaboration entre pairs, avec une forte spécialisation en ingénierie logicielle et en résolution de problèmes complexes.",

 },
  {
    degree: "Licence en Informatique",
    school: "Ecole Supérieure de Management et d'Informatique Appliquée, Antananarivo",
    period: "2021 - 2024",
    description: "Formation sur le développement d'applications, l'analyse des risques et la gestion de projet",
  },
  {
    degree: "Baccalauréat Scientifique",
    school: "Collège Saint sojeph Mahamasina, Antananarivo",
    period: "2014 - 2021",
    description: "Obtention du  diplôme de baccalaureat option Scientifique série D avec la mention",
  },
];

export function ExperienceEducation() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      {/* Fixed Geometric Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none backdrop-blur-[2px]">
        <div className="absolute top-10 left-1/3 w-36 h-36 border border-indigo-500/15 rotate-12" />
        <div className="absolute top-20 right-1/4 w-28 h-28 border border-purple-500/20 rotate-45" />
        <div className="absolute bottom-20 left-1/4 w-32 h-32 border border-indigo-500/10 -rotate-6" />
        <div className="absolute bottom-30 right-1/3 w-24 h-24 border border-purple-500/15 rotate-6" />
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-indigo-500/5 rounded-full" />
        <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-purple-500/5 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-500/40 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-500/40 rounded-full" />
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-indigo-500/30 rotate-45" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-500/50" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={24} className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">
                Expériences
              </h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-indigo-500/80 rounded-full group-hover:bg-indigo-400 transition-colors" />
                    {index < experiences.length - 1 && (
                      <div className="w-px h-full bg-zinc-800 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-medium text-white group-hover:text-indigo-300 transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-zinc-400">{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-sm text-zinc-500">{exp.period}</span>
                    </div>
                    <p className="text-zinc-400 italic text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={24} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">
                Éducation
              </h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-purple-500/80 rounded-full group-hover:bg-purple-400 transition-colors" />
                    {index < education.length - 1 && (
                      <div className="w-px h-full bg-zinc-800 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-medium text-white group-hover:text-purple-300 transition-colors">{edu.degree}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm  text-zinc-400 ">{edu.school}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-sm text-zinc-500">{edu.period}</span>
                    </div>
                    <p className="text-zinc-400 italic text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
