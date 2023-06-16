"use client"

import LargeButton from "@/Commons/LargeButton";
import Link from "next/link";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiFillGithub, AiOutlineLine } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function Login() {
    const [showPass, setShowPass] = useState(false);

    const getCharacterValidationError = (str) => {
        return `Your password must have at least 1 ${str} character`;
      };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password : Yup.string().required("Please enter a password")
      .min(8, "Password must have at least 8 characters")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    }),
    onSubmit: (values) => {
      console.log("Got register info..............", values);
    },
  });

  return (
    <div className="flex justify-center items-center">
      <div className="bg-accent rounded-md shadow-lg p-4 md:p-6 lg:p-8 min-h-full">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-neutral font-semibold mb-3">
          Login your account.
        </h2>
        <form onSubmit={formik.handleSubmit}>
        <div className="py-2">
          <label htmlFor="">Email</label>
          <input
            className={`block border rounded w-full p-2 focus:outline-none ${
              formik.errors.email ? "border-secondary" : ""
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
            <p className="text-xs pt-2 text-secondary">
              {" "}
             Email is required.
            </p>
          )}
        </div>
        <div className="py-2 relative">
          <label htmlFor="">Password</label>
          <input
            className={`block border rounded w-full p-2 focus:outline-none ${
              formik.errors.password ? "border-secondary" : ""
            }`}
            type={showPass ? "text" : "password"}
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <p className="text-xs pt-2 text-secondary">
              {formik.errors.password}
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
        <div className="w-full border p-2 cursor-pointer text-center rounded mt-5 mb-2">
          {" "}
          <FcGoogle className="inline" /> Sign Up with Google{" "}
        </div>
        <div className="w-full border p-2 cursor-pointer text-center rounded">
          {" "}
          <AiFillGithub className="inline" /> Sign Up with GitHub{" "}
        </div>
        <p className="pt-3">
          Don&apos;t have an account?{" "}
          <Link className="text-primary underline" href="/register">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
