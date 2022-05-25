import { useLayoutEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<string>("#121212");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const prefersNotSet = window.matchMedia(
    "(prefers-color-scheme: no-preference)"
  ).matches;

  useLayoutEffect(() => {
    if (prefersDark) {
      setTheme("#121212");
    }

    if (prefersLight) {
      setTheme("#ffffff");
    }

    if (prefersNotSet) {
      setTheme("#121212");
    }

  }, [theme]);

  return [theme]
}

