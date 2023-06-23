"use client";

import ButtonSmall from "@/Commons/ButtonSmall";
import Modal from "@/Commons/Modal";
import PageTitle from "@/Commons/PageTitle";
import Link from "next/link";
import React from "react";

function Orders() {
  return (
    <div className="relative">
      <PageTitle>Orders</PageTitle>

      <div className="hidden lg:block">
        <table className=" border-collapse border rounded border-accent w-full">
          <thead className="">
            <tr className="bg-accent rounded">
              <th className="hidden md:block px-2 py-5 text-left text-neutral">
                Product
              </th>
              <th className="border-y border-accent px-2 py-5 text-left text-neutral">
                Name
              </th>
              <th className="border-y border-accent px-2 py-5 text-left text-neutral">
                Customer
              </th>
              <th className="border-y border-accent px-2 py-5 text-left text-neutral">
                Email
              </th>
              <th className="border-y border-accent px-2 py-5 text-left text-neutral">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index} className="border border-accent bg-base-100">
                <td className="hidden md:block px-2 py-5">
                  {" "}
                  <div className="flex justify-center items-center">
                    <img
                      className="w-24 h-24 rounded "
                      src={item?.image}
                      alt=""
                    />
                  </div>{" "}
                </td>
                <td className="border-y border-accent px-2 py-5">
                  {item.product}
                </td>
                <td className="border-y border-accent px-2 py-5">
                  {item.name}
                </td>
                <td className="group border-y border-accent px-2 py-5">
                  {item.email}
                </td>
                <td className="border-y border-accent px-2 py-5">
                  <div className="flex justify-start">
                    <Link
                      href={`/dashboard/orders/${item.id}`}
                      className="flex justify-center items-center"
                    >
                      {/* <button className="bg-primary hover:bg-secondary text-base-100 rounded-md px-3 py-1">Details</button> */}
                      <ButtonSmall>Details</ButtonSmall>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-5 lg:hidden">
        {orders.map((item, index) => (
          <div
            key={index}
            className="bg-base-100 border border-gray-200 rounded-md"
          >
            <div className="flex justify-between gap-3 p-5">
              <div className="basis-2/3">
                <p className="text-neutral font-semibold"> {item.product} </p>
                <p className="font-medium text-gray-400 py-1">
                  name: <span className="text-secondary">{item.name}</span>{" "}
                </p>
                <p className="font-medium text-gray-400">
                  Email: <span className="text-secondary">{item.email}</span>{" "}
                </p>
                <div className="flex justify-start pt-2">
                  <Link
                    href={`/dashboard/orders/${item.id}`}
                    className="flex justify-center items-center"
                  >
                    {/* <button className="bg-primary hover:bg-secondary text-base-100 rounded-md px-3 py-1">Details</button> */}
                    <ButtonSmall>Details</ButtonSmall>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center basis-1/3">
                <img className="w-24 h-24 rounded " src={item.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

const orders = [
  {
    id: 1,
    product: "AMD Ryzen 5 5600X Gaming PC",
    name: "Person",
    email: "name@gmail.com",
    quantity: "10",
    date: "12 June 2023",
    address: "dhaka",
    payment: "home delivery",
    image: "https://i.ibb.co/0sbcGXN/8.webp",
  },
  {
    id: 2,
    product: "14 inch Win 11 brand new notebook",
    name: "Person 2",
    email: "name2@gmail.com",
    quantity: "10",
    date: "17 June 2023",
    address: "chittagong",
    payment: "home delivery",
    image: "https://i.ibb.co/kHDfndn/10.webp",
  },
  {
    id: 3,
    product: "14 inch Win 11 brand new notebook  ",
    name: "Person 3",
    email: "name3@gmail.com",
    quantity: "10",
    date: "12 June 2023",
    address: "dhaka",
    payment: "home delivery",
    image: "https://i.ibb.co/3cCPKvH/4.webp",
  },
  {
    id: 4,
    product: "Gaming PC 10th Gen Core i5-10400f",
    name: "Person 4",
    email: "name4@gmail.com",
    quantity: "22",
    date: "13 June 2023",
    address: "rajshahi",
    payment: "bank",
    image: "https://i.ibb.co/0sbcGXN/8.webp",
  },
  {
    id: 5,
    product: "High Quality i 14 Pro Max",
    name: "Person 5",
    email: "name5@gmail.com",
    quantity: "5",
    date: "15 June 2023",
    address: "sylet",
    payment: "bkash",
    image: "https://i.ibb.co/vY3JDdg/12.webp",
  },
];
