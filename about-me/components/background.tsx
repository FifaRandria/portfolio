export function Background() {
  return (
    <div className="fixed inset-0 -z-10" style={{ backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: 'layout paint' }}>
        <div className="absolute top-20 left-1/4 w-28 h-28 border border-purple-500/20 rotate-45 will-change-transform" />
        <div className="absolute top-40 right-1/4 w-36 h-36 border border-indigo-500/15 rotate-12 will-change-transform" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/20 rotate-6 will-change-transform" />
        <div className="absolute bottom-40 left-20 w-32 h-32 border border-indigo-500/10 -rotate-12 will-change-transform" />
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-indigo-500/5 rounded-full will-change-transform" />
        <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-purple-500/5 rounded-full will-change-transform" />
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-purple-500/40 rounded-full will-change-transform" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-indigo-500/40 rounded-full will-change-transform" />
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-purple-500/30 rotate-45 will-change-transform" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-indigo-500/50 will-change-transform" />
        <div className="absolute top-10 right-1/4 w-32 h-32 border border-indigo-500/20 rotate-12 will-change-transform" />
        <div className="absolute top-30 left-10 w-24 h-24 border border-purple-500/15 rotate-45 will-change-transform" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-indigo-500/10 -rotate-6 will-change-transform" />
        <div className="absolute bottom-40 left-1/3 w-28 h-28 border border-purple-500/20 rotate-6 will-change-transform" />
        <div className="absolute top-1/4 right-10 w-16 h-16 bg-indigo-500/5 rounded-full will-change-transform" />
        <div className="absolute bottom-1/3 left-20 w-20 h-20 bg-purple-500/5 rounded-full will-change-transform" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-indigo-500/40 rounded-full will-change-transform" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-500/30 rotate-45 will-change-transform" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-indigo-500/50 will-change-transform" />
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-purple-500/40 will-change-transform" />
      </div>
    </div>
  );
}
