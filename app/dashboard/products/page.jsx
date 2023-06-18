"use client";

import ButtonSmall from "@/Commons/ButtonSmall";
import LargeButton from "@/Commons/LargeButton";
import PageTitle from "@/Commons/PageTitle";
import Modal from "@/Commons/Modal";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { useQuery } from "react-query";

function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isLoading, error, data } = useQuery("products", () =>
    fetch("https://manufecture-website-server.onrender.com/products").then(
      (res) => res.json()
    )
  );

  console.log(data);

  return (
    <div className="relative">
      <PageTitle>Products</PageTitle>
      <div className="flex justify-center md:justify-end mb-4">
        <LargeButton>
          <p onClick={() => setModalOpen(true)}>Add New Product</p>
        </LargeButton>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <h2 className="text-lg font-semibold mb-4">Update product price.</h2>
        </Modal>
      </div>
      <table className="border-collapse border border-neutral w-full">
        <thead>
          <tr className="">
            <th className="hidden md:block border px-2 py-2">Number</th>
            <th className="border border-neutral px-2 py-2">Name</th>
            <th className="border border-neutral px-2 py-2">Price</th>
            <th className="border border-neutral px-2 py-2">Quantity</th>
            <th className="border border-neutral px-2 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="">
              <td className="hidden md:block border border-neutral px-2 py-2">
                {index + 1}
              </td>
              <td className="group border border-neutral px-2 py-2">
                <div className="flex justify-between">
                  {item.model}{" "}
                  <BiEditAlt
                    className="invisible group-hover:visible inline cursor-pointer text-primary"
                    size={25}
                    onClick={() => setModalOpen(true)}
                  />
                </div>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                  <h2 className="text-lg font-semibold mb-4">
                    Update product name.
                  </h2>
                  <div className="flex gap-2">
                    <input
                      className="w-full border rounded p-1 focus:outline-none"
                      type="text"
                      required
                    />
                    <LargeButton>Update</LargeButton>
                  </div>
                </Modal>
              </td>
              <td className="group border border-neutral px-2 py-2">
                <div className="flex justify-between">
                  {item.price}
                  <BiEditAlt
                    className="invisible group-hover:visible inline cursor-pointer text-primary"
                    size={25}
                    onClick={() => setModalOpen(true)}
                  />
                </div>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                  <h2 className="text-lg font-semibold mb-4">
                    Update product price.
                  </h2>
                  <div className="flex gap-2">
                    <input
                      className="w-full border rounded p-1 focus:outline-none"
                      type="text"
                      required
                    />
                    <LargeButton>Update</LargeButton>
                  </div>
                </Modal>
              </td>
              <td className="group border border-neutral px-2 py-2">
                <div className="flex justify-between">
                  500
                  <BiEditAlt
                    className="invisible group-hover:visible inline cursor-pointer text-primary"
                    size={25}
                    onClick={() => setModalOpen(true)}
                  />
                </div>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                  <h2 className="text-lg font-semibold mb-4">
                    Update product quantity.
                  </h2>
                  <div className="flex gap-2">
                    <input
                      className="w-full border rounded p-1 focus:outline-none"
                      type="text"
                      required
                    />
                    <LargeButton>Update</LargeButton>
                  </div>
                </Modal>
              </td>
              <td className="border border-neutral px-2 py-2">
                <div className="flex justify-center items-center">
                  <ButtonSmall>
                    <p onClick={() => setModalOpen(true)}>Update</p>
                  </ButtonSmall>
                </div>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                  <h2 className="text-lg text-center font-semibold mb-4">
                    Are you sure to delete this product permantly?
                  </h2>
                  <div className="flex justify-center gap-3">
                    <ButtonSmall>Yes</ButtonSmall>
                    <ButtonSmall>No</ButtonSmall>
                  </div>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
