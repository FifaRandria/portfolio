export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4 animate-fade-up">
          Full-Stack Developer
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 animate-fade-up delay-100">
          Hi there, I&apos;m{" "}
          <span className="text-indigo-400 animate-spin rounded-lg px-2">Fifaliana Randria</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-lg mx-auto mb-8 animate-fade-up delay-200">
Je crée des expériences Web accessibles, performantes et belles avec des technologies modernes.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-300">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all hover:scale-105"
          >
            projet réalisé
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-700 text-white rounded-full text-sm font-medium hover:border-zinc-500 transition-all hover:scale-105"
          >
            contactez-moi
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto animate-fade-up delay-400">
          <div className="hover:-translate-y-1 transition-transform">
            <p className="text-2xl font-bold">+1</p>
            <p className="text-xs text-zinc-500">Years</p>
          </div>
          <div className="hover:-translate-y-1 transition-transform">
            <p className="text-2xl font-bold">+50000</p>
            <p className="text-xs text-zinc-500">ligne de code</p>
          </div>
          <div className="hover:-translate-y-1 transition-transform">
            <p className="text-2xl font-bold">+2000</p>
            <p className="text-xs text-zinc-500">tasse de café</p>
          </div>
        </div>
      </div>
    </section>
  );
}
