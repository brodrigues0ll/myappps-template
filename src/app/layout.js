import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextAuthSessionProvider from "@/providers/sessionProvider";

export const metadata = {
  title: "My Apps - Template",
  description: "Template for Next.js apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="PT-BR">
      <NextAuthSessionProvider>
        <body className="antialiased dark">
          {children}
          <Toaster position="top-right" />
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
