export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between flex-col ">
        <p className="text-medium text-zinc-500 m-1">© {year} Fifaliana-Randria copyright</p>
        <p className="text-sm text-zinc-500 m-1"> Réjouissez-vous dans l&apos;espérance, soyez patient dans la tribulation, soyez constant dans la prière</p>
      </div>
    </footer>
  );
}
