import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "npm Security Scorecard – Grade Your Packages Before Installing",
  description: "Analyze npm packages for vulnerabilities, maintenance status, and supply chain risks. Get instant A-F security grades."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a21a4785-7079-40b8-b8ba-97337d51c8ae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
