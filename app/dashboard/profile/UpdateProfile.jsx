"use client";

import LargeButton from "@/Commons/LargeButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import PageTitle from "@/Commons/PageTitle";
import Image from "next/image";
import dummyImage from '@/assets/images/avatar.jpg'

function UpdateProfile({ openProfile, setOpenProfile }) {
  const ref = useRef(null);
  const formik = useFormik({
    initialValues: {
      name: "",
      profession: "",
      email: "",
      phone: "",
      photo: '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      profession: Yup.string(),
      email: Yup.string(),
      phone: Yup.string(),
      photo: Yup.mixed(),
    }),
    onSubmit: (values) => {
      console.log("Got profile info..............", values);
    },
  });


  return (
    <div>
      <div
        className={` bg-accent border border-t-0 border-r-0 w-full pb-10 md:w-96 fixed top-0 ${
          openProfile ? "right-0" : "right-[-450px]"
        } transition-all ease-in-out duration-500`}
      >
        <div className="flex justify-end pt-5 pr-5">
          <MdOutlineClose
            className="cursor-pointer"
            size={25}
            onClick={() => setOpenProfile(!openProfile)}
          />
        </div>
        <div className="px-5 pt-2 pb-5">
          <h3 className="text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold mb-4 md:mb-8">Update Profile</h3>
          <form onSubmit={formik.handleSubmit}>
          <div className="pb-1 relative">
            {/* <label htmlFor="">Upload your photo </label> */}
            <input
              className={`block rounded py-2 w-1 h-1 absolute top-[-500px] ${
                formik.errors.photo ? "border-rose-500" : ""
              }`}
              type="file"
              name="photo"
              accept="image/*"
              ref={ref}
              onChange={(e) => formik.setFieldValue("photo", e.target.files[0])}
            />
            <div className="flex justify-start items-center gap-3">
              <Image
                className="rounded-full"
                width={120}
                height={120}
                src={
                  formik.values.photo
                    ? URL.createObjectURL(formik.values.photo)
                    : dummyImage
                }
                alt=""
              />
              <button
                onClick={() => ref.current.click()}
                className="uppercase px-2 py-1 text-primary border border-primary hover:bg-primary hover:text-base-100 rounded-md text-xs transition-all ease-in-out duration-500"
              >
                Upload
              </button>
            </div>
          </div>
            <div className="py-2">
              <label htmlFor="">Name</label>
              <input
                className={`block border rounded p-2 w-full focus:outline-none ${
                  formik.errors.name ? "border-rose-500" : ""
                }`}
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Your name"
              />
              {formik.errors.name && (
                <p className="text-xs pt-2 text-rose-500">
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="">Profession</label>
              <input
                className={`block border rounded p-2 w-full focus:outline-none ${
                  formik.errors.profession ? "border-rose-500" : ""
                }`}
                id="profession"
                name="profession"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.profession}
                placeholder="Your profession"
              />
              {formik.errors.profession && (
                <p className="text-xs pt-2 text-rose-500">
                  {formik.errors.profession}
                </p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="">Email</label>
              <input
                className={`block border rounded w-full p-2 focus:outline-none ${
                  formik.errors.email ? "border-rose-500" : ""
                }`}
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Your email"
              />
              {formik.errors.email && (
                <p className="text-xs pt-2 text-rose-500">
                  {" "}
                  Email is required.
                </p>
              )}
            </div>
            <div className="pt-2 pb-4">
              <label htmlFor="">Phone</label>
              <input
                className={`block border rounded w-full p-2 focus:outline-none ${
                  formik.errors.phone ? "border-rose-500" : ""
                }`}
                type="text"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="Phone number"
              />
              {formik.errors.phone && (
                <p className="text-xs pt-2 text-rose-500">
                  {" "}
                  {formik.errors.phone}
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
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
