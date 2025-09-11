import "./globals.css";
import { oxygen, dmSans } from "./font";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ProgressProvider from "./providers";

export const metadata = {
  title: "Graforce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxygen.variable} ${dmSans.variable} antialiased`}>
        <Navbar />
        <ProgressProvider>{children}</ProgressProvider>
        <Footer />
      </body>
    </html>
  );
}
