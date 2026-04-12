"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const root = document.documentElement;
    if (stored === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const dark = root.classList.contains("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
    setIsDark(dark);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      className="shrink-0 border-amber-500/30 bg-background/60 text-foreground backdrop-blur-sm hover:bg-amber-500/10"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="size-4 text-amber-400" aria-hidden />
      ) : (
        <Moon className="size-4 text-slate-700" aria-hidden />
      )}
    </Button>
  );
}
