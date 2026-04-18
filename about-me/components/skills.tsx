"use client";

import { 
  Layout, Braces, Database, Terminal, Globe,
  Box, Layers, PenTool,
  Command, Cpu, HardDrive, Smartphone, 
  FileJson, Cloud, Settings, Monitor
} from "lucide-react";

interface Tech {
  name: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  hover: string;
}

const technologies: Tech[] = [
  { name: "React", icon: Layout, color: "text-cyan-400", bg: "bg-cyan-500/20", hover: "hover:border-cyan-500/50" },
  { name: "Next.js", icon: FileJson, color: "text-white", bg: "bg-white/10", hover: "hover:border-white/30" },
  { name: "TypeScript", icon: Braces, color: "text-blue-400", bg: "bg-blue-500/20", hover: "hover:border-blue-500/50" },
  { name: "Tailwind CSS", icon: Layers, color: "text-cyan-300", bg: "bg-cyan-400/20", hover: "hover:border-cyan-400/50" },
  { name: "JavaScript", icon: Command, color: "text-yellow-400", bg: "bg-yellow-500/20", hover: "hover:border-yellow-500/50" },
  { name: "HTML/CSS", icon: Globe, color: "text-orange-500", bg: "bg-orange-500/20", hover: "hover:border-orange-500/50" },
  { name: "Node.js", icon: Terminal, color: "text-green-500", bg: "bg-green-500/20", hover: "hover:border-green-500/50" },
  { name: "Django", icon: Box, color: "text-green-600", bg: "bg-green-600/20", hover: "hover:border-green-600/50" },
  { name: "PHP", icon: Layers, color: "text-purple-400", bg: "bg-purple-500/20", hover: "hover:border-purple-500/50" },
  { name: "MySQL", icon: Database, color: "text-amber-400", bg: "bg-amber-500/20", hover: "hover:border-amber-500/50" },
  { name: "SQLite", icon: HardDrive, color: "text-blue-300", bg: "bg-blue-400/20", hover: "hover:border-blue-400/50" },
  { name: "MongoDB", icon: Cpu, color: "text-green-400", bg: "bg-green-400/20", hover: "hover:border-green-400/50" },
  { name: "Git", icon: Terminal, color: "text-orange-500", bg: "bg-orange-500/20", hover: "hover:border-orange-500/50" },
  { name: "Docker", icon: Box, color: "text-blue-500", bg: "bg-blue-500/20", hover: "hover:border-blue-500/50" },
  { name: "Figma", icon: PenTool, color: "text-pink-400", bg: "bg-pink-500/20", hover: "hover:border-pink-500/50" },
  { name: "WordPress", icon: Settings, color: "text-indigo-400", bg: "bg-indigo-500/20", hover: "hover:border-indigo-500/50" },
  { name: "Bootstrap", icon: Layers, color: "text-purple-500", bg: "bg-purple-500/20", hover: "hover:border-purple-500/50" },
  { name: "Linux", icon: Terminal, color: "text-yellow-600", bg: "bg-yellow-600/20", hover: "hover:border-yellow-600/50" },
  { name: "REST API", icon: Cloud, color: "text-cyan-400", bg: "bg-cyan-500/20", hover: "hover:border-cyan-500/50" },
  { name: "JWT", icon: Monitor, color: "text-amber-400", bg: "bg-amber-500/20", hover: "hover:border-amber-500/50" },
  { name: "Postman", icon: Smartphone, color: "text-orange-400", bg: "bg-orange-400/20", hover: "hover:border-orange-400/50" },
  { name: "Trello", icon: Layers, color: "text-sky-400", bg: "bg-sky-500/20", hover: "hover:border-sky-500/50" },
];

function TechBadge({ tech, delay }: { tech: Tech; delay: number }) {
  const Icon = tech.icon;
  return (
    <div 
      className="group flex items-center gap-2 px-4 py-2.5 bg-zinc-900/60 border border-zinc-800 rounded-full cursor-default transition-all duration-300 hover:bg-zinc-800/80 hover:border-zinc-600"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`p-1.5 rounded-md ${tech.bg}`}>
        <Icon className={`w-4 h-4 ${tech.color}`} />
      </div>
      <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Compétences <span className="text-purple-400">& Outils</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Les technologies que j&apos;utilise pour créer des expériencesWeb modernes et performantes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {technologies.map((tech, index) => (
            <TechBadge key={tech.name} tech={tech} delay={index * 50} />
          ))}
        </div>
      </div>
    </section>
  );
}