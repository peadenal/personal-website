/// <reference types="vite/client" />

interface Window {
  /** Set by public/theme.js before the app loads. */
  __siteTheme?: {
    isDarkNow: () => boolean;
    darkByClock: (date?: Date) => boolean;
    setOverride: (dark: boolean) => void;
  };
}
