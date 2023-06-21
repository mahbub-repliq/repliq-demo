import PageTitle from "@/Commons/PageTitle";
import React from "react";

function SingleOrder({ params: { id } }) {
  const order = orders.find((item) => item.id == id);
  return (
    <div className="bg-base-100">
      <PageTitle>Order Details</PageTitle>
      <div className="flex justify-center items-center">
        <ul className="w-96">
          <li className="flex gap-4">
            <p className="basis-1/4 text-lg">Product</p>
            <p className="basis-3/4">: {order.product}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/4 text-lg">Customer name</p>
            <p className="basis-3/4 capitalize">: {order.name}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/4 text-lg">Email</p>
            <p className="basis-3/4">: {order.email}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/4 text-lg">Quantity</p>
            <p className="basis-3/4">: {order.quantity}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/4 text-lg">Address</p>
            <p className="basis-3/4 capitalize">: {order.address}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/4 text-lg">Date</p>
            <p className="basis-3/4">: {order.date}</p>
          </li>
          <li className="flex gap-4">
            <p className="basis-1/4 text-lg">Payment type</p>
            <p className="basis-3/4 capitalize">: {order.payment}</p>
          </li>
        </ul>
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
