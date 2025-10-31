"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaChevronRight,
} from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

import SectionWrapper from "@/wrappers/SectionWrapper";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

import client from "@/lib/sanityClient";
import { solutionWorksSectionQuery } from "@/Queries/services/solutionworks";

const SolutionWorks = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [solutionData, setSolutionData] = useState(null);

  // ✅ Fetch from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.fetch(solutionWorksSectionQuery);
        setSolutionData(res?.solutionWorksSection);
      } catch (error) {
        console.error("Error fetching solution works section:", error);
      }
    }
    fetchData();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgress = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    setProgress((currentTime / duration) * 100);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) videoRef.current.requestFullscreen();
  };

  if (!solutionData)
    return (
      <main className="w-full flex justify-center items-center h-[100vh] bg-secondary-light">
        Loading Solution Works Section...
      </main>
    );

  // ✅ Pick video source
  const videoSrc =
    solutionData.videoFile?.asset?.url || solutionData.videoUrl || "/hero-video.webm";

  return (
    <SectionWrapper
      className="w-full"
      sectionStyle={{
        backgroundColor: "var(--cst-neutral-1)",
      }}
    >
      <CardWrapper
        className="gap-2 bg-white py-8 px-4 md:px-6"
        variant="custom"
      >
        <div className="md:max-w-[400px] flex flex-col gap-2">
          <SectionLabel text={solutionData.sectionHeader || "How the Solution Works"} />
          <AnimatedHeader>
            <div className="text-xl">{solutionData.sectionSubHeader || "The Future of Hydrogen"}</div>
          </AnimatedHeader>
          <AnimatedHeader>
            <p>
              {solutionData.description ||
                "Watch how plasma innovation delivers clean, scalable hydrogen without CO₂ emissions."}
            </p>
          </AnimatedHeader>
        </div>
      </CardWrapper>

      <CardWrapper
        className="gap-6 bg-white p-4 md:p-6 mt-2 w-full flex flex-col"
        variant="custom"
        align="center"
      >
        {/* Video Player */}
        <div className="relative w-full rounded-2xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[550px] xl:h-[800px] transition-all duration-200 ease-in-out">
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            muted={isMuted}
            onTimeUpdate={handleProgress}
            className="w-full h-full object-cover"
            onClick={togglePlay}
          ></video>

          {/* Center Play Button */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40"
            >
              <CiPlay1 className="text-white h-16 w-16 bg-primary rounded-full p-4 flex items-center justify-center" />
            </button>
          )}

          {/* Custom Controls */}
          <div
            className={`absolute bottom-0 w-full bg-black/50 flex items-center gap-4 px-4 py-3 ${
              isPlaying ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            {/* Play / Pause */}
            <button onClick={togglePlay}>
              {isPlaying ? (
                <FaPause className="text-white h-6 w-6" />
              ) : (
                <FaPlay className="text-white h-6 w-6" />
              )}
            </button>

            {/* Progress Bar */}
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="flex-1 h-1 cursor-pointer accent-white"
            />

            {/* Volume */}
            <button onClick={toggleMute}>
              {isMuted ? (
                <FaVolumeMute className="text-white h-6 w-6" />
              ) : (
                <FaVolumeUp className="text-white h-6 w-6" />
              )}
            </button>

            {/* Fullscreen */}
            <button onClick={handleFullscreen}>
              <FaExpand className="text-white h-6 w-6" />
            </button>
          </div>
        </div>

        {solutionData.buttonText && (
          <a href={solutionData.buttonLink} target="_blank" rel="noopener noreferrer">
            <PrimaryButton className="bg-cst-neutral-5 text-white transition py-3 px-4 md:py-4 md:px-6 lg:py-8 lg:px-12 rounded-2xl lg:rounded-3xl font-medium lg:text-2xl text-sm sm:text-base flex items-center gap-3 justify-center">
              {solutionData.buttonText} <FaChevronRight />
            </PrimaryButton>
          </a>
        )}
      </CardWrapper>
    </SectionWrapper>
  );
};

export default SolutionWorks;
