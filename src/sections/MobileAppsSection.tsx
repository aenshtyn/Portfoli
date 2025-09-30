import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/lib/data";
import { MobileAppCard } from "@/components/MobileAppCard";

const mobileApps = projectsData.filter((project) => project.category === "mobile-app");

export function MobileAppsSection() {
  if (mobileApps.length === 0) {
    return null;
  }

  return (
    <section id="mobile" className="bg-background py-24">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            eyebrow="Mobile products"
            title="Native polish with cross-platform reach"
            description="Offline-first journeys, analytics instrumentation, and app store readiness delivered for FarmSync Mobile and Feed Calculator Pro."
          />
          <Button asChild variant="secondary" size="md">
            <Link href="#contact">Discuss a mobile build</Link>
          </Button>
        </div>

        <div className="space-y-10">
          {mobileApps.map((project, index) => (
            <MobileAppCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
