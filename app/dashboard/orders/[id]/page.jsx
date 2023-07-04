import PageTitle from "@/Commons/PageTitle";
import React from "react";

function SingleOrder({ params: { id } }) {
  const order = orders.find((item) => item.id == id);
  return (
    <div className="bg-slate-50">
      <PageTitle>Order Details</PageTitle>
      <div className="md:flex  items-center bg-accent rounded border border-gray-200">
        <div className=" flex justify-start items-center p-5 rounded-full">
          <img className="w-full h-full rounded " src={order.image} alt="" />
        </div>{" "}
        <div className="w-full px-5 pt-0 pb-5 md:px-0 md:pb-0">
          <ul className="">
          <li className="flex flex-row gap-4">
            <p className="basis-1/3 md:basis-1/4 text-lg">Product</p>
            <p className="basis-2/3 md:basis-3/4">: {order.product}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/3 md:basis-1/4 text-lg">Customer name</p>
            <p className="basis-2/3 md:basis-3/4 capitalize">: {order.name}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/3 md:basis-1/4 text-lg">Email</p>
            <p className="basis-2/3 md:basis-3/4">: {order.email}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/3 md:basis-1/4 text-lg">Quantity</p>
            <p className="basis-2/3 md:basis-3/4">: {order.quantity}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/3 md:basis-1/4 text-lg">Address</p>
            <p className="basis-2/3 md:basis-3/4 capitalize">: {order.address}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/3 md:basis-1/4 text-lg">Date</p>
            <p className="basis-2/3 md:basis-3/4">: {order.date}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/3 md:basis-1/4 text-lg">Payment type</p>
            <p className="basis-2/3 md:basis-3/4 capitalize">: {order.payment}</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleOrder;

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
