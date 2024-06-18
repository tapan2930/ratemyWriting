import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RateMyWriting",
  description: "AI powered writing analysis tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-paragrapgh `}>
        <NavigationBar />
        {children}
      </body>
      <script src="node_modules/@material-tailwind/html/scripts/tabs.js"></script>
    </html>
  );
}
