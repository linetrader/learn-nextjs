import "../styles/global.css";
import { Suspense } from "react";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata:Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: 'The best movies on the best framework',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
