"use client";

import PageTitle from "@/Commons/PageTitle";
import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi";
import {
  BsFillEnvelopeFill,
  BsFillPersonFill,
  BsPersonCircle,
} from "react-icons/bs";
import LargeButton from "@/Commons/LargeButton";
import { MdOutlineClose } from "react-icons/md";
import UpdateProfile from "./UpdateProfile";
import dummyImage from "@/assets/images/avatar.jpg";

function Profile() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div>
      <div className={`relative ${openProfile ? "opacity-20 " : ""}`}>
        <PageTitle>Profile</PageTitle>

        <div className="flex justify-center items-center">
          <div className="w-[35rem]">
            <div className="flex justify-start">
              <BsPersonCircle size={150} />
            </div>
            <ul className=" mt-5">
              <li className="flex items-center gap-4 pb-2">
                <div className="w-12 h-12 bg-accent flex justify-center items-center rounded-full">
                  <BsFillPersonFill className="inline" size={25} />
                </div>
                <p>Mahbub Noyon</p>
              </li>
              <li className="flex items-center gap-4 pb-2">
                <div className="w-12 h-12 bg-accent flex justify-center items-center rounded-full">
                  <HiIdentification className="inline" size={25} />
                </div>
                <p>Software Developer</p>
              </li>
              <li className="flex items-center gap-4 pb-2">
                <div className="w-12 h-12 bg-accent flex justify-center items-center rounded-full">
                  <BsFillEnvelopeFill className="inline" size={25} />
                </div>
                <p>mahbubul.alam@repliq.dev</p>
              </li>
              <li className="flex items-center gap-4 pb-2">
                <div className="w-12 h-12 bg-accent flex justify-center items-center rounded-full">
                  <AiFillPhone className="inline" size={25} />
                </div>
                <p>01687874697</p>
              </li>
            </ul>
            <div className="flex justify-start items-center mt-4">
              <div onClick={() => setOpenProfile(!openProfile)}>
                <LargeButton>Update Profile</LargeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateProfile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
      />
    </div>
  );
}

export default Profile;
