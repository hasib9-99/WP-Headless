"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menuLinks = [
  { label: "HOME", path: "/" },
  { label: "ARSENAL", path: "/missions" },
  { label: "DOSSIER", path: "/blog" },
  { label: "COMMS", path: "/comms" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-2xl font-bold tracking-tighter text-primary">
          ABU HASIB
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="text-foreground hover:text-primary transition-colors"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Full-screen menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-val-charcoal/97 backdrop-blur-md flex flex-col items-center justify-between py-12 px-6 animate-menu-reveal">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start opacity-40 pointer-events-none">
            <div className="flex flex-col">
              <div className="font-display text-[10px] tracking-[0.3em] text-primary">SYSTEM OVERRIDE</div>
              <div className="w-24 h-[1px] bg-primary mt-1" />
            </div>
            <div className="font-display text-[10px] tracking-[0.3em] text-foreground">EU-CENTRAL-1</div>
          </div>
          <div className="absolute top-10 right-10 w-16 h-16 border-t border-r border-primary/30 pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-16 h-16 border-b border-l border-primary/30 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
            <div className="font-display text-[20rem] font-bold rotate-12 whitespace-nowrap text-foreground">ABU HASIB</div>
          </div>

          {/* Name */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="font-display text-4xl font-bold tracking-tighter text-foreground">ABU HASIB</div>
            <div className="h-[2px] w-8 bg-primary mt-2" />
          </div>

          {/* Nav links */}
          <nav className="relative z-10 flex flex-col items-center space-y-4 w-full max-w-xs">
            {menuLinks.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setOpen(false)}
                className="group w-full text-center relative py-2"
              >
                <span className="font-display text-5xl text-foreground tracking-widest uppercase transition-all group-hover:text-primary text-glow-red">
                  {label}
                </span>
                <div className="h-[3px] w-0 bg-primary mx-auto transition-all duration-300 group-hover:w-full mt-1 shadow-[0_0_10px_hsl(var(--primary))]" />
              </Link>
            ))}
          </nav>

          {/* Close button */}
          <div className="relative z-10 w-full px-4">
            <button
              onClick={() => setOpen(false)}
              className="w-full bg-primary py-5 relative group overflow-hidden active:scale-95 transition-transform flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 diagonal-stripes opacity-20" />
              <X className="text-primary-foreground" size={24} />
              <span className="font-display text-3xl text-primary-foreground tracking-widest">CLOSE MENU</span>
            </button>
            <div className="mt-4 flex justify-between items-center opacity-40">
              <span className="font-display text-[8px] tracking-[0.4em] text-foreground">PROTOCOL // 7.02</span>
              <span className="font-display text-[8px] tracking-[0.4em] text-foreground">RELIABILITY: 99.8%</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}