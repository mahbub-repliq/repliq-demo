import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ modalOpen, setModalOpen, children }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        modalOpen ? "visible" : "invisible"
      }`}
    >
      <div className="fixed inset-0 bg-dark opacity-80"></div>
      <div className="bg-white rounded-lg p-5 z-10 relative">
        <div className="flex justify-end">
          <MdOutlineClose
            className="cursor-pointer text-neutral"
            size={25}
            onClick={() => setModalOpen(!modalOpen)}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
