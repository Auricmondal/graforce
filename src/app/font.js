import { Oxygen, DM_Sans } from "next/font/google";

const oxygen = Oxygen({
  variable: "--font-oxygen",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export { oxygen, dmSans };
