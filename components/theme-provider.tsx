"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always start with the server-rendered default ("dark") so the first
  // client render matches the server output exactly. The inline script in
  // layout.tsx already sets the real data-theme attribute on <html> before
  // paint (avoiding any visible flash) — this state only needs to catch up
  // afterwards so the toggle button's icon is correct.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("croc-ai-theme") as Theme | null;
    if (stored && stored !== theme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from an external system (localStorage) on mount, the documented exception to this rule
      setTheme(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle() {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      window.localStorage.setItem("croc-ai-theme", next);
      return next;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
