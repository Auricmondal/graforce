import React from "react";
import Image from "next/image";

const BlogCard = ({ blog, variant = "default" }) => {
  const variants = {
    default: "",
    side: "grid grid-cols-2 gap-4 items-center",
  };

  return (
    <div key={blog.id} className={`group cursor-pointer ${variants[variant]}`}>
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden rounded-2xl group-hover:rounded-[96px] transition-all duration-500 ease-in-out">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Tag */}
      <div className="">
        <div className="my-3">
          <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-lg">
            {blog.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-[32px] text-black mb-3 leading-tight group-hover:text-primary-600 transition-colors duration-300">
          {blog.title}
        </h3>

        {/* Date */}
        <p className="text-cst-neutral-600">Posted on {blog.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
