import Image from "next/image";
import {BiChevronsRight} from 'react-icons/bi'
import blogImage1 from "../../assets/images/blog_1.jpg";
import blogImage2 from "../../assets/images/blog_2.jpg";
import blogImage3 from "../../assets/images/blog_3.jpg";
function Blogs() {
  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">
      <div className="flex justify-between items-center border-b pb-5">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-slate-800">
          Latest News
        </h2>
        <button className="px-5 py-2 bg-blue-700 font-semibold rounded mt-5">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-5">
        {blogs.map((item, index) => (
          <div className="flex gap-1 " key={index}>
            <div className="flex justify-center items-center">
              <Image width={200} height={200} src={blogImage1} />
            </div> []
            <div>
              <h3 className="text-slate-800 font-semibold text-lg mb-1"> {item.title} </h3>
              <p className="text-slate-500 mb-2">
                Author: {item.author} | <span> Date: {item.date} </span>
              </p>
              <p className="text-slate-800"> {item.text} </p>
              <button className='text-xs px-3 py-1 bg-blue-700 font-semibold rounded mt-5'>View Details <BiChevronsRight className="inline" size={25} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;

const blogs = [
  {
    image: `${blogImage1}`,
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Admin",
    date: "12 June 2023",
  },
  {
    image: `${blogImage2}`,
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Admin",
    date: "12 June 2023",
  },
  {
    image: `${blogImage3}`,
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "Admin",
    date: "12 June 2023",
  },
];
