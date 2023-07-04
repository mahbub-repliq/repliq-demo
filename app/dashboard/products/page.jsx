"use client";

import ButtonSmall from "@/Commons/ButtonSmall";
import LargeButton from "@/Commons/LargeButton";
import PageTitle from "@/Commons/PageTitle";
import { useState, useEffect } from "react";
import { BiEdit, BiEditAlt, BiTrash } from "react-icons/bi";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import { MdOutlineClose } from "react-icons/md";
import Loader from "@/Commons/Loader";
import useMultipleDataFetch from "@/hooks/useMultipleDataFetch";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "@/Commons/Modal";
import toast from "react-hot-toast";

function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openDrawer, setOpendrawer] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [queryProducts, setQueryProducts] = useState([]);

  const [products, posts, isloadingProducts, isloadingPosts] =
    useMultipleDataFetch();
  const [product, setProduct] = useState({});

  const filterProduct = products?.filter(
    (item) => item.category == selectedValue
  );

  useEffect(() => {
    if (!filterProduct?.length) {
      setQueryProducts(products);
    } else {
      setQueryProducts(filterProduct);
    }
  }, [filterProduct, products]);

  return (
    <div>
      <div
        className={`relative ${openUpdate || openDrawer ? "opacity-20 " : ""}`}
      >
        <PageTitle>Products</PageTitle>
        {isloadingProducts ? (
          <Loader />
        ) : (
          <>
            <div className={`flex justify-center md:justify-end`}></div>
            <div className="my-5 md:flex justify-between items-end">
              {/* <LargeButton> */}
              <button
                className="w-full md:hidden px-3 md:px-5 py-1 md:py-2 text-md md:font-semibold uppercase bg-primary hover:bg-secondary rounded text-base-100 transition-all ease-in-out duration-500"
                onClick={() => setOpendrawer(true)}
              >
                Add New Product
              </button>
              {/* </LargeButton> */}
              <div className="">
                {/* <label
                  htmlFor="countries"
                  class="block mb-2 font-medium text-neutral"
                >
                  Select an option
                </label> */}
                <select
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  id="countries"
                  class="bg-base-100 border border-gray-300 text-neutral text-sm rounded-md focus:ring-primary focus:border-primary block w-full md:w-72 px-3 py-2.5 mt-4 md:mt-0"
                >
                  <option defaultValue={"Choose by category"}>
                    Choose by category
                  </option>
                  <option value="smartphone">Smartphones & Tablets</option>
                  <option value="laptop">Computers & Laptops</option>
                  <option value="camera">Gadgets</option>
                  <option value="camera">Video Games</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div className="hidden md:block">
                <LargeButton>
                  <p className="" onClick={() => setOpendrawer(true)}>
                    Add New Product
                  </p>
                </LargeButton>
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
                  {queryProducts?.map((item, index) => (
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
                            onClick={() => {
                              setOpenUpdate(!openUpdate);
                              setProduct(item);
                            }}
                          >
                            <BiEdit className="" size={20} />
                            Edit
                          </button>
                          <button
                            className="border border-rose-500 hover:bg-rose-500 text-rose-500 hover:text-base-100 px-3 py-2 flex justify-center items-center gap-2 rounded-md transition-all ease-in-out duration-500 uppercase text-xs"
                            onClick={() => toast.success("Product deleted.")}
                          >
                            <BiTrash className="" size={20} />
                            Delete
                          </button>
                        </div>
                        {/* <Modal
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
                        </Modal> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4 lg:hidden">
              {queryProducts?.map((item, index) => (
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
                  <div className="grid grid-cols-2 border-t border-gray-200 divide-x divide-gray-200">
                    <button
                      className=" text-primary flex justify-center items-center gap-2 uppercase text-xs py-5"
                      onClick={() => setOpenUpdate(true)}
                    >
                      <BiEdit className="" size={20} />
                      Edit
                    </button>

                    <button
                      className=" text-rose-500 flex justify-center items-center gap-2 uppercase text-xs py-5"
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
      <UpdateProduct
        openUpdate={openUpdate}
        setOpenUpdate={setOpenUpdate}
        product={product}
      />
    </div>
  );
}

export default Products;
