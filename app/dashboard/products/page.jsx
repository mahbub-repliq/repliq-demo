"use client";

import ButtonSmall from "@/Commons/ButtonSmall";
import LargeButton from "@/Commons/LargeButton";
import PageTitle from "@/Commons/PageTitle";
import Modal from "@/Commons/Modal";
import { useState, useEffect } from "react";
import { BiEdit, BiEditAlt, BiTrash } from "react-icons/bi";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import { MdOutlineClose } from "react-icons/md";
import Loader from "@/Commons/Loader";
import useMultipleDataFetch from "@/hooks/useMultipleDataFetch";
import { AiOutlineSearch } from "react-icons/ai";

function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openDrawer, setOpendrawer] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [products, posts, isloadingProducts, isloadingPosts] =
    useMultipleDataFetch();
  const [product, setProduct] = useState({})

  return (
    <div>
      <div className="relative">
        <PageTitle>Products</PageTitle>
        {isloadingProducts ? (
          <Loader />
        ) : (
          <>
            <div className="flex justify-center md:justify-end">
              <LargeButton>
                <p onClick={() => setOpendrawer(true)}>Add New Product</p>
              </LargeButton>
            </div>
            <div className="my-5">
              <div className="relative">
                <AiOutlineSearch className="absolute top-3 left-3" size={20} />
                <input
                  className="border-2 border-gray-200 rounded-md py-2 pl-10 bg-base-100 focus:border-primary focus:outline-none w-full"
                  type="search"
                  name=""
                  id=""
                  placeholder="Search by name"
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <table className=" border-collapse border rounded border-accent w-full">
                <thead className="">
                  <tr className="bg-accent rounded">
                    <th className="hidden md:block px-2 py-5 text-left text-neutral">
                      Product
                    </th>
                    <th className="border-y border-accent px-2 py-5 text-left text-neutral">
                      Name
                    </th>
                    <th className="border-y border-accent px-2 py-5 text-left text-neutral">
                      Price
                    </th>
                    <th className="border-y border-accent px-2 py-5 text-left text-neutral">
                      Quantity
                    </th>
                    <th className="border-y border-accent px-2 py-5 text-left text-neutral">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr
                      key={index}
                      className="border border-accent bg-base-100"
                    >
                      <td className="hidden md:block px-2 py-5">
                        {" "}
                        <div className="flex justify-center items-center">
                          <img
                            className="w-24 h-24 rounded "
                            src={item.image}
                            alt=""
                          />
                        </div>{" "}
                      </td>
                      <td className="border-y border-accent px-2 py-5">
                        {item.model}
                      </td>
                      <td className="border-y border-accent px-2 py-5">
                        {item.price}
                      </td>
                      <td className="group border-y border-accent px-2 py-5">
                        500
                      </td>
                      <td className="border-y border-accent px-2 py-5">
                        <div className="flex justify-center md:justify-start items-center gap-10 md:gap-3">
                          <button
                            className="border border-primary hover:bg-primary text-primary hover:text-base-100 px-3 py-2 flex justify-center items-center gap-2 rounded-md transition-all ease-in-out duration-500 uppercase text-xs"
                            onClick={() => {setOpenUpdate(true); setProduct(item)}}
                          >
                            <BiEdit className="" size={20} />
                            Edit
                          </button>
                          <button
                            className="border border-rose-500 hover:bg-rose-500 text-rose-500 hover:text-base-100 px-3 py-2 flex justify-center items-center gap-2 rounded-md transition-all ease-in-out duration-500 uppercase text-xs"
                            onClick={() => setModalOpen(!modalOpen)}
                          >
                            <BiTrash className="" size={20} />
                            Delete
                          </button>
                        </div>
                        <Modal
                          modalOpen={modalOpen}
                          setModalOpen={setModalOpen}
                        >
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
            </div>
            <div className="grid md:grid-cols-2 gap-5 mt-5 lg:hidden">
              {products.map((item, index) => (
                <div
                  className=" bg-base-100 border border-gray-200 rounded-md"
                  key={index}
                >
                  <div className="flex justify-between gap-3 p-5">
                    <div className="basis-2/3">
                      <p className="text-neutral font-semibold md:hidden">
                        {" "}
                        {item.model}{" "}
                      </p>
                      <p className="text-neutral font-semibold hidden md:block ">
                        {" "}
                        {item.model.slice(0, 20)}..{" "}
                      </p>
                      <p className="font-medium text-gray-400 py-1">
                        Price:{" "}
                        <span className="text-secondary">{item.price} Tk.</span>{" "}
                      </p>
                      <p className="font-medium text-gray-400">
                        Quantity:{" "}
                        <span className="text-secondary">500 Pieces.</span>{" "}
                      </p>
                    </div>
                    <div className="flex justify-center items-center basis-1/3">
                      <img
                        className="w-24 h-24 rounded "
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-10 border-t border-gray-200 py-5">
                    <button
                      className=" text-primary flex justify-center items-center gap-2 uppercase text-xs"
                      onClick={() => setOpenUpdate(true)}
                    >
                      <BiEdit className="" size={20} />
                      Edit
                    </button>
                    <button
                      className=" text-rose-500 flex justify-center items-center gap-2 uppercase text-xs"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <BiTrash className="" size={20} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <AddProduct openDrawer={openDrawer} setOpendrawer={setOpendrawer} />
      <UpdateProduct openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} product={product} />
    </div>
  );
}

export default Products;
