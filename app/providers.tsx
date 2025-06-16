import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  );
};
export default Providers;
