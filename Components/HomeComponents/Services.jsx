
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { AiOutlineSync } from "react-icons/ai";

function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 md:pt-16 lg:pt-24 pb-4 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">
      <div className="flex justify-center items-center md:justify-start gap-5 rounded p-5 border">
        <TbTruckDelivery className="text-primary" size={50} />
        <div>
          <h3 className="font-bold text-slate-900">Free Delivery</h3>
          <p className="text-slate-600">from $50</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start gap-5 rounded p-5 border">
        <AiOutlineSync className="text-primary" size={50} />

        <div>
          <h3 className="font-bold text-slate-900">Free Delivery</h3>
          <p className="text-slate-600">from $50</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start gap-5 rounded p-5 border">
        <BiWallet className="text-primary" size={50} />

        <div>
          <h3 className="font-bold text-slate-900">Free Delivery</h3>
          <p className="text-slate-600">from $50</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start gap-5 rounded p-5 border">
        <MdOutlineLocalOffer className="text-primary" size={50} />
        <div>
          <h3 className="font-bold text-slate-900">Free Delivery</h3>
          <p className="text-slate-600">from $50</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
