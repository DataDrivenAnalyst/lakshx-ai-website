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
        <a href="#" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/47961337-1a1d-405f-ad2e-e7420ade9417.png"
            alt="LakshX logo"
            loading="lazy"
            className="h-8 w-8"
          />
          <span className="font-display text-lg tracking-tight">LakshX</span>
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
            <a href="https://www.linkedin.com/company/laksh-x/" target="_blank" rel="noopener noreferrer" aria-label="Contact LakshX on LinkedIn">
              Talk to us
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default SiteNav;
