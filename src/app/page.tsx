import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import MobileApps from '@/components/MobileApps';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <MobileApps />
      <Contact />
    </main>
  );
}
