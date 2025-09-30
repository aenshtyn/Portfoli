"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const RATIO_CLASS = {
  desktop: "aspect-[16/10]",
  mobile: "aspect-[9/16]",
} as const;

type LiveScreenshotProps = {
  url?: string;
  title: string;
  variant?: keyof typeof RATIO_CLASS;
  className?: string;
  themeColor?: string;
};

const buildScreenshotUrl = (url: string, variant: keyof typeof RATIO_CLASS) => {
  const width = variant === "mobile" ? 600 : 1000;
  const height = variant === "mobile" ? 1100 : 700;
  return `https://api.thum.io/get/width/${width}/crop/${height}/noanimate/${encodeURIComponent(url)}`;
};

export function LiveScreenshot({ url, title, variant = "desktop", className, themeColor }: LiveScreenshotProps) {
  const [failed, setFailed] = useState(false);
  const screenshotUrl = useMemo(() => {
    if (!url) return null;
    return buildScreenshotUrl(url, variant);
  }, [url, variant]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-background/60",
        RATIO_CLASS[variant],
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at top, ${themeColor ?? "rgba(99,102,241,0.3)"}, transparent 65%)`,
        }}
      />
      {screenshotUrl && !failed ? (
        <Image
          src={screenshotUrl}
          alt={`Live preview of ${title}`}
          fill
          style={{ zIndex: 1 }}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
          onError={() => setFailed(true)}
          priority={false}
        />
      ) : (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent text-sm text-muted">
          Preview unavailable
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
    </div>
  );
}
