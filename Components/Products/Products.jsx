"use client";

import React from "react";
import LargeButton from "@/Commons/LargeButton";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useQuery } from "react-query";
import ButtonSmall from "@/Commons/ButtonSmall";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

function Products() {
  const [activeTab, setActiveTab] = useState("0");
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://manufecture-website-server.onrender.com/products").then(
      (res) => res.json()
    )
  );

  console.log("Got all products.........", data);

  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">
      <div className="md:flex justify-between gap-3 border-b">
        <div className="flex flex-col justify-between">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-slate-800">
            Featured Products
          </h2>
          <ul className="hidden md:flex gap-4 text-sm md:text-lg">
            <li
              onClick={() => setActiveTab("0")}
              className={`pb-5 border-b-2 ${
                activeTab == 0 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Smartphones & Tablets
            </li>
            <li
              onClick={() => setActiveTab("1")}
              className={`pb-5 border-b-2 ${
                activeTab == 1 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Computers & Laptops
            </li>
            <li
              onClick={() => setActiveTab("2")}
              className={`pb-5 border-b-2 ${
                activeTab == 2 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Gadgets
            </li>
            <li
              onClick={() => setActiveTab("3")}
              className={`pb-5 border-b-2 ${
                activeTab == 3 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Video Games
            </li>
            <li
              onClick={() => setActiveTab("4")}
              className={`pb-5 border-b-2 ${
                activeTab == 4 ? "border-primary" : "border-transparent"
              } hover:border-primary cursor-pointer`}
            >
              Accessories
            </li>
          </ul>
        </div>
        <div className="pb-5">
          <LargeButton>View All</LargeButton>
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {data?.slice(0, 4).map((item, index) => (
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
    </div>
  );
}

export default Products;
