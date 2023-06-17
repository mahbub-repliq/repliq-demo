"use client";

import ButtonSmall from "@/Commons/ButtonSmall";
import Image from "next/image";
import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { useQuery } from "react-query";
import blogImage1 from "@/assets/images/blog_1.jpg";
import Link from "next/link";

function Blogs() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  );

  console.log("Found blog items................", data);

  return (
    <div className="pt-4 md:pt-20 lg:pt-28 pb-4 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {data?.slice(0, 9).map((item, index) => (
          <div
            className="group flex gap-1 rounded bg-base-100 shadow-lg py-3 md:py-5 lg:py-8"
            key={index}
          >
            <div className="basis-1/3 flex justify-center items-center">
              <Image className="transition ease-in-out  group-hover:-translate-y-1 group-hover:scale-105 duration-500" width={200} height={200} src={blogImage1} alt="" />
            </div>

            <div className="basis-2/3">
              <h3 className="text-slate-800 font-semibold text-lg mb-1 capitalize">
                {item?.title?.slice(0, 20)}
              </h3>
              <p className="text-slate-500 mb-2">
                Author: Admin | <span> Date: 12 June 2023 </span>
              </p>
              <p className="text-slate-800"> {item?.body?.slice(0, 50)}... </p>
              <ButtonSmall>
                <Link href={`/blogs/${item.id}`}>View details <BiChevronsRight className="inline" size={25} /></Link>
              </ButtonSmall>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
