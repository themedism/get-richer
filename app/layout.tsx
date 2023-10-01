import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { sharedMetadata } from "@/config/metadata";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = { ...sharedMetadata };

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr">
      <body className={font.className}>{children}</body>
    </html>
  );
}
