"use client";

import LargeButton from "@/Commons/LargeButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import PageTitle from "@/Commons/PageTitle";

function UpdateProfile({ openProfile, setOpenProfile }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      profession: "",
      email: "",
      phone: "",
      photo: null,
      imagePreview: null,
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
    <div>
      <div
        className={`absolute bg-accent border border-t-0 border-r-0 w-full md:w-96 min-h-screen top-0 ${
          openProfile ? "right-0" : "right-[-450px] hidden"
        } transition-all ease-in-out duration-500`}
      >
        <div className="flex justify-end pt-5 pr-5">
          <MdOutlineClose
            className="cursor-pointer"
            size={25}
            onClick={() => setOpenProfile(!openProfile)}
          />
        </div>
        <div className="p-5">
          <PageTitle>Update Profile</PageTitle>
          <form onSubmit={formik.handleSubmit}>
            <div className="pb-2">
              <label htmlFor="">Upload your photo </label>
              <input
                className={`block rounded py-2 ${
                  formik.errors.photo ? "border-rose-500" : ""
                }`}
                type="file"
                name="photo"
                accept="image/*"
                onChange={e => formik.setFieldValue('photo', e.target.files[0])}
              />
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
                  email is required.
                </p>
              )}
            </div>
            <div className="py-2 relative">
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

export default UpdateProfile;
