'use client'

import { MdOutlineClose } from "react-icons/md";

function ProfileDrawer({ openProfile, setOpenProfile }) {
  return (
    <div
      className={`absolute bg-accent border border-t-0 border-r-0 w-full md:w-96 min-h-screen z-50 top-0 ${
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
    </div>
  );
}

export default ProfileDrawer;
