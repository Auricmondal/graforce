import React from "react";

const SectionWrapper = ({ children, className = "", backgroundColour = null, maxWidth = null, sectionStyle = {}, ...props }) => {
  return (
    <section
      className={`px-4 sm:px-8 lg:px-12 py-6 sm:py-12 lg:py-16 w-full`}
      style={{...sectionStyle}}
    >
      <div className={`max-w-[${maxWidth}] ${className} mx-auto`}
        {...props}
      >
        {children}
      </div>
    </section>
  );
};  

export default SectionWrapper;