import {
  AiFillPhone,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { BsPersonCircle, BsChevronDown, BsSearch } from "react-icons/bs";
function Header() {
  return (
    <>
      <div className="flex justify-between py-4 bg-[#FAFAFA] text-slate-900 px-4 md:px-8 lg:px-12 border-b">
        <div className="flex">
          <p className="px-2"> +38 068 005 3570</p>
          <p className="px-2"> fastsales@gmail.com</p>
        </div>
        <ul className="flex">
          <li className="px-2">English</li>
          <li className="px-2">USD</li>
          <li className="px-2">Register</li>
          <li className="px-2">SignIn</li>
        </ul>
      </div>
      <div>
        <div className="flex items-center gap-3 py-5 md:py-8 lg:py-12 bg-[#FFFFFF] text-slate-900 px-4 md:px-8 lg:px-12">
          <h1 className="basis-1/4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Brand
          </h1>
          <div>
            <ul className="flex items-center">
                <li className="px-2 text-lg md:text-xl">Home</li>
                <li className="px-2 text-lg md:text-xl">Products</li>
                <li className="px-2 text-lg md:text-xl">About</li>
                <li className="px-2 text-lg md:text-xl">Contacts</li>
            </ul>
          </div>
          <div className="basis-1/2 border rounded relative p-3">
            <div className="flex ">
              <input
                className="border-e pe-2 focus:outline-none"
                type="text"
                placeholder="Search for products..."
              />
              <p className="ps-2">
                All Categories <BsChevronDown className="inline" />
              </p>
            </div>
            <button className="absolute top-0 right-0 bg-blue-700 p-4">
              <BsSearch className="text-slate-100 cursor-pointer" />
            </button>
          </div>
          <div className="basis-1/4 flex justify-end items-center gap-3">
            <div className="relative ">
              <AiOutlineHeart size={50} />
              <span className="bg-blue-700 rounded-full text-white p-1 text-center absolute top-[-10px] right-0">10</span>
            </div>
            <div className="relative ">
              <AiOutlineShoppingCart size={50} />
              <span className="bg-blue-700 rounded-full text-white p-1 text-center absolute top-[-10px] right-0">10</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
