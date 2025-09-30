import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

const webApps = projectsData.filter((project) => project.category === "web-app");

export function WebAppsSection() {
  return (
    <section id="webapps" className="bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            eyebrow="Web applications"
            title="Operational platforms built for teams"
            description="Browser-based tools for nutrition scientists and dairy co-ops – rich dashboards, real-time optimisation, and secure data flows."
          />
          <Button asChild variant="secondary" size="md">
            <Link href="#contact">Scope a web app</Link>
          </Button>
        </div>

        <div className="space-y-10">
          {webApps.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
