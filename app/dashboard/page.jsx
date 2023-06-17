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
  const [expandMenu, setExpandMenu] = useState(false);
  return (
    <div className=" bg-base-100 relative">
      <div className="hidden border-b py-3 px-4 md:px-8 lg:px-12 md:flex justify-between items-center">
        <div className="flex items-center gap-5">
          <AiOutlineMenu
            className="inline cursor-pointer"
            size={30}
            onClick={() => setExpandMenu(!expandMenu)}
          />
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-neutral">
            Electro
          </h2>
        </div>
        <div className="border rounded p-3">
          <h3 className="text-lg font-semibold">
            Mahbub Noyon <BsFillPersonFill className="inline mr-2" size={20} />
          </h3>
        </div>
      </div>
      <div className="">
        <div className=" py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12">
          <h3 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold mb-3">
            Dashboard
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-primary p-4 md:p-6 rounded-lg shadow-lg">
              <h2 className="text-base-100 text-center font-semibold">
                Products
              </h2>
              <h2 className="text-base-100 text-center font-semibold text-2xl">
                500
              </h2>
            </div>
            <div className="bg-emerald-500 p-4 md:p-6 rounded-lg shadow-lg">
              <h2 className="text-base-100 text-center font-semibold">
                Orders
              </h2>
              <h2 className="text-base-100 text-center font-semibold text-2xl">
                500
              </h2>
            </div>
            <div className="bg-neutral p-4 md:p-6 rounded-lg shadow-lg">
              <h2 className="text-base-100 text-center font-semibold">
                Customers
              </h2>
              <h2 className="text-base-100 text-center font-semibold text-2xl">
                500
              </h2>
            </div>
            <div className="bg-secondary p-4 md:p-6 rounded-lg shadow-lg">
              <h2 className="text-base-100 text-center font-semibold">
                Rejected Orders
              </h2>
              <h2 className="text-base-100 text-center font-semibold text-2xl">
                500
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className={`bg-base-100 border w-full md:w-72 absolute min-h-screen top-0  ${
            !expandMenu ? "left-0" : "left-[-450px]"
          } transition-all ease-in-out duration-500`}
        >
          <div className="flex justify-between border-b items-center md:px-6 lg:px-8 py-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-neutral">
              Electro
            </h2>
            <RxCross1
              className="cursor-pointer"
              onClick={() => setExpandMenu(!expandMenu)}
              size={20}
            />
          </div>
          <ul className={`group md:px-6 lg:px-8 md:pt-4`}>
            <li className="py-1 my-2 hover:bg-accent text-neutral rounded-full">
              <Link href={"/dashboard"}>
                <MdOutlineDashboard className="inline mr-2" size={20} />
                Dashboard
              </Link>
            </li>
            <li className="py-1 my-2 hover:bg-accent text-neutral rounded-full">
              <Link href={"/dashboard/customers"}>
                <BsFillPersonFill className="inline mr-2" size={20} />
                Profile
              </Link>
            </li>
            <li className="py-1 my-2 hover:bg-accent text-neutral rounded-full">
              <Link href={"/dashboard/products"}>
                <BsCart4 className="inline mr-2" size={20} />
                Products
              </Link>
            </li>
            <li className="py-1 my-2 hover:bg-accent text-neutral rounded-full">
              <Link href={"/dashboard/orders"}>
                <FaList className="inline mr-2" size={20} />
                Orders
              </Link>
            </li>
          </ul>
          <div className="flex flex-col justify-end ">
            <div className="min-h-screen border-b"></div>
            <div className="pl-8">
               <LargeButton>
                <Link href={"/"}>Logout</Link>
              </LargeButton>
            </div>
          </div>
        </div>

        {/* footer menu */}
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
            <Link href={"/dashboard"}>
              <div className="hover:bg-accent rounded-lg py-3 flex flex-col justify-center items-center">
                <BsFillPersonFill className="" size={20} />
                <p className="font-semibold mt-2">Profile</p>
              </div>
            </Link>
          </div>
          <div>
            <Link href={"/dashboard/customers"}>
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
    </div>
  );
}

export default Dashboard;
