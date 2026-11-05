import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Putta Shankar Prasad Y N — Builder Portfolio",
  description: "I build practical software across product engineering, applied AI, developer tools, Linux systems and application security.",
  openGraph: {
    title: "Putta Shankar Prasad Y N — Build with intent",
    description: "Selected projects, experiments and the systems behind them.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#10120f",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}