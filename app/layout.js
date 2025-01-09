import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "ID8NXT",
  description: "Generated by ID8NXT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased scrollbar-container`}
        suppressHydrationWarning>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
