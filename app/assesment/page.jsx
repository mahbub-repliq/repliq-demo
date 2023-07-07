"use client";

import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

function Assesment() {
  const [activeTab, setActiveTab] = useState("all products");
  const [selectedValue, setSelectedValue] = useState("");
  const [statusValue, setStatusValue] = useState("all products");
  const [filterProduct, setFilterProduct] = useState([]);
  const [queryProduct, setqueryProduct] = useState([]);

  const status = [
    "new arrival",
    "summer sale",
    "sold",
    "out of stock",
    "upcoming",
  ];

  const { isLoading, error, data } = useQuery({
    queryKey: ["fakeProducts"],
    queryFn: async () =>
      await fetch("./fakeData.json").then((res) => res.json()),
  });

  const findStatus = status.find((item, index) => item === activeTab);

  useEffect(() => {
    if (!findStatus) {
      setFilterProduct(data);
    } else {
      setFilterProduct(data?.filter((item) => item.status === findStatus));
    }
  }, [findStatus, data]);

  useEffect(() => {
    if (!selectedValue) {
      setqueryProduct(data);
    } else {
      setqueryProduct(data?.filter((item) => item.status == selectedValue));
    }
  }, [data, selectedValue]);

  return (
    <div className="pb-4 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12">
      <div>
        <div className="">
          <ul className="hidden lg:flex gap-4 text-sm md:text-lg mb-5">
            <li
              onClick={() => {
                setFilterProduct(data);
                setActiveTab("all products");
              }}
              className={`pb-4 border-b-2 lg:mr-5 capitalize ${
                activeTab == "all products"
                  ? "border-primary"
                  : "border-transparent"
              }
             hover:border-primary cursor-pointer`}
            >
              All Products
            </li>
            {status.map((item, index) => (
              <>
                <li
                key={index}
                  onClick={() => setActiveTab(item)}
                  className={`pb-4 border-b-2 lg:mr-5 capitalize 
                  ${activeTab == item ? "border-primary" : "border-transparent"}
                   hover:border-primary cursor-pointer`}
                >
                  {item}
                </li>
              </>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            onClick={() => setqueryProduct(data)}
            className="bg-base-100 border border-gray-300 text-neutral text-sm rounded-md focus:ring-primary focus:border-primary block w-full md:w-72 px-3 py-2 md:py-2.5 mt-4 md:mt-0"
          >
            <option
              defaultValue={"All Products"}
            >
              All Products
            </option>
            {status.map((item, index) => (
              <>
                <option key={index} className="capitalize" value={item}>
                  {" "}
                  {item}{" "}
                </option>
              </>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden lg:block">
        <table className="border border-gray-200 w-full rounded-md">
          <thead className="">
            <tr className="bg-accent">
              <th className="hidden md:block pl-4 py-5 text-left text-neutral">
                Product
              </th>
              <th className="px-2 py-5 text-left text-neutral">Name</th>
              <th className="px-2 py-5 text-left text-neutral">Price</th>
              <th className="px-2 py-5 text-left text-neutral">Category</th>
              <th className="px-2 py-5 text-left text-neutral">Status</th>
              <th className="px-2 py-5 text-left text-neutral">Action</th>
            </tr>
          </thead>
          <tbody>
            {filterProduct?.map((item, index) => (
              <tr key={index} className="divide-y bg-base-100 border-t border-gray-200">
                <td className="hidden md:block pl-4 py-5">
                  {" "}
                  <img className="w-24 h-24 rounded " src={item.image} alt="" />
                </td>
                <td className="px-2 py-5 ">
                  {item.name}
                </td>
                <td className="px-2 py-5 ">
                  {item.price}
                </td>
                <td className="px-2 py-5 ">
                  {" "}
                  {item.category}{" "}
                </td>
                <td className="px-2 py-5 ">
                  <select
                    value={activeTab}
                    onChange={(e) => setStatusValue(e.target.value)}
                    className="bg-base-100 border border-gray-300 text-neutral text-sm rounded-md focus:ring-primary focus:border-primary block w-32 px-3 py-2 md:py-2.5 mt-4 md:mt-0"
                  >
                    <option
                      defaultValue={activeTab.toUpperCase()}
                      onClick={() => setqueryProduct(data)}
                    >
                      {activeTab}
                    </option>
                    {status.map((item, index) => (
                      <>
                        <option key={index} className="" value={statusValue}>
                          {item}
                        </option>
                      </>
                    ))}
                  </select>
                </td>
                <td className=" px-2 py-5 ">
                  <div className="flex justify-center md:justify-start items-center gap-10 md:gap-3">
                    <button className="border border-primary hover:bg-primary text-primary hover:text-base-100 px-3 py-2 flex justify-center items-center gap-2 rounded-md transition-all ease-in-out duration-500 uppercase text-xs">
                      <BiEdit className="" size={20} />
                      Edit
                    </button>
                    <button className="border border-rose-500 hover:bg-rose-500 text-rose-500 hover:text-base-100 px-3 py-2 flex justify-center items-center gap-2 rounded-md transition-all ease-in-out duration-500 uppercase text-xs">
                      <BiTrash className="" size={20} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4 lg:hidden">
        {queryProduct?.map((item, index) => (
          <div
            className=" bg-base-100 border border-gray-200 rounded-md"
            key={index}
          >
            <div className="flex justify-between gap-3 p-5">
              <div className="basis-2/3">
                <p className="text-neutral font-semibold md:hidden">
                  {" "}
                  {item.name}{" "}
                </p>
                <p className="text-neutral font-semibold hidden md:block ">
                  {" "}
                  {item.name.slice(0, 20)}..{" "}
                </p>
                <p className="font-medium text-gray-400 py-1">
                  Price:{" "}
                  <span className="text-secondary">{item.price} Tk.</span>{" "}
                </p>
                <p className="font-medium text-gray-400">
                  Quantity:{" "}
                  <span className="text-secondary"> {item.category} </span>{" "}
                </p>
              </div>
              <div className="flex justify-center items-center basis-1/3">
                <img className="w-24 h-24 rounded " src={item.image} alt="" />
              </div>
            </div>
            <div className="px-5 pb-5">
              <select
                value={statusValue}
                onChange={(e) => setStatusValue(e.target.value)}
                className="bg-base-100 border border-gray-300 text-neutral text-sm rounded-md focus:border-primary block w-full px-3 py-2 md:py-2.5"
              >
                <option
                  defaultValue={selectedValue}
                  // onClick={() => setqueryProduct(data)}
                >
                  {selectedValue ? selectedValue : "all status"}
                </option>
                {status.map((item, index) => (
                  <>
                    <option key={index} className="" value={""}>
                      {item}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5 px-5 pb-5">
              <button className="border border-gray-200 rounded-md text-primary flex justify-center items-center gap-2 uppercase text-xs py-3">
                <BiEdit className="" size={20} />
                Edit
              </button>

              <button className="border border-gray-200 rounded-md text-rose-500 flex justify-center items-center gap-2 uppercase text-xs py-3">
                <BiTrash className="" size={20} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assesment;
