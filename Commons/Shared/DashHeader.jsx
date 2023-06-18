"use client";

import LargeButton from "@/Commons/LargeButton";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPersonLinesFill, BsCart4, BsFillPersonFill } from "react-icons/bs";
import { FaChevronRight, FaList } from "react-icons/fa";
import { MdOutlineClose, MdOutlineDashboard } from "react-icons/md";

function DashHeader() {
  const [expandMenu, setExpandMenu] = useState(true);
  return (
    <div>
      <div className="bg-base-100 relative">
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
              Mahbub Noyon{" "}
              <BsFillPersonFill className="inline mr-2" size={20} />
            </h3>
          </div>
        </div>
        <div
          className={`bg-base-100 border hidden md:block w-full md:w-72 z-50 absolute top-0  ${
            !expandMenu ? "left-0" : "left-[-450px]"
          } transition-all ease-in-out duration-500`}
        >
          <div className="flex justify-between border-b items-center md:px-6 lg:px-8 py-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-neutral">
              Electro
            </h2>
            <MdOutlineClose
              className="cursor-pointer"
              onClick={() => setExpandMenu(!expandMenu)}
              size={20}
            />
          </div>
          <div className="flex flex-col justify-between min-h-screen">
            <ul className={`group md:px-6 lg:px-8 md:pt-4`}>
              <Link
                href={"/dashboard"}
                onClick={() => setExpandMenu(!expandMenu)}
              >
                <li className="py-1 my-2 pl-4 hover:bg-accent text-neutral rounded-full">
                  <MdOutlineDashboard className="inline mr-2" size={20} />
                  Dashboard
                </li>
              </Link>
               <Link
                href={"/dashboard/profile"}
                onClick={() => setExpandMenu(!expandMenu)}
              > 
                <li className="py-1 my-2 pl-4 hover:bg-accent text-neutral rounded-full">
                  <BsFillPersonFill className="inline mr-2" size={20} />
                  Profile
                </li>
              </Link>
              <Link
                href={"/dashboard/products"}
                onClick={() => setExpandMenu(!expandMenu)}
              >
                <li className="py-1 my-2 pl-4 hover:bg-accent text-neutral rounded-full">
                  <BsCart4 className="inline mr-2" size={20} />
                  Products
                </li>
              </Link>
              <Link
                href={"/dashboard/orders"}
                onClick={() => setExpandMenu(!expandMenu)}
              >
                <li className="py-1 my-2 pl-4 hover:bg-accent text-neutral rounded-full">
                  <FaList className="inline mr-2" size={20} />
                  Orders
                </li>
              </Link>
            </ul>
            <div className="pl-8 py-5 border-t">
              <LargeButton>
                <Link href={"/"} onClick={() => setExpandMenu(!expandMenu)}>
                  Logout
                </Link>
              </LargeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
