import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "#solutions", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/lovable-uploads/1967b777-9d89-4121-90de-792d10b3bab5.png"
            alt="LakshX logomark"
            loading="lazy"
            decoding="async"
            className="h-6 w-6 md:h-7 md:w-7 object-contain"
          />
          <span className="flex flex-col">
            <span className="font-display text-lg tracking-tight leading-none">
              Laksh<span className="text-[hsl(var(--accent))]">X</span>
            </span>
            <span className="text-[9px] text-muted-foreground leading-none hidden md:block">
              Built for SMBs. Powered by Intelligence.
            </span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-foreground/80 hover:text-foreground story-link">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="accent" className="hidden sm:inline-flex">
            <a href="/consultation" aria-label="Schedule a consultation with LakshX">
              Schedule a consultation
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default SiteNav;
