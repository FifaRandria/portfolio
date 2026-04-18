import Image from "next/image";
import { MapPin, Coffee, Code2, Lightbulb, Heart, Sparkles, Gamepad, WholeWord, ChessKing } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-indigo-500/15 rotate-45" />
        <div className="absolute top-20 right-20 w-24 h-24 border border-purple-500/15 rotate-12" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-indigo-500/8 rotate-6" />
        <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-indigo-500/5 rounded-full" />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-500/5 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-3xl font-bold text-white mb-10">
          À propos <span className="text-indigo-400">de moi</span>
        </h2>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Photo Section */}
          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-indigo-500/10 rounded-3xl blur-2xl" />
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent rounded-2xl z-10" />
                <div className="relative bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden">
                  <Image
                    src="/fifa1.jpg"
                    alt="Fifaliana Randria"
                    width={220}
                    height={300}
                    className="w-260 h-[320px] object-cover object-top"
                    priority
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                      <span className="text-sm text-zinc-300">Antananarivo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Fifaliana Randria
              </h3>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Développeur <span className="text-indigo-400">Full-Stack </span> passionné par la création d&apos;applications web 
                <span className="text-white"> performantes</span> et<span className="text-white"> intuitives</span>.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed">
                Actuellement en spécialisation <span className="text-purple-400">Algorithmes & Data & IA | Web & Mobile </span> <a href="https://42antananarivo.mg/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline"> à 42 Antananarivo.</a>. 
                J&apos;aime relever des défis techniques et transformer des idées en solutions concrètes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-zinc-900/60 border border-zinc-800 rounded-xl hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                  <span className="font-medium text-white">Ce que j&apos;aime</span>
                </div>
                <ul className="space-y-1.5 text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                    Résoudre des problèmes complexes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                    Architecture d&apos;applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                    Expériences utilisateur fluides
                  </li>
                </ul>
              </div>
              
              <div className="p-5 bg-zinc-900/60 border border-zinc-800 rounded-xl hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-purple-400" />
                  <span className="font-medium text-white">Ma philosophie</span>
                </div>
                <ul className="space-y-1.5 text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full" />
                    <span className="text-zinc-400"> <a href="https://lia5-v01.vercel.app/explain?name=a%20toi&level=debutant" className=" text-blue-400">Carpe diem</a></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full" />
                    <span className="text-zinc-400">Code propre et maintenable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full" />
                    <span className="text-zinc-400">Simplicité avant tout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-500 rounded-full" />
                    <span className="text-zinc-400">Apprentissage continu</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-full">
                <Gamepad className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-zinc-400">Fan des jeux vidéo</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-full">
                <WholeWord className="w-4 h-4 text-red-400" />
                <span className="text-sm text-zinc-400">j'adore voyager</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-full">
                <ChessKing className="w-4 h-4 text-red-400" />
                <span className="text-sm text-zinc-400">jouer à des jeux de stratégie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}