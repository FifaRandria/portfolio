"use client";

import { useState } from "react";
import { Send, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/FifaRandria", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fifaliana-randria-2b819027a/", icon: Linkedin },
  { label: "Email", href: "mailto:fifarandria92@gmail.com", icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/+2613883790", icon: MessageCircle },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formspree.io/f/myknvlyz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      // error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Fixed Geometric Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none backdrop-blur-[2px]">
        <div className="absolute top-20 left-1/2 w-40 h-40 border border-indigo-500/15 rotate-45 -translate-x-1/2" />
        <div className="absolute bottom-20 right-1/4 w-28 h-28 border border-purple-500/20 rotate-12" />
        <div className="absolute top-1/3 left-1/4 w-24 h-24 border border-indigo-500/10 -rotate-6" />
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 border border-purple-500/10 rotate-6" />
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-indigo-500/5 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-500/5 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-indigo-500/40 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-500/30 rotate-45" />
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-indigo-500/50 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-3xl font-bold text-white mb-4">
          contactez-<span className="text-indigo-400">moi </span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-md mx-auto">
          {`Je suis actuellement ouvert à de nouvelles opportunités. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, n'hésitez pas à me contacter !`}
        </p>

        

        <div className="flex items-center justify-center gap-6 mt-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800 bg-blue-800 rounded-full transition-all"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>

        <div className="mt-12">
          <h4 className="font-medium text-white mb-4">Ou envoyez un message</h4>
          {submitted ? (
            <div className="max-w-md mx-auto p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
              <p className="text-lg font-medium text-white mb-2">Message envoyé !</p>
              <p className="text-zinc-400">Je vous répondrai bientôt.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Nom"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="Email"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={16} />
                {isSubmitting ? "Envoi..." : "Envoyer un message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
