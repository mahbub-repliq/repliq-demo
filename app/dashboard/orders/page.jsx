"use client"

import ButtonSmall from "@/Commons/ButtonSmall";
import Modal from "@/Commons/Modal";
import PageTitle from "@/Commons/PageTitle";
import Link from "next/link";
import React from "react";

function Orders() {
  return (
    <div className="relative">
      <PageTitle>Orders</PageTitle>
      <table className="border-collapse border border-neutral w-full">
        <thead>
          <tr className="border border-neutral">
            <th className="hidden md:block px-2 py-2">Number</th>
            <th className="border border-neutral px-2 py-2">Product</th>
            <th className="border border-neutral px-2 py-2">Customer</th>
            <th className="border border-neutral px-2 py-2">Email</th>
            <th className="border border-neutral px-2 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((item, index) => (
            <tr key={index} className="border border-neutral">
              <td className="hidden md:block px-2 py-2">
                {index + 1}
              </td>
              <td className="border border-neutral px-2 py-2">
                {item.product}{" "}
              </td>
              <td className="border border-neutral px-2 py-2">{item.name}</td>
              <td className="group border border-neutral px-2 py-2">{item.email}</td>
              <td className="border border-neutral px-2 py-2">
                <Link href={`/dashboard/orders/${item.id}`} className="flex justify-center items-center">
                  <ButtonSmall>Details</ButtonSmall>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  },
];
