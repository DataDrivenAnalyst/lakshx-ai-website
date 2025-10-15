// src/components/ScrollToHash.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1); // remove the “#”
      // Delay slightly to allow DOM to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else {
      // If no hash, optional: scroll to top
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);

  return null;
}
