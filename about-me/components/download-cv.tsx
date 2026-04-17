"use client";

import { Download } from "lucide-react";

export function DownloadCV() {
  const handleDownload = () => {
    const cvPath = "/cv.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Fifaliana_Randria_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-15 right-15 z-50 p-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all animate-bounce-subtle cursor-pointer"
      aria-label="Télécharger mon CV"
    >
      <Download className="w-9 h-9" />
      
    </button>
  );
}