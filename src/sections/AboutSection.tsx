"use client";

import { motion } from "framer-motion";
import { aboutData, services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const containerVariants = {
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface/40 py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Profile"
                title="Building products that balance craft and measurable impact"
                description={aboutData.bio[0]}
              />
            </motion.div>

            <motion.p variants={fadeUp} className="max-w-2xl text-lg text-muted">
              {aboutData.bio[1]}
            </motion.p>

            <motion.div variants={fadeUp} className="grid gap-6 sm:grid-cols-3">
              {aboutData.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
                >
                  <span className="text-3xl font-semibold text-foreground">{item.value}</span>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{item.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">How I partner with teams</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="rounded-2xl border border-white/10 bg-background/60 p-5 backdrop-blur transition-colors hover:border-primary/40"
                  >
                    <h4 className="text-base font-semibold text-foreground">{service.title}</h4>
                    <p className="mt-2 text-sm text-muted/90">{service.description}</p>
                    <ul className="mt-4 space-y-2 text-xs text-muted">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 blur-2xl" />
              <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-background/60 shadow-[0_25px_80px_rgba(15,23,42,0.35)] backdrop-blur">
                <Image
                  src={aboutData.image}
                  alt="Portrait of Mohamed Abdullahi"
                  width={480}
                  height={560}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div> */}

            {/* <div className="space-y-6 rounded-3xl border border-white/10 bg-background/70 p-8 backdrop-blur">
              <h3 className="text-lg font-semibold text-foreground">Recent leadership highlights</h3>
              <ul className="space-y-6 text-sm text-muted/90">
                {experiences.map((experience) => (
                  <li key={experience.id}>
                    <p className="text-foreground">{experience.role}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{experience.company}</p>
                    <p className="mt-2 text-xs text-muted/70">{experience.period}</p>
                    <ul className="mt-3 space-y-2">
                      {experience.accomplishments.map((accomplishment) => (
                        <li key={accomplishment} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{accomplishment}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div> */}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 p-8"
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-muted">Core toolkit</h4>
              <div className="mt-5 flex flex-wrap gap-2">
                {aboutData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-background/70 px-4 py-2 text-xs font-medium text-muted/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
