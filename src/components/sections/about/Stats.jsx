'use client';
import CardWrapper from '@/wrappers/CardWrapper';
import SectionWrapper from '@/wrappers/SectionWrapper';
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const [counter, setCounter] = useState([0, 0, 0]);

  const statsData = [
    {
      value: 120000,
      value: 120000,
      prefix: '',
      description: 'CO₂ avoided annually through hydrogen-based fuel and process innovations.',
      suffix: 'tons',
    },
    {
      value: 35,
      value: 35,
      prefix: '',
      description: 'Higher energy efficiency compared to conventional hydrogen production methods.',
      suffix: '',
    },
    {
      value: 70,
      value: 70,
      prefix: 'Up to',
      description: 'Reduction in operational emissions through process optimization.',
      suffix: '',
    },
  ];

  const startCounter = () => {
    setCounter(statsData.map(stat => stat.value));
  };

  const resetCounter = () => {
    setCounter([0, 0, 0]);
  };

  useGSAP(() => {
    if (window.innerWidth >= 1024) {
      gsap.to('.stat-item', {
        opacity: 1,
        scrollTrigger: {
          trigger: '.stat-item',
          start: 'top 90%',
          end: 'top 0%',
          onEnter: () => startCounter(),
          onLeave: () => resetCounter(),
          onEnterBack: () => startCounter(),
          onLeaveBack: () => resetCounter(),
          // once: true,  //* Uncomment this line to trigger only once
          markers: false,  //Todo Remove this line in production
          toggleActions: 'play none none reverse',  // Play on enter, reverse on leave back
          scrub: 2,  // Smooth scrubbing
        },
      });
    } else {
      gsap.to('.stat-item', {
        opacity: 1,
        scrollTrigger: {
          trigger: '.stat-item',
          start: 'top 80%',
          // end: 'top 0%',
          onEnter: () => startCounter(),
          // onLeave: () => resetCounter(),
          // onEnterBack: () => startCounter(),
          // onLeaveBack: () => resetCounter(),
          once: true,  //* Uncomment this line to trigger only once
          markers: false,  //Todo Remove this line in production
          // toggleActions: 'play none none reverse',  // Play on enter, reverse on leave back
          scrub: 2,  // Smooth scrubbing
        },
      });
    }
    return {
      // Cleanup function to reset the counter when the component unmounts
      onUnmount: () => {
        resetCounter();
      },
    }
  }, []);

  return (
    <SectionWrapper sectionClassName="bg-cst-neutral-1">
      <CardWrapper variant="standard" className="flex flex-col justify-center items-center md:h-fit" color="default" align="center">
        {/* <button
          className="border border-black text-black rounded-full hover:text-white hover:bg-gray-700 cursor-pointer p-4 px-10 transition-all duration-300 ease-in-out"
          onClick={startCounting}
        >
          Start
        </button> */}

        <div className="grid grid-cols-1 min-[910px]:grid-cols-3 gap-4 justify-evenly w-full mt-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-2 items-center bg-white p-6 rounded-full aspect-square mx-auto justify-center w-full sm:w-1/2 md:w-auto scale-80"
            // style={{ transform: `rotate(${ -45 + 45 * index }deg)` }}
            >
              <div className="relative z-2 flex flex-col">
                <div className="flex gap-2 items-end text-sm text-cst-neutral-5">
                  <div className="mb-1">{stat.prefix}</div>
                  <h3 className="stat-item text-5xl md:text-6xl flex items-end">
                    <CountUp start={0} end={counter[index]} duration={4.75} separator="," />
                    {index === 0 ? '+' : '%'}
                  </h3>
                </div>
                <p className="text-base text-cst-neutral-5">{stat.suffix}</p>
              </div>
              <p className="relative text-base text-cst-neutral-5 text-center z-2">{stat.description}</p>
              <div className="gradient-circle absolute z-1" style={{ transform: `rotate(${-45 + 45 * index}deg)` }}></div>
            </div>
          ))}
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default Stats;
