import React, { useState } from "react";
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
      <div className="bg-white rounded-lg p-8 z-10 relative">
        <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setModalOpen(false)}>
          <RxCross1 />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
