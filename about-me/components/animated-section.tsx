"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "scale-in";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "slide-left": "animate-slide-left",
    "scale-in": "animate-scale-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}