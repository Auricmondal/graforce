import React from "react";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  return (
    <div key={blog.id} className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full h-64 mb-4 overflow-hidden rounded-2xl group-hover:rounded-[96px] transition-all duration-500 ease-in-out">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Tag */}
      <div className="mb-3">
        <span className="inline-block px-4 py-1 bg-primary-300 text-white text-sm font-medium rounded-xl">
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
  );
};

export default BlogCard;
