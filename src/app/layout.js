import "./globals.css";
import { oxygen, dmSans } from "./font";

export const metadata = {
  title: "Graforce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oxygen.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
