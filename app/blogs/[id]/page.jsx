"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import blogImage1 from "@/assets/images/blog_1.jpg";
import PageTitle from "@/Commons/PageTitle";
import { useRouter } from "next/navigation";
import {FaHome} from 'react-icons/fa'

function SingleBlog({ params: { id } }) {
  const router = useRouter();
  const { isLoading, error, data } = useQuery({
    queryKey: ["singleBlog"],
    queryFn: async () =>
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
        (res) => res.json()
      ),
  });

  return (
    <div className="pb-4 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <PageTitle>View Blog</PageTitle>
      <div className="text-neutral text-lg border p-2">
        <button
          className="border-0 underline text-secondary"
          onClick={() => router.push("/")}
        >
          <div className="flex justify-center items-center ">
            <FaHome />
          </div>
        </button>{" "}
        /{" "}
        <button
          className="border-0 underline text-secondary"
          onClick={() => router.push("/blogs")}
        >
          blogs
        </button>{" "}
        / {data?.id}
      </div>
      <div className="mt-5">
        <div className="">
          <Image width={300} height={300} src={blogImage1} alt="" />
        </div>
        <div className="mt-5">
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
