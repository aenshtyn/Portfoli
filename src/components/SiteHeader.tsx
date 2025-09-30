"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        isScrolled ? "backdrop-blur border-b border-white/10 bg-background/70" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="text-sm font-semibold uppercase tracking-[0.35em] text-muted">
          Mohamed
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted backdrop-blur md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "rounded-full px-4 py-2 transition-colors",
                activeSection === link.id ? "bg-primary/20 text-foreground" : "hover:text-foreground/80"
              )}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="secondary" className="hidden sm:inline-flex">
            <Link href="#contact" onClick={handleLinkClick}>
              Start a project
            </Link>
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition hover:border-primary/40 hover:text-foreground md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden",
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition opacity-0 pointer-events-none",
          menuOpen && "pointer-events-auto opacity-100"
        )}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={cn(
          "md:hidden",
          "fixed inset-x-4 top-[74px] z-50 origin-top rounded-3xl border border-white/10 bg-background/95 p-6 text-sm text-muted shadow-[0_24px_80px_rgba(15,23,42,0.45)] transition-all",
          menuOpen ? "scale-100 opacity-100" : "-translate-y-4 scale-95 opacity-0 pointer-events-none"
        )}
      >
        <nav className="space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "block rounded-2xl px-4 py-3 text-base font-medium transition",
                activeSection === link.id ? "bg-primary/20 text-foreground" : "hover:bg-white/5 hover:text-foreground"
              )}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-4">
          <Button asChild size="md" className="w-full" onClick={handleLinkClick}>
            <Link href="#contact">Start a project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
