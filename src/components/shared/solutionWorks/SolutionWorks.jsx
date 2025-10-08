"use client";
import React, { useRef, useState } from "react";
import SectionWrapper from "@/wrappers/SectionWrapper";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import { TbSquareRotatedFilled } from "react-icons/tb";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
} from "react-icons/fa";

const SolutionWorks = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgress = () => {
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <SectionWrapper className="w-full bg-primary ">
      <div className="max-w-[2000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-3">
          <GradientBadge
            variant="testimonials"
            text="How the Solution Works"
            icon={<TbSquareRotatedFilled className={`rotate-45`} />}
            className="p-[4px_16px] rounded-full opacity-100 inline-flex items-center justify-start bg-gradient-to-r from-primary-50 to-primary-300 text-white text-xs sm:text-sm md:text-md font-medium border-black/10"
          />
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center max-w-4xl">
            The Future of Hydrogen
          </div>
          <div className="text-sm text-center max-w-3xl text-gray-600">
            Watch how plasma innovation delivers clean, scalable hydrogen
            without CO<sub>2</sub> emissions.
          </div>

          {/* Video Player */}
          <div className="relative w-full rounded-2xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[550px] xl:h-[800px] transition-all duration-200 ease-in-out">
            <video
              ref={videoRef}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
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
                <FaPlay className="text-white h-20 w-20 drop-shadow-lg" />
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
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SolutionWorks;
