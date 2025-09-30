import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { socialNetworks } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background/60 py-12 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">Mohamed Abdullahi</p>
          <p className="mt-3 max-w-md text-sm text-muted/80">
            Shipping resilient platforms and partnering with founders, civic innovators, and product teams across Africa.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socialNetworks.map((network) => {
            const Icon = iconMap[network.icon];
            return (
              <Link
                key={network.id}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-primary/50 hover:text-foreground"
                )}
              >
                <span className="sr-only">{network.label}</span>
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-muted/70">
        © {new Date().getFullYear()} Mohamed Abdullahi. Built with Next.js.
      </div>
    </footer>
  );
}
