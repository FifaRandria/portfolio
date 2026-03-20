export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <p className="text-sm text-zinc-500">© {year} Your Name</p>
        <p className="text-sm text-zinc-500">Built with Next.js</p>
      </div>
    </footer>
  );
}
