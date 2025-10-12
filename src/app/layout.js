import "./globals.css";
import { oxygen, dmSans } from "./font";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import Footer2 from "@/components/shared/footer/Footer2";
import FooterRevealer from "@/components/shared/footer/FooterRevealer";
import ProgressProvider from "./providers";
import LoaderProvider from "@/wrappers/LoaderProvider";
// import { LoaderContextProvider } from "@/contexts/LoaderContext";
import ContactModal from "@/components/shared/navbar/nav/ContactModal";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import { FooterProvider } from "@/contexts/FooterContext";
import { ReactLenis } from "@/components/utils/lenis/LenisProvider";

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
        {/* <LoaderContextProvider> */}
        <ContactModalProvider>
          <FooterProvider>
            <body
              className={`${oxygen.variable} ${dmSans.variable} antialiased`}
            >
              {/* <LoaderProvider> */}
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
              <ContactModal clickOutside={true} />
              {/* </LoaderProvider> */}
            </body>
          </FooterProvider>
        </ContactModalProvider>
        {/* </LoaderContextProvider> */}
      </ReactLenis>
    </html>
  );
}
