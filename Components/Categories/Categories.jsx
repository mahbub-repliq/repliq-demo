import { BiHeadphone } from "react-icons/bi";
import { MdSmartphone } from "react-icons/md";
import { MdVideogameAsset, MdOutlineComputer } from "react-icons/md";
import { SiEngadget } from "react-icons/si";
import { RxDividerVertical } from "react-icons/rx";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Category() {
  return (
    <div className="md:flex py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">
      <div className="basis-1/3 flex flex-col justify-between">
        <h3 className="text-center md:text-start text-xl md:text-2xl lg:text-4xl font-bold text-slate-800">
          Popular Categories
        </h3>
        <div className="hidden md:flex justify-start items-center">
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
      <div className="basis-2/3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-8 md:mt-0">
        <div className={`text-slate-800 rounded hover:bg-accent md:py-3`}>
          <div className="flex justify-center items-center mb-3">
            {" "}
            <BiHeadphone className="text-slate-800" size={45} />
          </div>
          <p className="text-center text-slate-800 font-semibold">
            {" "}
            Accessories{" "}
          </p>
        </div>
        <div className={`text-slate-800 rounded hover:bg-accent md:py-3`}>
          <div className="flex justify-center items-center mb-3">
            {" "}
            <MdSmartphone className="text-slate-800" size={45} />
          </div>
          <p className="text-center text-slate-800 font-semibold">
            {" "}
            Smartphones & Tablets{" "}
          </p>
        </div>
        <div className={`text-slate-800 rounded hover:bg-accent md:py-3`}>
          <div className="flex justify-center items-center mb-3">
            {" "}
            <MdOutlineComputer className="text-slate-800" size={45} />
          </div>
          <p className="text-center text-slate-800 font-semibold">
            {" "}
            Accessories{" "}
          </p>
        </div>
        <div className={`text-slate-800 rounded hover:bg-accent md:py-3`}>
          <div className="flex justify-center items-center mb-3">
            {" "}
            <SiEngadget className="text-slate-800" size={45} />
          </div>
          <p className="text-center text-slate-800 font-semibold"> Gadgets </p>
        </div>
        <div className={`text-slate-800 rounded hover:bg-accent md:py-3 hidden md:block`}>
          <div className="flex justify-center items-center mb-3">
            {" "}
            <MdVideogameAsset className="text-slate-800" size={45} />
          </div>
          <p className="text-center text-slate-800 font-semibold">
            {" "}
            Video Games{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Category;

const Categories = [
  {
    name: "Accessories",
    icon: "<BiHeadphone />",
  },
  {
    name: "Smartphones & Tablets",
    icon: "<MdSmartphone />",
  },
  {
    name: "Computers & Laptops",
    icon: "<FaComputer />",
  },
  {
    name: "Gadgets",
    icon: "<SiEngadget />",
  },
  {
    name: "Video Games",
    icon: "<MdVideogameAsset />",
  },
];
