"use client";

import React from "react";
import LargeButton from "@/Commons/LargeButton";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ButtonSmall from "@/Commons/ButtonSmall";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Loader from "@/Commons/Loader";
import useMultipleDataFetch from "@/libs/useMultipleDataFetch";

function Products() {
  const [activeTab, setActiveTab] = useState("0");
  const [wishlisted, setWishlisted] = useState(true);
  const [products, posts, isloadingProducts, isloadingPosts] = useMultipleDataFetch()

  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">
      <div className="flex justify-between gap-3">
        <div className="flex flex-col justify-between">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-slate-800">
            Featured Products
          </h2>
          <ul className="hidden md:flex gap-4 text-sm md:text-lg">
            <li
              onClick={() => setActiveTab("0")}
              className={`pb-4 border-b-2 ${
                activeTab == 0 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Smartphones & Tablets
            </li>
            <li
              onClick={() => setActiveTab("1")}
              className={`pb-4 border-b-2 ${
                activeTab == 1 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Computers & Laptops
            </li>
            <li
              onClick={() => setActiveTab("2")}
              className={`pb-4 border-b-2 ${
                activeTab == 2 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Gadgets
            </li>
            <li
              onClick={() => setActiveTab("3")}
              className={`pb-4 border-b-2 ${
                activeTab == 3 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Video Games
            </li>
            <li
              onClick={() => setActiveTab("4")}
              className={`pb-4 border-b-2 ${
                activeTab == 4 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Accessories
            </li>
          </ul>
        </div>
        <div className="">
          <div className="">
            <Link href={'/products'}></Link>
            <LargeButton>View All</LargeButton>
          </div>
          <div className="hidden md:flex justify-start items-center mt-5">
            <div className=" col-span-1 flex justify-center items-center w-10 h-10 rounded-full bg-accent shadow-lg cursor-pointer">
              {" "}
              <IoIosArrowBack
                className="text-neutral hover:text-secondary transition duration-500 ease-in-out"
                size={30}
              />
            </div>
            <RxDividerVertical className="text-accent " size={40} />
            <div className=" col-span-1 flex justify-center items-center w-10 h-10 rounded-full bg-accent shadow-lg cursor-pointer">
              {" "}
              <IoIosArrowForward
                className="text-neutral hover:text-secondary transition duration-500 ease-in-out"
                size={30}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        {isloadingProducts ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {products?.slice(0, 4).map((item, index) => (
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
