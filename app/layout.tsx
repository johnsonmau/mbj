import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { identity } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${identity.name} | ${identity.role}`,
    template: `%s | ${identity.name}`,
  },
  description: identity.tagline,
  openGraph: {
    title: `${identity.name} | ${identity.role}`,
    description: identity.tagline,
    type: "website",
  },
};

// Runs before paint so the saved theme applies without a flash.
const themeInit = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
