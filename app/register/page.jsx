"use client";

import LargeButton from "@/Commons/LargeButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineLine } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import PageTitle from "@/Commons/PageTitle";

export default function Register() {
  const [showPass, setShowPass] = useState(false);

  const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      photo: null,
      imagePreview: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Please enter a password")
        .min(8, "Password must have at least 8 characters")
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
      photo: Yup.mixed().required("Photo upload required"),
    }),

    onSubmit: (values) => {
      console.log("Got register info..............", values);
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
    <div className="flex justify-center items-center overflow-x-hidden">
      <div className="bg-accent rounded-md shadow p-4 md:p-6 lg:p-8">
        <PageTitle>Create your account.</PageTitle>
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
          <div className="md:flex gap-3 py-2">
            <div>
              <label htmlFor="">First Name</label>
              <input
                className={`block border rounded p-2 w-full focus:outline-none ${
                  formik.errors.firstName ? "border-rose-500" : ""
                }`}
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                placeholder="Your First name"
              />
              {formik.errors.firstName && (
                <p className="text-xs pt-2 text-rose-500">
                  {" "}
                  First name is required.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input
                className={`block border rounded p-2 w-full focus:outline-none ${
                  formik.errors.lastName ? "border-rose-500" : ""
                }`}
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                placeholder="Your Last name"
              />
              {formik.errors.lastName && (
                <p className="text-xs pt-2 text-rose-500">
                  {" "}
                  Last name is required.
                </p>
              )}
            </div>
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
              placeholder="Your Email"
            />
            {formik.errors.email && (
              <p className="text-xs pt-2 text-rose-500">
                {" "}
                Email is required.
              </p>
            )}
          </div>
          <div className="py-2 relative">
            <label htmlFor="">Password</label>
            <input
              className={`block border rounded w-full p-2 focus:outline-none ${
                formik.errors.password ? "border-rose-500" : ""
              }`}
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <p className="text-xs pt-2 text-rose-500">
                {" "}
                {formik.errors.password}{" "}
              </p>
            )}
            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute top-10 right-3"
            >
              {showPass ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
            </div>
          </div>
          <LargeButton>
            <input
              className="border-0 cursor-pointer"
              type="submit"
              value="SUBMIT"
            />
          </LargeButton>
        </form>
        {formik.values.imagePreview && (
          <div className="w-48 h-48 mt-5">
            <img src={formik.values.imagePreview} alt="Preview" />
          </div>
        )}
        <div className="w-full border p-2 cursor-pointer text-center rounded mt-5 mb-2">
          {" "}
          <FcGoogle className="inline" /> Sign Up with Google{" "}
        </div>
        <div className="w-full border p-2 cursor-pointer text-center rounded">
          {" "}
          <AiFillGithub className="inline" /> Sign Up with GitHub{" "}
        </div>
        <p className="pt-3">
          Already have an account?{" "}
          <Link className="text-primary underline" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
