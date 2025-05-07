import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    title: "PLC Coding Portal",
    description: "Canvas tools, APIs, and resources by the PLC Coding Team",
    icons: {
        icon: [
            { url: "/images/favicon.ico", type: "image/x-icon" },
            { url: "/images/favicon.svg", type: "image/svg+xml" },
            { url: "/images/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: "/images/apple-touch-icon.png",
    },
    manifest: "/images/site.webmanifest",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
        <main style={{ flex: 1 }}>{children}</main>
        </body>
        </html>
    );
}
