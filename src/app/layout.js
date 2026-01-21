import { Inter } from "next/font/google";
import "./globals.css";
import DisableInspect from "./components/DisableInspect";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "My latest profile using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisableInspect />
        {children}
      </body>
    </html>
  );
}
