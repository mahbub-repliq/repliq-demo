"use client";

import { TbCurrencyTaka } from "react-icons/tb";
import Link from "next/link";
import ButtonSmall from "@/Commons/ButtonSmall";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import Loader from "@/Commons/Loader";
import useDataFetch from "@/libs/useDataFetch";
import { useState, useEffect } from "react";
import PageTitle from "@/Commons/PageTitle";
import useMultipleDataFetch from '@/libs/useMultipleDataFetch'

function Products() {
  const [wishlisted, setWishlisted] = useState(true);
  const [products, posts, isloadingProducts, isloadingPosts] = useMultipleDataFetch()

  return (
    <div className=" pb-4 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <PageTitle>All Products</PageTitle>
      <div>
        {isloadingProducts ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {products?.map((item, index) => (
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
                {/* <p> {item.rating} </p> */}
                <h3 className="text-md text-left mt-3">
                  {" "}
                  {item?.model?.slice(0, 30)}..{" "}
                </h3>
                <div className="flex items-end gap-3">
                  <div>
                    <div>
                      <BsFillStarFill
                        className={`inline mr-1 text-yellow-400 `}
                      />
                      <BsFillStarFill
                        className={`inline mr-1 text-yellow-400 `}
                      />
                      <BsFillStarFill
                        className={`inline mr-1 text-yellow-400 `}
                      />
                      <BsFillStarFill
                        className={`inline mr-1 text-yellow-400 `}
                      />
                      <BsFillStarFill
                        className={`inline mr-1 text-yellow-400 `}
                      />
                    </div>
                    <h3 className="basis-1/2 md:text-lg lg:text-xl text-secondary text-left">
                      {item.price}{" "}
                      <TbCurrencyTaka className="inline" size={20} />
                    </h3>
                  </div>
                  <div className="basis-1/2">
                    <ButtonSmall>
                      <Link
                        className="my-2 md:my-4"
                        href={`/products/${item._id}`}
                      >
                        View details
                      </Link>
                    </ButtonSmall>
                  </div>
                </div>
                <div className="group-hover:visible flex justify-center items-center w-10 h-10 rounded-full group-hover:bg-accent group-hover:shadow-lg transition-all ease-in-out duration-500 cursor-pointer absolute top-5 right-5">
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
    </div>
  );
}

export default Products;
