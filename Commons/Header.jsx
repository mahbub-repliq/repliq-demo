import {
  AiFillPhone,
  AiOutlineShoppingCart,
  AiOutlineHeart,
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

function Header() {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event) => {
    setOpenCart(event.currentTarget);
  };

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
      item: "contact",
      path: "/contact",
    },
    {
      item: "about",
      path: "/about",
    },
  ];
  return (
    <div>
      <div className=" z-50 relative">
        <div className="text-base-100 bg-[#1E1F29] py-2 px-5 md:px-10 flex justify-between">
          <div className=" ">
            <ul className="md:flex">
              <li className="md:font-semibold hover:text-primary mr-2">
                <a className="flex items-center" href="">
                  <FaPhoneAlt className="mr-1 text-secondary" /> +021-95-51-84
                </a>
              </li>
              <li className="md:font-semibold hover:text-primary mr-2">
                <a className="flex items-center" href="">
                  <FaEnvelope className="mr-1 text-secondary" /> email@email.com
                </a>
              </li>
              <li className="md:font-semibold hover:text-primary mr-2">
                <a className="flex items-center" href="">
                  <MdLocationOn className="mr-1 text-secondary" /> 1734
                  Stonecoal Road
                </a>
              </li>
            </ul>
          </div>
          <div className="md:flex">
            <p className="md:font-semibold hover:text-primary mr-2 flex items-center">
              <IoLogoUsd className="text-secondary" />
              BDT
            </p>
            <Link
              className="md:font-semibold hover:text-primary mr-2 flex items-center"
              href="/signin"
            >
              {" "}
              <FiLogIn className="mr-1 text-secondary" />
              Sign In
            </Link>
          </div>
        </div>
        <div className="bg-[#15161D] py-3 px-5 md:px-10 md:flex flex-row justify-between items-center">
          <div className="basis-1/4 flex justify-between lg:justify-start pb-5 lg:pb-0">
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
          <div className="basis-2/4 lg:flex justify-between bg-base-100 rounded-full py-1 px-3 hidden">
            <div className="">
              <select className="focus:outline-none" name="" id="">
                <option value="All Category" selected>
                  All Category
                </option>
                <option value="Laptop">Accessories</option>
                <option value="Smartphone">Smartphones & Tablets</option>
                <option value="Camera">Computer & Laptops</option>
                <option value="Accessories">Gadgets</option>
                <option value="Accessories">Videi Games</option>
              </select>
            </div>
            <input className="w-full pl-2" type="search" name="" id="" />
            <button
              className="px-3 py-1 rounded-full text-base-100 bg-primary hover:bg-secondary transition-all ease-in-out duration-500"
            >
              Search
            </button>
          </div>
          <div className="basis-1/4 flex justify-evenly text-base-100">
            <div className="cursor-pointer relative">
              <div className="flex justify-center">
                <FaRegHeart className="mx-auto text-secondary" size={30} />
              </div>
              <p>Your Wishlist</p>
              <div className="bg-primary flex justify-center items-center w-6 h-6 rounded-full text-white text-center absolute top-[-10px] right-5">
                <span className="text-sm">10</span>
              </div>
            </div>
            <div className="cursor-pointer relative">
              <div className="flex justify-center">
                <AiOutlineShoppingCart
                  className="mx-auto text-secondary"
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
        <div
          className={`w-64 md:w-full bg-base-100 py-4 shadow-md absolute transition-all duration-500 ease-in md:md:flex justify-center md:top-auto ${
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
              className="block md:inline-block mx-5 text-lg font-semibold capitalize pb-2"
            >
              {menu.item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
