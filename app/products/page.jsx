"use client";

import { useQuery } from "react-query";
import { TbCurrencyTaka } from "react-icons/tb";
import Link from "next/link";
import ButtonSmall from "@/Commons/ButtonSmall";
import { AiFillHeart } from "react-icons/ai";

function Products() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://manufecture-website-server.onrender.com/products").then(
      (res) => res.json()
    )
  );

  console.log("Got all products.........", data);
  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-transparent group rounded-lg shadow-lg p-3 md:p-4 lg:p-5 relative"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-48 transition ease-in-out  group-hover:-translate-y-1 group-hover:scale-110 duration-500"
                src={item.image}
                alt=""
              />
            </div>
            <h3 className=" md:text-lg lg:text-xl text-secondary text-center py-3">
              {" "}
              {item.price} <TbCurrencyTaka className="inline" size={20} />{" "}
            </h3>
            {/* <p> {item.rating} </p> */}
            <h3 className="text-md md:text-lg text-center"> {item.model} </h3>
            <div className="flex justify-center">
              <ButtonSmall>
                <Link href={`/products/${item._id}`}>View details</Link>
              </ButtonSmall>
            </div>
            <div className="group-hover:visible flex justify-center items-center w-10 h-10 rounded-full group-hover:bg-accent group-hover:shadow-lg transition-all ease-in-out duration-500 cursor-pointer absolute top-5 right-5">
              {" "}
              <AiFillHeart
                className="text-transparent group-hover:text-secondary transition-all ease-in-out duration-500"
                size={25}
              />{" "}
            </div>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-accent shadow-lg text-secondary transition-all ease-in-out duration-500 cursor-pointer absolute top-5 left-5">
              15%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

// 'https://manufecture-website-server.onrender.com/products'
