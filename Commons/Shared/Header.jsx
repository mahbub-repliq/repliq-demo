import {
  AiFillPhone,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { BsPersonCircle, BsChevronDown, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

import { FaPhoneAlt, FaRegHeart } from "react-icons/fa";
import {
  MdClose,
  MdLocationOn,
  MdMenu,
  MdOutlineDashboard,
} from "react-icons/md";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import ButtonSmall from "../ButtonSmall";

function Header() {
  const [openMenu, setOpenMenu] = useState(true);

  const menuItems = [
    {
      item: "home",
      path: "/",
    },
    {
      item: "products",
      path: "/products",
    },
    {
      item: "blogs",
      path: "/blogs",
    },
    {
      item: "dashboard",
      path: "/dashboard",
    },
  ];
  return (
    <div>
      <div className=" z-50 relative">
        <div className="hidden text-base-100 bg-[#1E1F29] py-2 px-5 md:px-10 md:flex justify-between">
          <div className=" ">
            <ul className="md:flex">
              <li className="md:font-semibold  mr-2">
                <a className="flex items-center" href="">
                  <FaPhoneAlt className="mr-1 text-secondary" /> +021-95-51-84
                </a>
              </li>
              <li className="md:font-semibold  mr-2">
                <a className="flex items-center" href="">
                  <FaEnvelope className="mr-1 text-secondary" /> email@email.com
                </a>
              </li>
              <li className="md:font-semibold  mr-2">
                <a className="flex items-center" href="">
                  <MdLocationOn className="mr-1 text-secondary" /> 1734
                  Stonecoal Road
                </a>
              </li>
            </ul>
          </div>
          <div className="md:flex">
            <p className="md:font-semibold  mr-2 flex items-center">
              <IoLogoUsd className="text-secondary" />
              BDT
            </p>
            <Link
              className="md:font-semibold  mr-2 flex items-center"
              href="/login"
            >
              {" "}
              <FiLogIn className="mr-1 text-secondary" />
              Sign In
            </Link>
          </div>
        </div>
        <div className="bg-[#15161D] py-3 px-5 md:px-10 md:flex flex-row justify-between items-center">
          <div className="basis-1/5 flex justify-between lg:justify-start pb-5 lg:pb-0">
            <Link
              href="/"
              className="text-4xl md:text-6xl font-bold text-base-100"
            >
              Electro
            </Link>
            <div onClick={() => setOpenMenu(!openMenu)} className="md:hidden">
              <MdMenu className="text-base-100" size={30} />
            </div>
          </div>
          <div className="basis-3/5 flex justify-between items-center gap-4">
            <div
              className={`w-full bg-base-100 md:bg-transparent md:text-base-100 shadow-md absolute transition-all duration-500 ease-in md:flex justify-center z-50 right-0 md:top-auto ${
                openMenu ? "top-[0px]" : "top-[-300px]"
              }`}
            >
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="flex justify-end md:hidden pr-3"
              >
                <MdClose size={30} />
              </div>
              {menuItems.map((menu, index) => (
                <Link
                  key={index}
                  onClick={() => setOpenMenu(!openMenu)}
                  href={`${menu.path}`}
                  className="block md:inline-block mx-5 text-lg capitalize pb-2"
                >
                  {menu.item}
                </Link>
              ))}
              <Link
                onClick={() => setOpenMenu(!openMenu)}
                href={`/login`}
                className="block md:hidden mx-5 text-lg capitalize pb-2"
              >
                Sign In
              </Link>
            </div>
          </div>
          <div className="basis-1/5 flex justify-center md:justify-end gap-5 text-base-100">
            <div className="cursor-pointer relative">
              <div className="flex justify-center">
                <FaRegHeart className="mx-auto text-base-100" size={30} />
              </div>
              <p>Your Wishlist</p>
              <div className="bg-primary flex justify-center items-center w-6 h-6 rounded-full text-white text-center absolute top-[-10px] right-5">
                <span className="text-sm">10</span>
              </div>
            </div>
            <div className="cursor-pointer relative">
              <div className="flex justify-center">
                <AiOutlineShoppingCart
                  className="mx-auto text-base-100"
                  size={30}
                />
              </div>
              <p>Your Cart</p>
              <div className="bg-primary flex justify-center items-center w-6 h-6 rounded-full text-white text-center absolute top-[-10px] right-2">
                <span className="text-sm">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
