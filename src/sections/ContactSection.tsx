"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { contactData, socialNetworks } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, MessageCircle, Phone, Twitter } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      if (formData.get("company")) {
        setState("success");
        form.reset();
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          intent: formData.get("intent"),
          origin: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Try again later.");
    }
  }

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-muted">
              Collaborations
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{contactData.headline}</h2>
            <p className="text-lg text-muted">{contactData.subheadline}</p>

            <div className="grid gap-4 text-sm text-muted">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-primary/40 hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                {contactData.email}
              </a>
              <a
                href={`tel:${contactData.tel}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-primary/40 hover:text-foreground"
              >
                <Phone className="h-5 w-5" />
                {contactData.tel}
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-muted">
                <MessageCircle className="h-5 w-5" />
                {contactData.location}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialNetworks.map((network) => {
                const Icon = iconMap[network.icon];
                return (
                  <a
                    key={network.id}
                    href={network.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition hover:border-primary/40 hover:text-foreground"
                  >
                    <span className="sr-only">{network.label}</span>
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-background/60 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-muted">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="How should I address you?"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
                <label className="space-y-2 text-sm text-muted">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-muted">
                Project focus
                <select
                  name="intent"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  defaultValue="product-engineering"
                >
                  <option value="product-engineering">Product engineering</option>
                  <option value="platform-architecture">Platform architecture</option>
                  <option value="mobile-delivery">Mobile delivery</option>
                  <option value="consultation">Discovery call</option>
                </select>
              </label>

              <label className="space-y-2 text-sm text-muted">
                Subject
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Where can I help?"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>

              <label className="space-y-2 text-sm text-muted">
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Share timelines, goals, or existing context."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>

              {state === "error" && errorMessage && (
                <p className="text-sm text-rose-400">{errorMessage}</p>
              )}
              {state === "success" && (
                <p className="text-sm text-emerald-400">Thanks! I will reply within 2 business days.</p>
              )}

              <Button type="submit" size="lg" disabled={state === "loading"}>
                {state === "loading" ? "Sending..." : "Send message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
