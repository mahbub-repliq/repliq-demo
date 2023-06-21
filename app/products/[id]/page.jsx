"use client";

import LargeButton from "@/Commons/LargeButton";
import { useState, useEffect } from "react";
import useMultipleDataFetch from "@/hooks/useMultipleDataFetch";
import PageTitle from "@/Commons/PageTitle";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

function SingleProduct({ params: { id } }) {
  const [activeTab, setActiveTab] = useState("0");
  const router = useRouter();
  const [products, posts, isloadingProducts, isloadingPosts] =
    useMultipleDataFetch();

  const product = products?.find((item) => item._id == id);

  return (
    <div className="pb-4 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <PageTitle>View Item</PageTitle>
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
          onClick={() => router.push("/products")}
        >
          products
        </button>{" "}
        / {product?.model}
      </div>
      <div className="md:grid md:grid-cols-5 items-center gap-5">
        <div className=" col-span-2 flex justify-center items-center my-5">
          <img className="w-full" src={product?.image} alt="" />
        </div>
        <div className="col-span-3">
          <h3 className="text-neutral text-lg md:text-xl lg:text-2xl font-semibold pb-3">
            {" "}
            {product?.model}{" "}
          </h3>
          <div className="pb-3">
            <p>
              Price:{" "}
              <span className="text-secondary font-semibold">
                {product?.price}
              </span>{" "}
              Tk.
            </p>
          </div>
          <h3 className="text-lg font-semibold pb-3">Feature:</h3>
          <ul className="list-disc pl-4">
            {product?.keyFeature.map((item, index) => (
              <li key={index}> {item} </li>
            ))}
          </ul>
          <div className="hidden my-5 md:block">
            <LargeButton>Checkout</LargeButton>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex gap-4 text-lg font-semibold mb-2 mt-5">
          <li
            onClick={() => setActiveTab("0")}
            className={`pb-2 border-b-2 ${
              activeTab == 0 ? "border-primary" : "border-transparent"
            } hover:border-primary cursor-pointer`}
          >
            Details
          </li>
          <li
            onClick={() => setActiveTab("1")}
            className={`pb-2 border-b-2 ${
              activeTab == 1 ? "border-primary" : "border-transparent"
            } hover:border-primary cursor-pointer`}
          >
            Comments
          </li>
          <li
            onClick={() => setActiveTab("2")}
            className={`pb-2 border-b-2 ${
              activeTab == 2 ? "border-primary" : "border-transparent"
            } hover:border-primary cursor-pointer`}
          >
            FAQ
          </li>
          <li
            onClick={() => setActiveTab("3")}
            className={`pb-2 border-b-2 ${
              activeTab == 3 ? "border-primary" : "border-transparent"
            } hover:border-primary cursor-pointer`}
          >
            Reviews
          </li>
        </ul>
        <ul className="list-disc pl-4">
          <li>{product?.spec[0].processor} </li>
          <li> {product?.spec[1].motherboard}</li>
          <li> {product?.spec[2].ram}</li>
          <li> {product?.spec[3].graphics}</li>
          <li> {product?.spec[4].storage}</li>
          <li> {product?.spec[5].casing}</li>
          <li> {product?.spec[6].psu}</li>
        </ul>
      </div>
      <div className="sticky bottom-4 my-5 md:hidden">
        <LargeButton>Checkout</LargeButton>
      </div>
    </div>
  );
}

export default SingleProduct;
