import "./globals.css";
import { oxygen, dmSans } from "./font";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ProgressProvider from "./providers";
import LoaderProvider from "@/wrappers/LoaderProvider";
import { LoaderContextProvider } from "@/contexts/LoaderContext";
import ContactModal from "@/components/shared/navbar/nav/ContactModal";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import { ReactLenis } from "@/components/utils/lenis/LenisProvider";

export const metadata = {
  title: "Graforce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <LoaderContextProvider>
          <ContactModalProvider>
            <body
              className={`${oxygen.variable} ${dmSans.variable} antialiased`}
            >
              <LoaderProvider>
                <div className="relative z-10">
                  <Navbar />
                  <ProgressProvider>{children}</ProgressProvider>
                </div>

                <Footer />
                <ContactModal clickOutside={true} />
              </LoaderProvider>
            </body>
          </ContactModalProvider>
        </LoaderContextProvider>
      </ReactLenis>
    </html>
  );
}
