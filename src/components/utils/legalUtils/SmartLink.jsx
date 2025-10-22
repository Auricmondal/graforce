const SmartLink = ({ type, value, className }) => {
  const href = {
    mail: `mailto:${value}`,
    phone: `tel:${value}`,
    link: value,
  }[type] || value;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-primary text-xl hover:underline ${className}`}>
      {value}
    </a>
  );
};

export default SmartLink;