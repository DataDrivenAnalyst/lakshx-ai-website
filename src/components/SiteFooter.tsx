import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t">
      <div className="container py-10 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/47961337-1a1d-405f-ad2e-e7420ade9417.png"
              alt="LakshX logo"
              loading="lazy"
              className="h-8 w-8"
            />
            <span className="font-display text-lg">LakshX</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-prose">
            Bespoke AI automations, agents, and analytics for small and medium businesses.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} LakshX. All rights reserved.</p>
        </div>
        <div className="md:justify-self-end">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/laksh-x/" aria-label="LinkedIn" className="hover-scale" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-foreground/80" />
            </a>
            <a href="https://www.instagram.com/lakshx_ai/" aria-label="Instagram" className="hover-scale" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-foreground/80" />
            </a>
            <a href="https://x.com/LakshX_Up" aria-label="X (Twitter)" className="hover-scale" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-foreground/80" />
            </a>
            <a href="https://www.youtube.com/channel/UCJ9Jkz8GT2XQS5bCo1HVlaA" aria-label="YouTube" className="hover-scale" target="_blank" rel="noopener noreferrer">
              <Youtube className="text-foreground/80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
