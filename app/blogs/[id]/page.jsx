"use client";

import Image from "next/image";
import { useQuery } from "react-query";
import blogImage1 from "@/assets/images/blog_1.jpg";

function SingleBlog({ params: { id } }) {
  const { isLoading, error, data } = useQuery("singleblog", () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    )
  );

  console.log(data);
  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold">
        View Blog
      </h2>
      <p className="text-neutral text-lg">Slug: home / blogs / {id}</p>
      <div className="mt-5">
        <div className=" flex justify-center items-center">
          <Image width={300} height={300} src={blogImage1} alt="" />
        </div>
        <div className="">
          <h3 className="text-slate-800 font-semibold text-lg mb-1 capitalize">
            {data?.title}
          </h3>
          <p className="text-slate-500 mb-2">
            Author: Admin | <span> Date: 12 June 2023 </span>
          </p>
          <p className="text-slate-800"> {data?.body} </p>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
