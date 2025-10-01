import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { WebsitesSection } from "@/sections/WebsitesSection";
import { WebAppsSection } from "@/sections/WebAppsSection";
import { MobileAppsSection } from "@/sections/MobileAppsSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 space-y-24 pt-24">
        <HeroSection />
        <AboutSection />
        <WebsitesSection />
        {/* <WebAppsSection /> */}
        {/* <MobileAppsSection /> */}
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
