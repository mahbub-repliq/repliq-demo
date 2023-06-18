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

function Profile() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div>
      <div className="relative">
        <PageTitle>Profile</PageTitle>
        <div className="flex justify-center">
          <BsPersonCircle size={100} />
        </div>
        <div className="flex justify-center items-center">
          <ul className="w-[40rem]">
            <li className="flex items-center gap-4 py-2">
              <div className="w-16 h-16 bg-accent flex justify-center items-center rounded-full">
                <BsFillPersonFill className="inline" size={30} />
              </div>
              <p>Mahbub Noyon</p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <div className="w-16 h-16 bg-accent flex justify-center items-center rounded-full">
                <HiIdentification className="inline" size={30} />
              </div>
              <p>Software Developer</p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <div className="w-16 h-16 bg-accent flex justify-center items-center rounded-full">
                <BsFillEnvelopeFill className="inline" size={30} />
              </div>
              <p>mahbubul.alam@repliq.dev</p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <div className="w-16 h-16 bg-accent flex justify-center items-center rounded-full">
                <AiFillPhone className="inline" size={30} />
              </div>
              <p>01687874697</p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div onClick={() => setOpenProfile(!openProfile)}>
            <LargeButton>Update Profile</LargeButton>
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
