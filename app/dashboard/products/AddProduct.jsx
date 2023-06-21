"use client";

import LargeButton from "@/Commons/LargeButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import PageTitle from "@/Commons/PageTitle";

function AddProduct({ openDrawer, setOpendrawer }) {

  const formik = useFormik({
    initialValues: {
      productname: "",
      price: "",
      quantity: "",
      rating: "",
      photo: null,
      imagePreview: null,
    },
    validationSchema: Yup.object({
      productname: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      price: Yup.string().required("Required"),
      quantity: Yup.string().required("Required"),
      rating: Yup.string().required("Please enter a rating"),
      photo: Yup.mixed(),
    }),
    onSubmit: (values) => {
      console.log("Got product info..............", values);
    },
  });

  const handleFileChange = (event) => {
    const selectedFile = event.currentTarget.files[0];
    formik.setFieldValue("file", selectedFile);
    const reader = new FileReader();
    reader.onload = (e) => {
      const imagePreviewUrl = e.target.result;
      formik.setFieldValue("imagePreview", imagePreviewUrl);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="">
      <div
        className={`absolute bg-accent border border-t-0 border-r-0 w-full md:w-96 min-h-screen top-0 ${
          openDrawer ? "right-0" : "right-[-450px] hidden"
        } transition-all ease-in-out duration-500`}
      >
        <div className="flex justify-end pt-5 pr-5">
          <MdOutlineClose
            className="cursor-pointer"
            size={25}
            onClick={() => setOpendrawer(!openDrawer)}
          />
        </div>
        <div className="p-5">
            <PageTitle>Add new product</PageTitle>
          <form onSubmit={formik.handleSubmit}>
          <div className="pb-2">
              <label htmlFor="">Upload product photo </label>
              <input
                className={`block rounded py-2 ${
                  formik.errors.photo ? "border-rose-500" : ""
                }`}
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <div className="py-2">
              <label htmlFor="">Product Name</label>
              <input
                className={`block border rounded p-2 w-full focus:outline-none ${
                  formik.errors.productname ? "border-rose-500" : ""
                }`}
                id="productname"
                name="productname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.productname}
                placeholder="Product name"
              />
              {formik.errors.productname && (
                <p className="text-xs pt-2 text-rose-500">
                  {" "}
                  Product name is required.
                </p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="">Product price</label>
              <input
                className={`block border rounded p-2 w-full focus:outline-none ${
                  formik.errors.price ? "border-rose-500" : ""
                }`}
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                placeholder="Product price"
              />
              {formik.errors.price && (
                <p className="text-xs pt-2 text-rose-500">
                  {" "}
                  Product price is required.
                </p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="">Quantity</label>
              <input
                className={`block border rounded w-full p-2 focus:outline-none ${
                  formik.errors.quantity ? "border-rose-500" : ""
                }`}
                id="quantity"
                name="quantity"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.quantity}
                placeholder="Quantity"
              />
              {formik.errors.quantity && (
                <p className="text-xs pt-2 text-rose-500">
                  {" "}
                  Quantity is required.
                </p>
              )}
            </div>
            <div className="py-2 relative">
              <label htmlFor="">Rating</label>
              <input
                className={`block border rounded w-full p-2 focus:outline-none ${
                  formik.errors.rating ? "border-rose-500" : ""
                }`}
                type="number"
                id="rating"
                name="rating"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
              />
              {formik.errors.rating && (
                <p className="text-xs pt-2 text-rose-500">
                  {" "}
                  {formik.errors.rating}
                </p>
              )}
            </div>

            <LargeButton>
              <input
                className="border-0 cursor-pointer"
                type="submit"
                value="Add Product"
              />
            </LargeButton>
          </form>
          {formik.values.imagePreview && (
            <div className="w-48 h-48 mt-5">
              <img src={formik.values.imagePreview} alt="Preview" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
