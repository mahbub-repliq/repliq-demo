"use client";

import LargeButton from "@/Commons/LargeButton";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPersonLinesFill, BsCart4, BsFillPersonFill } from "react-icons/bs";
import { FaChevronRight, FaList } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

function DashFooter() {
  return (
    <div className="bg-base-100">
      <div className="md:hidden w-full fixed bottom-0 bg-base-100 z-50 grid grid-cols-4 gap-3 items-center border-t px-4">
        <div>
          <Link href={"/dashboard"}>
            <div className="hover:bg-accent rounded-lg py-3 flex flex-col justify-center items-center">
              <MdOutlineDashboard className="" size={20} />
              <p className="font-semibold mt-2">Dashboard</p>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/dashboard/profile"}>
            <div className="hover:bg-accent rounded-lg py-3 flex flex-col justify-center items-center">
              <BsFillPersonFill className="" size={20} />
              <p className="font-semibold mt-2">Profile</p>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/dashboard/products"}>
            <div className="hover:bg-accent rounded-lg py-3 flex flex-col justify-center items-center">
              <BsCart4 className="" size={20} />
              <p className="font-semibold mt-2">Products</p>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/dashboard/orders"}>
            <div className="hover:bg-accent rounded-lg py-3 flex flex-col justify-center items-center">
              <FaList className="" size={20} />
              <p className="font-semibold mt-2">Orders</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashFooter;
