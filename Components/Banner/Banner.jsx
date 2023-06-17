import Image from "next/image";
import bannerImage from "@/assets/images/banner_product.png";
import LargeButton from "@/Commons/LargeButton";
function Banner() {
  return (
    <div className="pt-4 md:pt-20 lg:pt-28 flex justify-evenly items-center px-4 md:px-8 lg:px-12 bg-gradient-to-t from-[#CFE4EF] to-[#ffffff]">
      <div className="">
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#7599B2] pb-5 landing-loose font-bold">
          NEW ERA OF <span className="mt-1 md:mt-3 block">SMARTPHONES</span>
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl text-rose-700 font-bold">
          <span className="line-through text-neutral">$530</span> $460
        </p>
        <p className="text-slate-700 font-semibold">Apple Iphone 6s</p>
        <div className="my-4">
          <LargeButton>Shop Now</LargeButton>
        </div>
      </div>
      <div className="">
        <Image width="500" height="500" src={bannerImage} alt="" />
      </div>
    </div>
  );
}

export default Banner;
