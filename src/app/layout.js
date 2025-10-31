import "./globals.css";
import { oxygen, dmSans, dancingScript } from "./font";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import Footer2 from "@/components/shared/footer/Footer2";
import FooterRevealer from "@/components/shared/footer/FooterRevealer";
import ProgressProvider from "./providers";
import LoaderProvider from "@/wrappers/LoaderProvider";
import { LoaderContextProvider } from "@/contexts/LoaderContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { FooterProvider } from "@/contexts/FooterContext";
import { ReactLenis } from "@/components/utils/lenis/LenisProvider";
import DynamicSidebar from "@/components/shared/sidebar/DynamicSidebar";

import ToastProvider from "@/wrappers/ToastProvider";
import BannerProvider from "@/wrappers/BannerProvider";

// ✅ Correct import for the LanguageProvider (keep it like this)
import { LanguageProvider } from "@/hooks/useLanguage";

export const metadata = {
  title: "Graforce",
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <LoaderContextProvider>
          <SidebarProvider>
            <FooterProvider>
              <body
                className={`${oxygen.variable} ${dmSans.variable} ${dancingScript.variable} antialiased`}
              >
                <LoaderProvider>
                  <BannerProvider>
                    <ToastProvider />
                    <div className="relative z-10">
                      <Navbar />
                      <ProgressProvider>{children}</ProgressProvider>
                      <Footer />
                    </div>
                    <div className="relative z-10 pointer-events-none ">
                      <FooterRevealer />
                    </div>
                    <div className="fixed w-full bottom-0 z-0">
                      <Footer2 />
                    </div>
                    <DynamicSidebar />
                  </BannerProvider>
                </LoaderProvider>
              </body>
            </FooterProvider>
          </SidebarProvider>
        </LoaderContextProvider>
      </ReactLenis>
    </html>
  );
}
