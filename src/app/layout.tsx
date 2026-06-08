import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Eden Skye Studios",
  description: "Digital modeling and content creator agency"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
