"use client";
import { useRouter } from "next/navigation";

import shapeDiamond1 from "@/assets/service/shapeDiamond.png";
import shapeDiamond2 from "@/assets/service/shapeDiamond2.png";
import shapeDiamond3 from "@/assets/service/shapeDiamond3.png";

const router = useRouter();

export const productServices = [
  {
    index: 1,
    title: "Methane Plasmalyzer®",
    onClick: () => router.push("/products/methane-plasmalyzer"),
    image: shapeDiamond1,
  },
  {
    index: 2,
    title: "Wastewater Plasmalyzer®",
    onClick: () => router.push("/products/wastewater-plasmalyzer"),
    image: shapeDiamond2,
  },
  {
    index: 3,
    title: "Plasma Ammonia Cracker",
    onClick: () => router.push("/products/plasma-ammonia-cracker"),
    image: shapeDiamond3,
  },
  {
    index: 4,
    title: "Used components",
    onClick: () => router.push("/products/used-components"),
    image: shapeDiamond3,
  },
  {
    index: 5,
    title: "H2/natural gas refuelling",
    onClick: () => router.push("/products/h2-natural-gas-refuelling"),
    image: shapeDiamond3,
  },
  {
    index: 6,
    title: "Synthetic carbon",
    onClick: () => router.push("/products/synthetic-carbon"),
    image: shapeDiamond3,
  },
  {
    index: 7,
    title: "Synthetic Carbon Quality",
    onClick: () => router.push("/products/synthetic-carbon-quality"),
    image: shapeDiamond3,
  },
  {
    index: 8,
    title: "Syngas Production",
    onClick: () => router.push("/products/syngas-production"),
    image: shapeDiamond3,
  },
];
