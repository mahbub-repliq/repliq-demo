"use client";

import { useQuery } from "react-query";
import { TbCurrencyTaka } from "react-icons/tb";
import Link from "next/link";
import ButtonSmall from "@/Commons/ButtonSmall";
import { AiFillHeart } from "react-icons/ai";
import Fetchedproducts from "@/Commons/Fetchedproducts";

function Products() {

  return (
    <div className=" pb-4 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold">All Products</h2>
      <Fetchedproducts />
    </div>
  );
}

export default Products;

