import React from "react";
import Image from "next/image";

const BlogCard = ({ blog, variant = "default" }) => {
  const variants = {
    default: "",
    side: "grid grid-cols-2 gap-4 items-center",
  };

  return (
    <div key={blog.id} className={`group cursor-pointer ${variants[variant]}`}>
      <div className="relative w-full h-[188px] overflow-hidden rounded-2xl group-hover:rounded-[72px] transition-all duration-500 ease-in-out">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 my-4">
          <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-lg w-fit">
            {blog.tag}
          </span>

        <h3 className="text-xl md:text-2xl text-black leading-tight group-hover:text-primary-600 transition-colors duration-300">
          {blog.title}
        </h3>

        <p className="text-cst-neutral-4 font-light text-sm md:text-base">Posted on {blog.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
