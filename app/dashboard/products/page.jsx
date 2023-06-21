"use client";

import ButtonSmall from "@/Commons/ButtonSmall";
import LargeButton from "@/Commons/LargeButton";
import PageTitle from "@/Commons/PageTitle";
import Modal from "@/Commons/Modal";
import { useState, useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";
import AddProduct from "./AddProduct";
import { MdOutlineClose } from "react-icons/md";
import Loader from "@/Commons/Loader";
import useMultipleDataFetch from '@/hooks/useMultipleDataFetch'

function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openDrawer, setOpendrawer] = useState(false);
  const [products, posts, isloadingProducts, isloadingPosts] = useMultipleDataFetch();

  return (
    <div>
      <div className="relative">
        <PageTitle>Products</PageTitle>
        {isloadingProducts ? (
          <Loader />
        ) : (
          <>
            <div className="flex justify-center md:justify-end mb-4">
              <LargeButton>
                <p onClick={() => setOpendrawer(true)}>Add New Product</p>
              </LargeButton>
            </div>
            <table className="border-collapse border border-neutral w-full">
              <thead>
                <tr className="border border-neutral">
                  <th className="hidden md:block border px-2 py-2">Number</th>
                  <th className="border border-neutral px-2 py-2">Name</th>
                  <th className="border border-neutral px-2 py-2">Price</th>
                  <th className="border border-neutral px-2 py-2">Quantity</th>
                  <th className="border border-neutral px-2 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={index} className="border border-neutral">
                    <td className="hidden md:block px-2 py-2">{index + 1}</td>
                    <td className="border border-neutral px-2 py-2">
                      {item.model}
                    </td>
                    <td className="border border-neutral px-2 py-2">
                      {item.price}
                    </td>
                    <td className="group border border-neutral px-2 py-2">
                      500
                    </td>
                    <td className="border border-neutral px-2 py-2">
                      <div className="flex justify-center items-center">
                        <ButtonSmall>
                          <p onClick={() => setModalOpen(!modalOpen)}>Delete</p>
                        </ButtonSmall>
                      </div>
                      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                        <div className="bg-white rounded-lg p-8 z-10 relative">
                          <h2 className="text-lg text-center font-semibold mb-4">
                            Are you sure to delete this product permantly?
                          </h2>
                          <div className="flex justify-center gap-3">
                            <button
                              className="bg-secondary text-base-100 rounded px-3 py-1"
                              onClick={() => setModalOpen(!modalOpen)}
                            >
                              Yes
                            </button>
                            <button
                              className="bg-rose-500 text-base-100 rounded px-3 py-1"
                              onClick={() => setModalOpen(!modalOpen)}
                            >
                              No
                            </button>
                          </div>
                        </div>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      <AddProduct openDrawer={openDrawer} setOpendrawer={setOpendrawer} />
    </div>
  );
}

export default Products;
