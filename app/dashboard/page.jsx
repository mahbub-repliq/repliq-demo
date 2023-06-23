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
    <div className=" relative">
      <div className="min-h-screen">
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold mb-4 md:mb-8 lg:mb-12">
          Dashboard
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {cards.map((item, index) => (
            <div
              key={index}
              className={`md:flex gap-4 items-center px-4 md:px-6 py-4 md:py-10 rounded-lg shadow`}
            style={{background: `${item.background}`}}>
              <div className="basis-1/2">
                <h2 className="text-neutral font-semibold text-center md:text-start capitalize">
                  {item.title}
                </h2>
                <p className="text-neutral text-center md:text-start">
                  {item.subTitle}
                </p>
              </div>
              <div className="basis-1/2 flex justify-center">
                <h2 className="text-neutral font-semibold text-3xl md:text-4xl lg:text-5xl">
                  {item.value}
                </h2>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;

const cards = [
  {
    title: "products",
    subTitle: "Total products in stock",
    value: "500",
    background: "#86efac",
  },
  {
    title: "orders",
    subTitle: "Total orders",
    value: "400",
    background: "#6ee7b7",
  },
  {
    title: "customers",
    subTitle: "Total customers",
    value: "100",
    background: "#5eead4",
  },
  {
    title: "pending delivery",
    subTitle: "Total pending orders",
    value: "300",
    background: "#67e8f9",
  },
  {
    title: "products",
    subTitle: "Total products in stock",
    value: "500",
    background: "#d8b4fe",
  },
  {
    title: "rejected orders",
    subTitle: "Total rejected orders",
    value: "500",
    background: "#fda4af",
  },
];
