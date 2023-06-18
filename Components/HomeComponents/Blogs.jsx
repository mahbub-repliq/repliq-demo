import Image from "next/image";
import { BiChevronsRight } from "react-icons/bi";
import blogImage1 from "../../assets/images/blog_1.jpg";
import blogImage2 from "../../assets/images/blog_2.jpg";
import blogImage3 from "../../assets/images/blog_3.jpg";
import LargeButton from "@/Commons/LargeButton";
import ButtonSmall from "@/Commons/ButtonSmall";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
function Blogs() {
  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-slate-800">
          Latest News
        </h2>
        <LargeButton>
          {" "}
          <Link href={"/blogs"}>View All</Link>{" "}
        </LargeButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {blogs.map((item, index) => (
          <div
            className="group flex rounded bg-base-100 border py-4"
            key={index}
          >
            <div className="flex basis-2/6">
              <Image
                className="transition ease-in-out  group-hover:-translate-y-1 group-hover:scale-100 duration-500"
                width={150}
                height={100}
                src={blogImage1}
                alt=""
              />
            </div>
            <div className="basis-4/6">
              <h3 className="text-slate-800 font-semibold text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-slate-500 mb-2">
                {item.author} | <span>{item.date} </span>
              </p>
              <p className="text-slate-800"> {item.text} </p>
              <div className="my-2 md:my-4">
                <ButtonSmall>
                  <Link href={`/blogs/${index + 1}`}>
                    View details{" "}
                    <BiChevronsRight className="inline" size={25} />
                  </Link>
                </ButtonSmall>
              </div>
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
    text: "Lorem ipsum dolor sit amet consectetur.",
    author: "Admin",
    date: "12 June 2023",
  },
  {
    image: `${blogImage2}`,
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur.",
    author: "Admin",
    date: "12 June 2023",
  },
  {
    image: `${blogImage3}`,
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet consectetur.",
    author: "Admin",
    date: "12 June 2023",
  },
];
