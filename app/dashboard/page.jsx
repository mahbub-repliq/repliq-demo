"use client"

import Link from "next/link";
import { useState } from "react";
import { BsPersonLinesFill, BsCart4 } from "react-icons/bs";
import { FaChevronRight, FaList } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

function Dashboard() {
    const [expandMenu, setExpandMenu] = useState(false)
  return (
    <div className="py-4 px-4 md:px-8 lg:px-12 bg-base-100 relative">
      <div className="">
        <div className="">
            <div className="flex justify-center items-center bg-accent w-12 h-16 shadow-lg absolute top-[-15px] md:top-[-43px] left-0 cursor-pointer transition-all ease-in-out duration-500" onClick={() => setExpandMenu(!expandMenu)}>
                <FaChevronRight className="hover:text-secondary" size={25} />
            </div>
            <ul className={`px-4 md:px-6 lg:px-8 pt-6 md:pt-8 lg:pt-10 bg-accent w-64 absolute min-h-screen top-[-15px] md:top-[-43px]  ${!expandMenu ? 'left-0' : 'left-[-300px]'} transition-all ease-in-out duration-500`}>
                <li className="absolute right-3 top-2 cursor-pointer" onClick={() => setExpandMenu(!expandMenu)}><RxCross1 size={20} /></li>
                <li className="py-1 my-2 pl-4 bg-neutral text-base-100 rounded-full">
                    <Link href={'/dashboard'}><MdOutlineDashboard className="inline mr-2" size={20} />Dashboard</Link>
                </li>
                <li className="py-1 my-2 pl-4 bg-neutral text-base-100 rounded-full">
                    <Link href={'/dashboard/customers'}><BsPersonLinesFill className="inline mr-2" size={20} />Customers</Link>
                </li>
                <li className="py-1 my-2 pl-4 bg-neutral text-base-100 rounded-full">
                    <Link href={'/dashboard/products'}><BsCart4 className="inline mr-2" size={20} />Products</Link>
                </li>
                <li className="py-1 my-2 pl-4 bg-neutral text-base-100 rounded-full">
                    <Link href={'/dashboard/orders'}><FaList className="inline mr-2" size={20} />Orders</Link>
                </li>
            </ul>
        </div>
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold">Dashboard</h3>
      </div>
      <div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Dashboard;
