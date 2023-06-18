"use client";

import { useQuery } from "react-query";
import ButtonSmall from "@/Commons/ButtonSmall";
import Loader from "@/Commons/Loader";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

function Fetchedproducts() {
  const [wishlisted, setWishlisted] = useState(false);
  const { isLoading, error, data } = useQuery("products", () =>
    fetch("https://manufecture-website-server.onrender.com/products").then(
      (res) => res.json()
    )
  );

  console.log("Got all products.........", data);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {data?.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="bg-transparent group rounded-lg border p-3 md:p-4 lg:p-5 relative"
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
                  <Link className="my-2 md:my-4" href={`/products/${item._id}`}>View details</Link>
                </ButtonSmall>
              </div>
              <div
                className="group-hover:visible flex justify-center items-center w-10 h-10 rounded-full group-hover:bg-accent group-hover:shadow-lg transition-all ease-in-out duration-500 cursor-pointer absolute top-5 right-5">
                {wishlisted ? (
                  <AiOutlineHeart
                    className="text-transparent group-hover:text-secondary transition-all ease-in-out duration-500"
                    size={25}
                    onClick={() => setWishlisted(!wishlisted)}
                  />
                ) : (
                  <AiFillHeart
                    className="text-transparent group-hover:text-secondary transition-all ease-in-out duration-500"
                    size={25}
                    onClick={() => setWishlisted(true)}
                  />
                )}
              </div>
              <div className="flex justify-center items-center w-10 h-10 rounded-full bg-accent shadow-lg text-secondary transition-all ease-in-out duration-500 cursor-pointer absolute top-5 left-5">
                15%
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Fetchedproducts;
