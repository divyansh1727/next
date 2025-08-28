declare module "next-themes" {
  import * as React from "react";

  export interface ThemeProviderProps {
    children: React.ReactNode;
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
    enableColorScheme?: boolean;
    storageKey?: string;
    forcedTheme?: string | null;
    disableTransitionOnChange?: boolean;
    themes?: string[];
    value?: Record<string, string>;
    nonce?: string;
    scriptProps?: Record<string, any>;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;

  export function useTheme(): {
    theme?: string;
    setTheme: (theme: string) => void;
    resolvedTheme?: string;
    systemTheme?: "light" | "dark";
  };
}
