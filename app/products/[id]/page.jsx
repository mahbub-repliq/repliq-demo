"use client";

import LargeButton from "@/Commons/LargeButton";
import { useState } from "react";
import { useQuery } from "react-query";

function SingleProduct({ params: { id } }) {
  const [activeTab, setActiveTab] = useState("0");
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://manufecture-website-server.onrender.com/products").then(
      (res) => res.json()
    )
  );

  const product = data?.find((item) => item._id == id);

  console.log("Got single item......", product);

  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold">
        View Item
      </h2>
      <p className="text-neutral text-lg">Slug: home / products / {product?._id}</p>
      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div className="flex justify-center items-center ">
          <img className="w-full" src={product?.image} alt="" />
        </div>
        <div>
          <h3 className="text-neutral text-lg md:text-xl lg:text-2xl font-semibold pb-3">
            {" "}
            {product?.model}{" "}
          </h3>
          <div className="flex gap-5 pb-3">
            <p>
              Price: <span className="text-secondary">{product?.price}</span>{" "}
            </p>
            <p>Rating: {product?.rating} </p>
          </div>
          <h3 className="text-lg font-semibold pb-3">Feature:</h3>
          <ul>
            {product?.keyFeature.map((item, index) => (
              <li key={index}>
                {" "}
                {index + 1} {item}{" "}
              </li>
            ))}
          </ul>
          <LargeButton>Checkout</LargeButton>
        </div>
      </div>
      <div>
        <ul className="hidden md:flex gap-4 text-sm md:text-lg mb-2">
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
        <ul>
          <li> {product?.spec[0].processor} </li>
          <li> {product?.spec[1].motherboard}</li>
          <li> {product?.spec[2].ram}</li>
          <li> {product?.spec[3].graphics}</li>
          <li> {product?.spec[4].storage}</li>
          <li> {product?.spec[5].casing}</li>
          <li> {product?.spec[6].psu}</li>
        </ul>
      </div>
    </div>
  );
}

export default SingleProduct;
