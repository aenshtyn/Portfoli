"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectData } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { LiveScreenshot } from "@/components/LiveScreenshot";

type ProjectCardProps = {
  project: ProjectData;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-background/60 backdrop-blur transition hover:border-primary/40"
    >
      <div className="grid gap-8 p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted">
            <span>{project.category.replace("-", " ")}</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span>{project.year}</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span className="capitalize">{project.status.replace("-", " ")}</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground md:text-3xl">{project.title}</h3>
            <p className="text-base text-muted">{project.description}</p>
            <p className="text-sm text-muted/80">{project.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <Button asChild size="sm">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" prefetch={false}>
                  View live
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="sm" variant="ghost">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" prefetch={false}>
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        <LiveScreenshot
          url={project.liveUrl}
          title={project.title}
          themeColor={project.themeColor}
          className="transition duration-500 group-hover:scale-[1.01]"
        />
      </div>

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-500",
          "from-transparent via-primary/60 to-transparent",
          "group-hover:opacity-100"
        )}
      />
    </motion.article>
  );
}
