import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="pt-4 md:pt-8 lg:pt-12 bg-accent text-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5 px-4 md:px-8 lg:px-12 border-b pb-5 md:pb-8 lg:pb-12">
        <div className="flex justify-center text-center md:text-start">
          <div className="">
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              Electro
            </h1>
            <p>Got Question? Call Us 24/7</p>
            <p>+021-95-51-84</p>
            <p>
              17 Princess Road, London <br /> Grester London NW18JR, UK
            </p>
            <div className="flex justify-center md:justify-start">
              <ul className="flex mt-2">
                <li className="bg-base-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1 shadow">
                  <FaFacebookF className="hover:text-secondary" size={20} />
                </li>
                <li className="bg-base-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1 shadow">
                  {" "}
                  <FaInstagram
                    className="hover:text-secondary"
                    size={20}
                  />{" "}
                </li>
                <li className="bg-base-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1 shadow">
                  {" "}
                  <FaTwitter className="hover:text-secondary" size={20} />{" "}
                </li>
                <li className="bg-base-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1 shadow">
                  {" "}
                  <FaYoutube className="hover:text-secondary" size={20} />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center md:text-start">
          <div className="">
            <h2 className="text-xl text-neutral">Important Links</h2>
            <ul>
              <li className="py-1 text-md hover:text-secondary">Products</li>
              <li className="py-1 text-md hover:text-secondary">Wishlist</li>
              <li className="py-1 text-md hover:text-secondary">Cart</li>
              <li className="py-1 text-md hover:text-secondary">Account</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center text-center md:text-start">
          <div className="">
            <h2 className="text-xl text-neutral">Customer Care</h2>
            <ul>
              <li className="py-1 text-md hover:text-secondary">Products</li>
              <li className="py-1 text-md hover:text-secondary">Wishlist</li>
              <li className="py-1 text-md hover:text-secondary">Cart</li>
              <li className="py-1 text-md hover:text-secondary">Account</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center text-center md:text-start">
          <div className="">
            <h2 className="text-xl text-neutral">Customer Care</h2>
            <ul>
              <li className="py-1 text-md hover:text-secondary">Products</li>
              <li className="py-1 text-md hover:text-secondary">Wishlist</li>
              <li className="py-1 text-md hover:text-secondary">Cart</li>
              <li className="py-1 text-md hover:text-secondary">Account</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-12 py-3 md:py-5">
        <p className="text-center">Copyright ©{year} All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
