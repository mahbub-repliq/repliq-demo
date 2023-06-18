import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import brands1 from "../../assets/images/brands/brands_1.jpg";
import brands2 from "../../assets/images/brands/brands_2.jpg";
import brands3 from "../../assets/images/brands/brands_3.jpg";
import brands4 from "../../assets/images/brands/brands_4.jpg";
import brands5 from "../../assets/images/brands/brands_5.jpg";
import brands6 from "../../assets/images/brands/brands_6.jpg";
import brands7 from "../../assets/images/brands/brands_7.jpg";
import brands8 from "../../assets/images/brands/brands_8.jpg";
function Partners() {
  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">
      <div className="flex justify-between items-center border p-2 md:p-4 lg:p-6">
        <div className="basis-1/12">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-accent shadow-lg cursor-pointer">
            <IoIosArrowBack
              className="text-neutral hover:text-secondary transition-all ease-in-out duration-500"
              size={25}
            />
          </div>
        </div>
        <div className="basis-10/12 grid grid-cols-3 md:grid-cols-8 justify-between gap-5 p-5 md:p-0 items-center">
          <Image width={65} height={65} src={brands1} alt="" />
          <Image width={65} height={65} src={brands2} alt="" />
          <Image width={65} height={65} src={brands3} alt="" />
          <Image
            className="hidden md:block"
            width={65}
            height={65}
            src={brands4}
            alt=""
          />
          <Image
            className="hidden md:block"
            width={65}
            height={65}
            src={brands5}
            alt=""
          />
          <Image
            className="hidden md:block"
            width={65}
            height={65}
            src={brands6}
            alt=""
          />
          <Image
            className="hidden md:block"
            width={65}
            height={65}
            src={brands7}
            alt=""
          />
          <Image
            className="hidden md:block"
            width={65}
            height={65}
            src={brands8}
            alt=""
          />
        </div>
        <div className="basis-1/12 flex justify-end">
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-accent shadow-lg cursor-pointer">
            <IoIosArrowForward
              className="text-neutral hover:text-secondary transition-all ease-in-out duration-500"
              size={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
