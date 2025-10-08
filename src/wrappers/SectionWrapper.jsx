import React from "react";

const SectionWrapper = ({ children, className = "", backgroundColour = null, maxWidth = null, sectionStyle = {}, ...props }) => {
  return (
    <section
      className={`px-2 py-2 sm:px-2 sm:py-2 md:px-2 md:py-2 w-full`}
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