"use client";

import LargeButton from "@/Commons/LargeButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useRef, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import PageTitle from "@/Commons/PageTitle";
import Image from "next/image";

function UpdateProduct({ openUpdate, setOpenUpdate, product }) {
  const ref = useRef(null);

  const formik = useFormik({
    initialValues: {
      model: "",
      price: "",
      ratirg: "",
      image: "",
    },
    validationSchema: Yup.object({
      productname: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      price: Yup.string().required("Required"),
      quantity: Yup.string().required("Required"),
      image: Yup.mixed(),
    }),
    onSubmit: (values) => {
      console.log("Got product info..............", values);
    },
  });

  return (
    <div className="">
      <div
        className={` bg-accent border border-t-0 border-r-0 w-full md:w-96 min-h-screen fixed top-0 ${
          openUpdate ? "right-0 z-50 " : "right-[-450px]"
        } transition-all ease-in-out duration-500`}
      >
        <div className="flex justify-end pt-5 pr-5">
          <MdOutlineClose
            className="cursor-pointer"
            size={25}
            onClick={() => setOpenUpdate(!openUpdate)}
          />
        </div>
        <div className="p-5">
          <PageTitle>Update product</PageTitle>
          <form onSubmit={formik.handleSubmit}>
            <div className="pb-1 relative">
              {/* <label htmlFor="">Upload product photo </label> */}
              <input
                className={`block rounded py-2 w-1 h-1 absolute top-[-500px]`}
                type="file"
                name="photo"
                accept="image/*"
                ref={ref}
                onChange={(e) => {
                  formik.setFieldValue("image", e.target.files[0]);
                }}
              />
              <div className="flex justify-start items-center gap-3">
                <img
                  className="rounded-full w-24 h-24"
                  src={
                    formik.values.image
                      ? URL.createObjectURL(formik.values.image)
                      : product?.image
                  }
                  alt=""
                />

                <button
                  onClick={() => ref.current.click()}
                  className="uppercase px-2 py-1 text-primary border border-primary hover:bg-primary hover:text-base-100 rounded-md text-xs transition-all ease-in-out duration-500"
                >
                  change
                </button>
              </div>
            </div>
            <div className="py-1">
              <label htmlFor="">Product Name</label>
              <input
                className={`block border rounded p-2 w-full focus:outline-none`}
                id="productname"
                name="productname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                defaultValue={
                  product ? product.model : formik.values.productname
                }
                placeholder="Product name"
              />
            </div>
            <div className="py-1">
              <label htmlFor="">Product price</label>
              <input
                className={`block border rounded p-2 w-full focus:outline-none`}
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                defaultValue={product ? product.price : formik.values.price}
                placeholder="Product price"
              />
            </div>
            <div className="pt-1 pb-4">
              <label htmlFor="">Quantity</label>
              <input
                className={`block border rounded w-full p-2 focus:outline-none`}
                id="quantity"
                name="quantity"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                defaultValue={product ? "500" : formik.values.quantity}
                placeholder="Quantity"
              />
            </div>
            <LargeButton>
              <input
                className="border-0 cursor-pointer"
                type="submit"
                value="Add Product"
              />
            </LargeButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
