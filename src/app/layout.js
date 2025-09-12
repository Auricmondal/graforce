import "./globals.css";
import { oxygen, dmSans } from "./font";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ProgressProvider from "./providers";
import LoaderProvider from "@/wrappers/LoaderProvider";
import { LoaderContextProvider } from "@/contexts/LoaderContext";

export const metadata = {
  title: "Graforce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LoaderContextProvider>
        <body className={`${oxygen.variable} ${dmSans.variable} antialiased`}>
          <LoaderProvider>
            <Navbar />
            <ProgressProvider>{children}</ProgressProvider>
            <Footer />
          </LoaderProvider>
        </body>
      </LoaderContextProvider>
    </html>
  );
}
