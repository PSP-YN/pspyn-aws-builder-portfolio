import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pspyn-aws-builder-portfolio.pages.dev"),
  alternates: { canonical: "/" },
  title: "Putta Shankar Prasad Y N | Software & Systems Portfolio",
  description:
    "Computer Science and Engineering undergraduate at VVCE, Mysuru. Selected work across product engineering, applied AI, Linux systems, developer tools and application security.",
  applicationName: "PSP Portfolio",
  authors: [{ name: "Putta Shankar Prasad Y N" }],
  openGraph: {
    title: "Putta Shankar Prasad Y N — Software & Systems Portfolio",
    description:
      "Selected projects, engineering experiments, recognition and the systems behind the work.",
    type: "website",
    locale: "en_IN",
    url: "https://pspyn-aws-builder-portfolio.pages.dev",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#10120f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
