import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "AUTO BUILDER Frontend",
  description: "AUTO BUILDER command center frontend"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
