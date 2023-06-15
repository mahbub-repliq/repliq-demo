"use client";

import LargeButton from "@/Commons/LargeButton";
import { useQuery } from "react-query";

function SingleProduct({ params: { id } }) {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://manufecture-website-server.onrender.com/products").then(
      (res) => res.json()
    )
  );

  const product = data?.find((item) => item._id == id);

  console.log("Got single item......", product);

  return (
    <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-base-100">
      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div className="flex justify-center items-center ">
          <img className="w-full" src={product?.image} alt="" />
        </div>
        <div>
          <h3 className="text-neutral text-lg md:text-xl lg:text-2xl font-semibold pb-3">
            {" "}
            {product?.model}{" "}
          </h3>
          <div className="flex gap-5 pb-3">
            <p>
              Price: <span className="text-secondary">{product?.price}</span>{" "}
            </p>
            <p>Rating: {product?.rating} </p>
          </div>
          <h3 className="text-lg font-semibold pb-3">Feature:</h3>
          <ul>
            {product?.keyFeature.map((item, index) => (
              <li key={index}>
                {" "}
                {index + 1} {item}{" "}
              </li>
            ))}
          </ul>
          <LargeButton>Checkout</LargeButton>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Details:</h3>
        <ul>
          <li> {product?.spec[0].processor} </li>
          <li> {product?.spec[1].motherboard}</li>
          <li> {product?.spec[2].ram}</li>
          <li> {product?.spec[3].graphics}</li>
          <li> {product?.spec[4].storage}</li>
          <li> {product?.spec[5].casing}</li>
          <li> {product?.spec[6].psu}</li>
        </ul>
      </div>
    </div>
  );
}

export default SingleProduct;
