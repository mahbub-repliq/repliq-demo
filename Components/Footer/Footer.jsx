import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className="py-5 md:py-8 lg:py-12 bg-[#FFFFFF] text-slate-900">
      <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-5 px-4 md:px-8 lg:px-12 border-b pb-5 md:pb-8 lg:pb-12'>
        <div>
          <h1 className="basis-1/4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Brand
          </h1>
          <p>Got Question? Call Us 24/7</p>
          <p>+38 068 005 3570</p>
          <p>17 Princess Road, London <br /> Grester London NW18JR, UK</p>
          <ul className="flex">
            <li className="px-2"><FaFacebookF className='hover:text-blue-700' size={20} /></li>
            <li className="px-2"> <FaInstagram className='hover:text-blue-700' size={20} /> </li>
            <li className="px-2"> <FaTwitter className='hover:text-blue-700' size={20} /> </li>
            <li className="px-2"> <FaYoutube className='hover:text-blue-700' size={20} /> </li>
          </ul>
        </div>
        <div>
            <h2 className='text-xl'>Important Links</h2>
            <ul>
                <li className='py-1 text-md hover:text-blue-700'>Products</li>
                <li className='py-1 text-md hover:text-blue-700'>Wishlist</li>
                <li className='py-1 text-md hover:text-blue-700'>Cart</li>
                <li className='py-1 text-md hover:text-blue-700'>Account</li>
            </ul>
        </div> 
        <div>
            <h2 className='text-xl'>Customer Care</h2>
            <ul>
                <li className='py-1 text-md hover:text-blue-700'>Products</li>
                <li className='py-1 text-md hover:text-blue-700'>Wishlist</li>
                <li className='py-1 text-md hover:text-blue-700'>Cart</li>
                <li className='py-1 text-md hover:text-blue-700'>Account</li>
            </ul>
        </div> 
      </div>
      <div className='px-4 md:px-8 lg:px-12'>
        <p className='text-center'>Copyright ©{year} All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
