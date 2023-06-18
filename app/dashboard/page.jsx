"use client";

import LargeButton from "@/Commons/LargeButton";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPersonLinesFill, BsCart4, BsFillPersonFill } from "react-icons/bs";
import { FaChevronRight, FaList } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

function Dashboard() {
  const [expandMenu, setExpandMenu] = useState(true);
  
  return (
    <div className=" bg-base-100 relative">
      <div className="">
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold mb-4 md:mb-8 lg:mb-12">
          Dashboard
        </h3>
        <div className="grid grid-cols-2 gap-5">
          <div className="md:flex gap-4 items-center bg-primary p-4 md:p-6 rounded-lg shadow-lg">
            <div className="basis-1/2">
              <h2 className="text-base-100 font-semibold text-center md:text-start">
                Products
              </h2>
              <p className="text-base-100 text-center md:text-start">
                Total products in stock
              </p>
            </div>
            <div className="basis-1/2 flex justify-center">
              <h2 className="text-base-100 font-semibold text-3xl md:text-4xl lg:text-5xl">
                500
              </h2>
            </div>
          </div>
          <div className="md:flex gap-4 items-center bg-emerald-500 p-4 md:p-6 rounded-lg shadow-lg">
            <div className="basis-1/2">
              <h2 className="text-base-100 font-semibold text-center md:text-start">
                Orders
              </h2>
              <p className="text-base-100 text-center md:text-start">
                Total pending orders
              </p>
            </div>
            <div className="basis-1/2 flex justify-center">
              <h2 className="text-base-100 font-semibold text-3xl md:text-4xl lg:text-5xl">
                250
              </h2>
            </div>
          </div>
          <div className="md:flex gap-4 items-center bg-neutral p-4 md:p-6 rounded-lg shadow-lg">
            <div className="basis-1/2">
              <h2 className="text-base-100 font-semibold text-center md:text-start">
                Customers
              </h2>
              <p className="text-base-100 text-center md:text-start">
                Total customers
              </p>
            </div>
            <div className="basis-1/2 flex justify-center">
              <h2 className="text-base-100 font-semibold text-3xl md:text-4xl lg:text-5xl">
                100
              </h2>
            </div>
          </div>
          <div className="md:flex gap-4 items-center bg-secondary p-4 md:p-6 rounded-lg shadow-lg">
            <div className="basis-1/2">
              <h2 className="text-base-100 font-semibold text-center md:text-start">
                Rejected Orders
              </h2>
              <p className="text-base-100 text-center md:text-start">
                Total rejected orders
              </p>
            </div>
            <div className="basis-1/2 flex justify-center">
              <h2 className="text-base-100 font-semibold text-3xl md:text-4xl lg:text-5xl">
                50
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
