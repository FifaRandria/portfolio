export function Skills() {
  const skills = {
    Frontend: ["HTML/CSS", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "bootstrap", "Wordpress"],
    Backend: ["Node.js", "php", "MySQL", "MongoDB", "REST APIs", "Django"],
    Tools: ["Git", "Docker", "Figma", "Linux", "trello", "Postman"],
  };

  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* Fixed Geometric Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none backdrop-blur-[2px]">
        <div className="absolute top-20 left-1/4 w-28 h-28 border border-purple-500/20 rotate-45" />
        <div className="absolute top-40 right-1/4 w-36 h-36 border border-indigo-500/15 rotate-12" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/20 rotate-6" />
        <div className="absolute bottom-40 left-20 w-32 h-32 border border-indigo-500/10 -rotate-12" />
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-indigo-500/5 rounded-full" />
        <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-purple-500/5 rounded-full" />
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-purple-500/40 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-indigo-500/40 rounded-full" />
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-purple-500/30 rotate-45" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-indigo-500/50" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold text-white mb-12">
          My <span className="text-purple-400">Skills</span>
        </h2>
      <div className="space-y-4 text-zinc-400 mb-2">
        <p className="text-lg leading-relaxed">
          À travers mes projets et mon apprentissage, j’ai développé un ensemble de compétences solides en développement
          Ces outils me permettent de transformer des idées en solutions web fonctionnelles et intuitives.
        </p>
      </div>

        {/* Horizontal Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-colors"
            >
              {/* Category Header */}
              <div className="px-6 py-4 bg-zinc-800/50 border-b border-zinc-800">
                <h3 className="text-lg font-semibold text-white">{category}</h3>
              </div>
              {/* Skills List */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-300 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
