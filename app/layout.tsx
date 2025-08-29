import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/navBar/NavBar";


export const metadata: Metadata = {
  title: "Product Designer",
  description: "Build by Priyanshu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
