import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

const websites = projectsData.filter((project) => project.category === "website");

export function WebsitesSection() {
  return (
    <section id="websites" className="bg-background py-24">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            eyebrow="Marketing websites"
            title="Story-driven sites that convert leads"
            description="Modern, performant experiences for Latitude Enterprises, FarmSync, and Regal Studios – each focused on driving qualified enquiries."
          />
          <Button asChild variant="secondary" size="md">
            <Link href="#contact">Plan a new website</Link>
          </Button>
        </div>

        <div className="space-y-10">
          {websites.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
