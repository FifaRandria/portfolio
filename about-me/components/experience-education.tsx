import { GraduationCap, Briefcase, Award, TrendingUp, Code2, Cpu } from "lucide-react";

const experiences = [
  {
    role: "Développeur Web Freelance",
    company: "Stop aux Arnaques Photovoltaïques",
    period: "2025",
    description: "Refonte complète du site WordPress/Elementor. Optimisation UX, design responsive et SEO.",
  },
  {
    role: "Développeur Full-Stack",
    company: "CIDST - Centre d'Information et de Documentation",
    period: "Juin 2024 - Oct 2024",
    description: "Création d'un espace communautaire pour enseignants-chercheurs. Stack: Django, Next.js, Socket.io.",
  },
  {
    role: "Développeur Web",
    company: "Caisse d'Épargne Madagascar",
    period: "Fév 2023 - Juin 2023",
    description: "Application de gestion des carrières. Stack: React, PHP, Bootstrap, MySQL.",
  },
];

const education = [
  {
    degree: "Spécialisation - Algorithmes | Data | IA & Mobile",
    school: "42 Antananarivo",
    period: "2025 - En cours",
    description: "Parcours avancé en algorithmie, science des données, intelligence artificielle et développement mobile.",
    icon: Cpu,
    highlight: true,
  },
  {
    degree: "Tronc Commun",
    school: "42 Antananarivo",
    period: "2024 - 2025",
    description: "Fondamentaux: C, Python, Go, SQL, Docker,Linux, Git. Méthode peer-learning et projets collaboratifs.",
    icon: Code2,
  },
  {
    degree: "Licence en Informatique",
    school: "ESMIA - Antananarivo",
    period: "2021 - 2024",
    description: "Développement d'applications, analyse des risques, gestion de projet informatique.",
    icon: TrendingUp,
  },
  {
    degree: "Baccalauréat Scientifique",
    school: "Collège Saint Joseph Mahamasina",
    period: "2014 - 2021",
    description: "Série D - Mention Assez Bien",
    icon: Award,
  },
];

export function ExperienceEducation() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-36 h-36 border border-indigo-500/10 rotate-12" />
        <div className="absolute top-20 right-1/4 w-28 h-28 border border-purple-500/15 rotate-45" />
        <div className="absolute bottom-20 left-1/4 w-32 h-32 border border-indigo-500/8 -rotate-6" />
        <div className="absolute bottom-30 right-1/3 w-24 h-24 border border-purple-500/10 rotate-6" />
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-indigo-500/5 rounded-full" />
        <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-purple-500/5 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={22} className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Expériences</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 group">
                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-zinc-800 border-2 border-indigo-500/60 rounded-full group-hover:border-indigo-400 group-hover:bg-indigo-400 transition-all" />
                    <h3 className="font-medium text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 mb-2">
                      <span className="text-sm text-zinc-400">{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-sm text-zinc-500">{exp.period}</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={22} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Parcours</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
              <div className="space-y-8">
                {education.map((edu, index) => {
                  const Icon = edu.icon;
                  return (
                    <div key={index} className={`relative pl-8 group ${edu.highlight ? 'p-4 -mx-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-r-xl border-l-2 border-purple-500' : ''}`}>
                      <div className={`absolute left-0 top-1.5 w-2.5 h-2.5 bg-zinc-800 border-2 rounded-full group-hover:bg-purple-400 transition-all ${
                        edu.highlight ? 'border-purple-500' : 'border-purple-500/60'
                      }`} />
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${edu.highlight ? 'text-purple-400' : 'text-purple-500/60'}`} />
                        <h3 className={`font-medium ${edu.highlight ? 'text-white' : 'text-white group-hover:text-purple-300'} transition-colors`}>
                          {edu.degree}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-zinc-400">{edu.school}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-sm text-zinc-500">{edu.period}</span>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{edu.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}