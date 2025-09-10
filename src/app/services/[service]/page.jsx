import React from "react";
import Hero from "@/components/sections/services/Hero";
import Problem from "@/components/sections/services/Problem";
import Solution from "@/components/sections/home/SolutionSection";
import SolutionWorks from "@/components/sections/services/SolutionWorks";
import Testimonials from "@/components/sections/services/Testimonials";
import FAQ from "@/components/sections/services/FAQ";
import OtherServices from "@/components/sections/services/OtherServices";
import News from "@/components/sections/services/News";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";

import { notFound } from "next/navigation";

const ALLOWED_SLUGS = ["hydrogen", "water_purification", "energy_generation"];

export default async function ServicePage({ params }) {
  const { service } = await params;

  if (!ALLOWED_SLUGS.includes(service)) {
    notFound();
  }

  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <SolutionWorks />
      <Testimonials />
      <FAQ />
      <OtherServices />
      <News />
      <FinalCTA />
    </>
  );
}

/**
 * generateStaticParams:
 *
 * - This tells Next.js to pre-render only `/services/a`, `/services/b`, and `/services/c`
 *   at build time instead of rendering them on-demand at runtime.
 *   - Keep this if the set of slugs is small and fixed (like here: a, b, c).
 *   - Remove it if slugs might change dynamically (e.g., from a database or CMS).
 */
export async function generateStaticParams() {
  return ALLOWED_SLUGS.map((service) => ({ service }));
}
