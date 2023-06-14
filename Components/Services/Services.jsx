import Image from "next/image";
import chart1 from "../../assets/images/icons/char_1.png";
import chart2 from "../../assets/images/icons/char_2.png";
import chart3 from "../../assets/images/icons/char_3.png";
import chart4 from "../../assets/images/icons/char_4.png";

function Services() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">
      <div className="flex gap-5 border p-5 shadow-xl">
        <Image width={40} height={40} src={chart1} alt="" />
        <div>
          <h3 className="font-bold text-slate-900">Free Delivery</h3>
          <p className="text-slate-600">from $50</p>
        </div>
      </div>
      <div className="flex gap-5 border p-5 shadow-xl">
        <Image width={40} height={40} src={chart2} alt="" />
        <div>
          <h3 className="font-bold text-slate-900">Free Delivery</h3>
          <p className="text-slate-600">from $50</p>
        </div>
      </div>
      <div className="flex gap-5 border p-5 shadow-xl">
        <Image width={40} height={40} src={chart3} alt="" />
        <div>
          <h3 className="font-bold text-slate-900">Free Delivery</h3>
          <p className="text-slate-600">from $50</p>
        </div>
      </div>
      <div className="flex gap-5 border p-5 shadow-xl">
        <Image width={40} height={40} src={chart4} alt="" />
        <div>
          <h3 className="font-bold text-slate-900">Free Delivery</h3>
          <p className="text-slate-600">from $50</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
