"use client";

import { useQuery } from "react-query";
import {TbCurrencyTaka} from 'react-icons/tb'
import LargeButton from "@/Commons/LargeButton";
import Link from "next/link";

function Products() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://manufecture-website-server.onrender.com/products").then(
      (res) => res.json()
    )
  );

  console.log("Got all products.........", data);
  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-transparent rounded-lg shadow-lg p-3 md:p-4 lg:p-5"
          >
            <div className="flex justify-center items-center">
              <img className="w-48" src={item.image} alt="" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl text-secondary text-center py-3"> {item.price} <TbCurrencyTaka className="inline" size={25} /> </h3>
            {/* <p> {item.rating} </p> */}
            <h3 className="text-lg md:text-xl font-semibold text-center"> {item.model} </h3>
            <LargeButton>
            <Link href={`/products/${item._id}`}>View details</Link>
            </LargeButton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

// 'https://manufecture-website-server.onrender.com/products'
