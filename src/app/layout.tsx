import type { Metadata, Viewport } from "next";
import "./globals.css";
import { headData, heroData, contactData, socialNetworks, projectsData } from "@/lib/data";

export const metadata: Metadata = {
  title: headData.title,
  description: headData.description,
  keywords: [
    "portfolio",
    "full-stack developer",
    "software engineer",
    "next.js",
    "typescript",
    "react",
  ],
  metadataBase: new URL("https://mohamed.co.ke"),
  openGraph: {
    title: headData.title,
    description: headData.description,
    type: "website",
    locale: "en_US",
    url: "https://mohamed.co.ke",
    siteName: "Mohamed Abdullahi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aenshtyn",
    title: headData.title,
    description: headData.description,
  },
  alternates: {
    canonical: "https://mohamed.co.ke",
  },
  authors: [{ name: "Mohamed Abdullahi", url: "https://www.linkedin.com/in/aenshtyn/" }],
  icons: {
    icon: "/favicon.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: heroData.name,
              jobTitle: heroData.subtitle,
              url: "https://mohamed.co.ke",
              email: `mailto:${contactData.email}`,
              telephone: contactData.tel,
              address: {
                "@type": "PostalAddress",
                addressLocality: contactData.location,
              },
              sameAs: socialNetworks.map((network) => network.url),
              knowsAbout: [
                "Full-stack engineering",
                "Product architecture",
                "Web performance",
                "Mobile development",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Independent Consultant",
              },
              hasPart: projectsData.slice(0, 5).map((project) => ({
                "@type": "CreativeWork",
                name: project.title,
                url: project.liveUrl ?? project.githubUrl,
                description: project.description,
              })),
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
