"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { heroData, aboutData } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-surface/90 to-background" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_55%)]" />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-6 pb-24 pt-32 md:pt-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-muted"
        >
          {heroData.title}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="space-y-6 text-balance"
        >
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-[3.75rem] md:leading-[1.05]">
            {heroData.name}
            <span className="block text-transparent">—</span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {heroData.subtitle}
            </span>
          </h1>
          <p className="max-w-3xl text-lg text-muted md:text-xl">
            {heroData.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Button asChild size="lg">
            <Link href="#websites" className="group">
              <span>{heroData.ctaPrimary}</span>
              <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-1" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link
              href={aboutData.resumeUrl}
              className="group"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <span>{heroData.ctaSecondary}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-6 text-sm text-muted/70"
        >
          <div className="max-w-xs rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p>
              Web and mobile experiences for agritech, fintech, and civic innovation teams working across East Africa and beyond.
            </p>
          </div>
          <div className="max-w-xs rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p>
              I partner with founders, operations leads, and design teams to deliver resilient platforms with measurable outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
