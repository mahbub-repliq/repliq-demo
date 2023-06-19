"use client";

import ButtonSmall from "@/Commons/ButtonSmall";
import Image from "next/image";
import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import blogImage1 from "@/assets/images/blog_1.jpg";
import Link from "next/link";
import Loader from "@/Commons/Loader";
import useDataFetch from "@/libs/useDataFetch";
import PageTitle from "@/Commons/PageTitle";
import useMultipleDataFetch from "@/libs/useMultipleDataFetch";

function Blogs() {
  const [products, posts, isloadingProducts, isloadingPosts] = useMultipleDataFetch();
  return (
    <div className="pb-4 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <PageTitle>All Blogs</PageTitle>
      {isloadingPosts ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {posts?.slice(0, 8).map((item, index) => (
            <div
              className="group flex rounded bg-base-100 border py-4"
              key={index}
            >
              <div className="flex basis-1/3 md:basis-1/4">
                <Image
                  className="transition ease-in-out  group-hover:-translate-y-1 group-hover:scale-100 duration-500"
                  width={150}
                  height={100}
                  src={blogImage1}
                  alt=""
                />
              </div>
              <div className="basis-2/3 md:basis-3/4">
                <h3 className="text-slate-800 font-semibold text-lg mb-1 capitalize">
                  {item?.title?.slice(0, 20)}
                </h3>
                <p className="text-slate-500 mb-2">
                  Admin | <span>12 June 2023 </span>
                </p>
                <p className="text-slate-800">
                  {" "}
                  {item?.body?.slice(0, 50)}...{" "}
                </p>
                <ButtonSmall>
                  <Link className="my-2 md:my-4" href={`/blogs/${index + 1}`}>
                    View details{" "}
                    <BiChevronsRight className="inline" size={25} />
                  </Link>
                </ButtonSmall>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;
