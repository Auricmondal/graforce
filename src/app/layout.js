import "./globals.css";
import { oxygen, dmSans } from "./font";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import FooterRevealer from "@/components/shared/footer/FooterRevealer";
import ProgressProvider from "./providers";

export const metadata = {
  title: "Graforce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxygen.variable} ${dmSans.variable} antialiased`}>
          <div className="relative z-10">
            <Navbar />
            <ProgressProvider>{children}</ProgressProvider>
          </div>
          <div className="relative z-10 pointer-events-none">
            <FooterRevealer />
          </div>
          <div className="fixed bottom-0 w-full z-0">
            <Footer />
          </div>
      </body>
    </html>
  );
}
