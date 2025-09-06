import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
