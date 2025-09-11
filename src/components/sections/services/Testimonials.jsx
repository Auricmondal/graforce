"use client";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import ArrowControls from "@/components/utils/testimonials/ArrowControls";
import TestCard from "@/components/utils/testimonials/TestCard";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React, { useState, useEffect, useRef } from "react";
import { TbSquareRotatedFilled } from "react-icons/tb";

const Testimonial = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Video data with aspect ratios
  const reviews = [
    {
      id: "HzOmL8w_pU4",
      description: "Graforce’s Plasmalyzer® allowed us to slash emissions in our gas-to-hydrogen project while saving significantly on operating costs. This technology is a real game-changer for utilities under carbon regulation.",
      author: "Dr. Michael Weber, Head of Innovation",
      place: "EuroEnergy Utilities",
      image: "/test/img/test-image.jpg"
    }
  ];

  // Duplicate reviews for infinite effect
  const duplicatedReviews = [
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
  ];
  const totalReviews = duplicatedReviews.length;

  // Handle auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % duplicatedReviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, duplicatedReviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % duplicatedReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + duplicatedReviews.length) % duplicatedReviews.length
    );
  };

  // Calculate transform for carousel
  const getTransform = () => {
    if (!carouselRef.current) return "translateX(0)";

    const firstChild = carouselRef.current.children[0];
    const slideWidth = firstChild ? firstChild.offsetWidth : 0;
    const gap = 8; // Tailwind gap-2 = 0.5rem = 8px
    const offset = (slideWidth + gap) * currentIndex;

    return `translateX(-${offset}px)`;
  };

  return (
    // <div className="w-full bg-primary px-4 py-8 sm:px-6 lg:px-12 sm:py-12 md:py-12 lg:py-16 bg-gradient-to-r from-[#081124] via-[#193570] to-[#1E428A]">
    <SectionWrapper className="w-full bg-primary bg-gradient-to-r from-[#081124] via-[#193570] to-[#1E428A]">
      <div
        className="max-w-[2000px] max-h-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative overflow-hidden w-full group">
          <div className="flex flex-row gap-2 items-center justify-between w-full">
            <div className="flex-1 space-y-1 md:space-y-3 mb-4 md:mb-8 mx-auto sm:mx-0 text-center sm:text-left">
              <GradientBadge
                variant="testimonials"
                text="This is What Our Customer Has to Say"
                icon={<TbSquareRotatedFilled className={`rotate-45`} />}
                className="p-[4px_16px] rounded-full opacity-100 inline-flex items-center justify-start bg-gradient-to-r from-primary-50 to-primary-300 text-white text-sm md:text-md font-medium border-black/10"
              />
              <h2 className="lg:text-5xl md:text-4xl text-2xl text-white">
                Testimonials
              </h2>
              <p className="text-white text-sm md:text-base">
                Graforce’s hydrogen technology has been successfully piloted
                with energy utilities and industrial partners, demonstrating up
                to 95% CO₂ reduction while cutting operational costs by 20–30%.
              </p>
            </div>

            {/* Navigation arrows */}
            <ArrowControls
              className="hidden sm:flex flex-row pb-6 gap-3 justify-end"
              prevSlide={prevSlide}
              nextSlide={nextSlide}
            />
          </div>

          {/* Carousel track */}
          <div
            ref={carouselRef}
            className="flex gap-2 bg-transparent transition-transform duration-500 ease-in-out"
            style={{ transform: getTransform() }}
          >
            {duplicatedReviews.map((review, index) => (
              <TestCard
                key={`${review.id}-${index}`}
                review={review}
                currentIndex={currentIndex}
                index={index}
                totalReviews={totalReviews}
                className={``}
              />
            ))}
          </div>

          {/* Navigation arrows for mobile */}
          <ArrowControls
            className="sm:hidden flex flex-row py-6 gap-3 justify-center"
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        </div>
      </div>
    </SectionWrapper>
    // </div>
  );
};

export default Testimonial;
