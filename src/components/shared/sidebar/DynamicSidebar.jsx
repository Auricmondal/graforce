'use client'
import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useSidebar, SIDEBAR_TYPES } from '@/contexts/SidebarContext';
import BrandLogo from '@/components/shared/navbar/nav/BrandLogo';
import NavigationContent from './content/NavigationContent';
import ContactContent from './content/ContactContent';
import ReadingContent from './content/ReadingContent';
import SpecificationsContent from './content/SpecificationsContent';
import CustomContent from './content/CustomContent';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CardWrapper from '@/wrappers/CardWrapper';
import { useScrollLock, useScrollPrevention } from '@/hooks/useScrollLock';
import JobContent from './content/JobContent';

const DynamicSidebar = () => {
  const {
    isOpen,
    contentType,
    title,
    closeSidebar
  } = useSidebar();

  const sidebarOverlayRef = React.useRef(null);
  const sidebarMenuRef = React.useRef(null);

  // Use scroll lock hook to manage body scroll
  useScrollLock(isOpen);
  
  // Use scroll prevention for overlay and menu
  useScrollPrevention(sidebarOverlayRef);
  useScrollPrevention(sidebarMenuRef);

  // Animation for sidebar open/close
  useGSAP(() => {
    const overlay = sidebarOverlayRef.current;
    const sidebarOverlayBackdrop = overlay?.children[0];
    const menuContainer = sidebarMenuRef.current;
    const tl = gsap.timeline();

    if (isOpen) {
      // Reset any previous states for content items
      gsap.set(".sidebar-content-item", { x: 300, opacity: 0 });
      gsap.set(".sidebar-action-button", { y: 50, opacity: 0 });

      // Open animation
      tl.to(overlay, { x: 0, duration: 0.3, ease: "power2.inOut" });
      tl.to(sidebarOverlayBackdrop, { x: 0, duration: 0.3, ease: "power2.inOut" }, "<0.1");
      tl.to(menuContainer, { x: 0, duration: 0.3, ease: "power2.inOut" });

      // Animate content items if they exist
      tl.to(".sidebar-content-item", {
        x: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out"
      }, "<0.1");

      // Animate action buttons if they exist
      tl.to(".sidebar-action-button", {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, "<0.1");
    } else {
      // Close animation
      tl.to(".sidebar-action-button", { y: 50, opacity: 0, duration: 0.2, ease: "power2.in" });
      tl.to(".sidebar-content-item", {
        x: 300,
        opacity: 0,
        duration: 0.2,
        stagger: -0.03,
        ease: "power2.in"
      }, "<");
      tl.to(menuContainer, { x: '40vw', duration: 0.3, ease: "power2.inOut" });
      tl.to(sidebarOverlayBackdrop, { x: '100vw', duration: 0.3, ease: "power2.inOut" }, "<0.1");
      tl.to(overlay, { x: '100vw', duration: 0.3, ease: "power2.inOut" });
    }
  }, [isOpen]);

  // Render content based on type
  const renderContent = () => {
    // console.log('DynamicSidebar - renderContent - contentType:', contentType);
    // console.log('DynamicSidebar - SIDEBAR_TYPES.CUSTOM:', SIDEBAR_TYPES.CUSTOM);
    
    switch (contentType) {
      case SIDEBAR_TYPES.NAVIGATION:
        return <NavigationContent />;
      case SIDEBAR_TYPES.CONTACT:
        return <ContactContent />;
      case SIDEBAR_TYPES.READING:
        return <ReadingContent />;
      case SIDEBAR_TYPES.SPECIFICATIONS:
        return <SpecificationsContent />;
      case SIDEBAR_TYPES.JOB:
        return <JobContent />;
      case SIDEBAR_TYPES.CUSTOM:
        return <CustomContent />;
      default:
        return <NavigationContent />;
    }
  };

  // if (!isOpen) return null;

  return (
    <div
      ref={sidebarOverlayRef}
      className="sidebar-overlay w-screen h-screen fixed flex flex-row justify-end top-0 right-0 bg-black/30 backdrop-blur-sm z-[200] translate-x-[100vw] overflow-hidden"
    >
      {/* Backdrop for desktop */}
      <div
        className="sidebar-backdrop hidden min-[1130px]:block w-0 lg:w-[60vw] h-screen translate-x-[100vw]"
        onClick={closeSidebar}
      />

      {/* Sidebar Container */}
      <div
        ref={sidebarMenuRef}
        className={`sidebar-menu flex flex-col justify-start h-screen w-screen min-[1130px]:w-[45vw] gap-2 p-2 min-[1130px]:rounded-l-2xl translate-x-[40vw] overflow-hidden ${contentType === SIDEBAR_TYPES.CONTACT ? "bg-cst-neutral-3" : "bg-cst-neutral-1"}`}
      >
        {/* Header */}
        <CardWrapper variant='custom' color={contentType === SIDEBAR_TYPES.CONTACT ? "custom" : contentType === SIDEBAR_TYPES.SPECIFICATIONS ? "blue" : "default"} flexColumn={false} className={`sidebar-content-item flex items-center justify-between rounded-xl p-4 capitalize text-3xl font-bold ${contentType === SIDEBAR_TYPES.CONTACT ? "text-white bg-cst-neutral-5" : contentType === SIDEBAR_TYPES.SPECIFICATIONS ? "bg-primary text-cst-neutral-1" : "bg-white text-cst-neutral-5"}`}>
          <div className="flex items-center gap-3">
            <BrandLogo size='text-4xl' />
            {/* {contentType !== SIDEBAR_TYPES.NAVIGATION && (
              <span className="text-lg font-semibold text-gray-700">
                {title}
              </span>
            )} */}
          </div>
          <div
            className={`group border border-cst-neutral-2 p-2 rounded-full cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary ${contentType === SIDEBAR_TYPES.SPECIFICATIONS ? "hover:border-cst-neutral-1 hover:text-cst-neutral-5" : "hover:border-primary "}`}
            onClick={closeSidebar}
          >
            <RxCross1 className="text-2xl group-hover:text-white group-hover:rotate-180 transition-all ease-in-out duration-300" />
          </div>
        </CardWrapper>

        {/* Content Area */}
        <div className={`sidebar-content-item flex flex-col rounded-xl p-4 h-full overflow-hidden ${contentType === SIDEBAR_TYPES.CONTACT ? "text-white bg-cst-neutral-5" : contentType === SIDEBAR_TYPES.SPECIFICATIONS ? "bg-primary text-cst-neutral-1" : "bg-white"}`}>
          <div className="relative flex-1 overflow-y-auto overflow-x-hidden sidebar-scroll">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicSidebar;