"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, Github, Smartphone, Star } from "lucide-react";
import type { ProjectData } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { LiveScreenshot } from "@/components/LiveScreenshot";

type MobileAppCardProps = {
  project: ProjectData;
  index: number;
};

function StoreBadge({ href, svgSrc, alt }: { href: string; svgSrc: string; alt: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
      className="inline-flex items-center"
    >
      <Image
        src={svgSrc}
        alt={alt}
        width={200}
        height={64}
        className="h-14 w-auto drop-shadow-[0_6px_20px_rgba(15,23,42,0.35)] md:h-16"
        priority={false}
        loading="lazy"
      />
    </Link>
  );
}

export function MobileAppCard({ project, index }: MobileAppCardProps) {
  const previewUrl = project.playStoreUrl ?? project.appStoreUrl ?? project.liveUrl;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-background/70 p-8 backdrop-blur"
    >
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            {project.appIcon ? (
              <Image
                src={project.appIcon}
                alt={`${project.title} icon`}
                width={64}
                height={64}
                className="h-16 w-16 rounded-2xl border border-white/20 object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Smartphone className="h-8 w-8 text-muted" />
              </div>
            )}
            <div>
              <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted">
                {project.platform && <span>{project.platform}</span>}
                <span className="h-1 w-1 rounded-full bg-muted" />
                <span>{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-muted" />
                <span className="capitalize">{project.status.replace("-", " ")}</span>
              </div>
            </div>
          </div>

          <p className="text-base text-muted">{project.description}</p>
          <p className="text-sm text-muted/80">{project.summary}</p>

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

          <div className="flex flex-col gap-4">
            {/* Store Badges */}
            {(project.playStoreUrl || project.appStoreUrl) && (
              <div className="flex flex-wrap gap-3">
            {project.playStoreUrl && (
              <StoreBadge
                href={project.playStoreUrl}
                svgSrc="/badges/google_play.svg"
                alt={`Get ${project.title} on Google Play`}
              />
            )}
            {project.appStoreUrl && (
              <StoreBadge
                href={project.appStoreUrl}
                svgSrc="/badges/app_store.svg"
                alt={`Download ${project.title} on the App Store`}
              />
            )}
              </div>
            )}

            {/* Action Buttons */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button asChild size="sm" className="shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" prefetch={false}>
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild size="sm" variant="ghost" className="hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" prefetch={false}>
                      <Github className="h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted/80">
            {project.rating && (
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {project.rating} rating
              </span>
            )}
            {project.downloadCount && (
              <span className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                {project.downloadCount} installs
              </span>
            )}
          </div>
        </div>

        <div className="relative flex-1">
          <div
            className="absolute -inset-6 -z-10 rounded-3xl"
            style={{
              background: `radial-gradient(circle at top, ${project.themeColor}35, transparent 60%)`,
            }}
          />
          <div className="mx-auto w-60 max-w-full">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-background/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-black/90">
                <LiveScreenshot
                  url={previewUrl}
                  title={project.title}
                  variant="mobile"
                  themeColor={project.themeColor}
                  className="rounded-[2rem] border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
