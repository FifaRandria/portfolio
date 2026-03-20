import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Fixed Geometric Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none backdrop-blur-[2px]">
        <div className="absolute top-10 left-10 w-32 h-32 border border-indigo-500/20 rotate-45" />
        <div className="absolute top-20 right-20 w-24 h-24 border border-purple-500/20 rotate-12" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-indigo-500/10 rotate-6" />
        <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-indigo-500/5 rounded-full" />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-500/5 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-indigo-500/40 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-500/40 rounded-full" />
        <div className="absolute top-3/4 right-10 w-3 h-3 bg-indigo-500/30 rotate-45" />
        <div className="absolute bottom-1/4 right-1/2 w-1 h-1 bg-purple-500/50" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl font-bold text-white mb-8">
          À propos <span className="text-indigo-400">de moi</span>
        </h2>

        <div className="grid md:grid-cols-[150px_1fr] gap-8 items-start">
          <div className="w-32 md:w-40 mx-auto md:mx-0 aspect-square bg-zinc-800 rounded-2xl border border-zinc-700 hover:border-indigo-500/50 transition-colors overflow-hidden">
            <Image
              src="/fifa1.jpg"
              alt="Profile photo"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div className="space-y-4 text-zinc-400">
            <p className="text-lg leading-relaxed">
              Passionné par le développement web, je transforme des idées en applications web intuitives et efficaces.
            </p>
            <p className="text-lg leading-relaxed">
              Mon parcours a commencé par la curiosité pour le fonctionnement des choses sur le Web, et il a évolué vers une carrière dans la création de produits numériques.            </p>
            <p className="text-lg leading-relaxed">
              Quand je ne code pas, vous me verrez explorer de nouvelles technologies ou savourer une bonne tasse de café.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
