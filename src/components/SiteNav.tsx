import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { removeBackground } from "@/lib/removeBackground";

const NAV_ITEMS = [
  { href: "#solutions", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const ORIGINAL_LOGO = "/lovable-uploads/4ea3e78f-a7a8-4f41-94ad-5155c0730eca.png";
  const [logoSrc, setLogoSrc] = useState<string>(ORIGINAL_LOGO);

  useEffect(() => {
    let isMounted = true;
    const process = async () => {
      try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = ORIGINAL_LOGO;
        await new Promise((res, rej) => { img.onload = () => res(true); img.onerror = rej; });
        const blob = await removeBackground(img);
        const reader = new FileReader();
        const dataUrl = await new Promise<string>((res, rej) => { reader.onload = () => res(reader.result as string); reader.onerror = rej; reader.readAsDataURL(blob); });
        if (isMounted) setLogoSrc(dataUrl);
      } catch (e) {
        console.warn('Background removal failed; using original logo', e);
      }
    };
    process();
    return () => { isMounted = false; };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src={logoSrc}
            alt="LakshX logomark, background removed"
            loading="lazy"
            decoding="async"
            className="h-6 w-6 md:h-7 md:w-7 object-contain"
          />
          <span className="flex flex-col">
            <span className="font-display text-lg tracking-tight leading-none">
              Laksh<span className="text-[hsl(var(--accent))]">X</span>
            </span>
            <span className="text-[10px] text-muted-foreground leading-none hidden md:block">
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
