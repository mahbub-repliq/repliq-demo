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
import Fetchedproducts from '../../Commons/Fetchedproducts'

function Products() {
  const [activeTab, setActiveTab] = useState("0");

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
       <Fetchedproducts />
      </div>
    </div>
  );
}

export default Products;
