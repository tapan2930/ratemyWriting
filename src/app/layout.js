import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RateMyWriting",
  description: "AI powered writing analysis tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-950 text-paragrapgh `}>
        {children}
      </body>
    </html>
  );
}
