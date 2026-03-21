export function Skills() {
  const skills = {
    Frontend: ["HTML/CSS", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "bootstrap", "Wordpress"],
    Backend: ["Node.js", "php", "MySQL", "MongoDB", "REST APIs", "Django"],
    Tools: ["Git", "Docker", "Figma", "Linux", "trello", "Postman"],
  };

  return (
    <section id="skills" className="py-32 px-6 relative">
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
