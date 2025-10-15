import { Instagram, Linkedin, Youtube, X } from "lucide-react";

export default function SiteFooter() {
  // Use base URL for proper GitHub Pages deployment
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <footer className="mt-24 border-t">
      <div className="container py-10 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <a href="#" className="flex items-center gap-2.5">
            <img
              src={`${baseUrl}lovable-uploads/1967b777-9d89-4121-90de-792d10b3bab5.png`}
              alt="LakshX logomark, background removed"
              loading="lazy"
              decoding="async"
              className="h-6 w-6 md:h-7 md:w-7 object-contain"
            />
            <span className="flex flex-col">
              <span className="font-display text-lg tracking-tight leading-none">
                Laksh<span className="text-[hsl(var(--accent))]">X</span>
              </span>
              <span className="text-[9px] text-muted-foreground leading-none">
                Built for SMBs. Powered by Intelligence.
              </span>
            </span>
          </a>
          <p className="mt-3 text-sm text-muted-foreground max-w-prose">
            Bespoke AI automations, agents, and analytics for small and medium business
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} LakshX. All rights reserved.
          </p>
        </div>
        <div className="md:justify-self-end">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/laksh-x/?viewAsMember=true"
              aria-label="LinkedIn"
              className="hover-scale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-foreground/80" />
            </a>
            <a
              href="https://www.instagram.com/lakshx_ai/"
              aria-label="Instagram"
              className="hover-scale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-foreground/80" />
            </a>
            <a
              href="https://x.com/LakshX_Up"
              aria-label="X"
              className="hover-scale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X className="text-foreground/80" />
            </a>
            <a
              href="https://www.youtube.com/@LakshX_AI"
              aria-label="YouTube"
              className="hover-scale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="text-foreground/80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
