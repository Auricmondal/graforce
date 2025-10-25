import React from 'react';

const LegalSection = ({ 
  title, 
  children, 
  className = "",
  titleClassName = "",
  contentClassName = ""
}) => {
  return (
    <section className={`${className}`}>
      <h2 className={`text-[40px] font-semibold text-black mb-4 ${titleClassName}`}>
        {title}
      </h2>
      <div className={`leading-relaxed text-xl ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default LegalSection;