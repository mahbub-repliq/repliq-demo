import {BiHeadphone} from 'react-icons/bi'
import {MdSmartphone} from 'react-icons/md'
import {FaComputer} from 'react-icons/fa'
import {MdVideogameAsset} from 'react-icons/md'
import {SiEngadget} from 'react-icons/si'
import {RxDividerVertical} from 'react-icons/rx'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'


function Category() {
   return(
    <div className='flex py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]'>
       <div className='basis-1/3'>
         <h3 className='text-xl md:text-2xl lg:text-4xl font-bold text-slate-800'>Popular <br /> Categories</h3>
         <div className='flex justify-start items-center mt-5'>
            <BsFillArrowLeftCircleFill className='text-gray-400 drop-shadow-lg hover:text-blue-700 transition duration-500 ease-in-out' size={30} />
            <RxDividerVertical className='text-gray-400 drop-shadow-lg ' size={40} />
            <BsFillArrowRightCircleFill className='text-gray-400 drop-shadow-lg hover:text-blue-700 transition duration-500 ease-in-out' size={30} />
         </div>
       </div>
        <div className='basis-2/3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {
            Categories.map((item, index) => 
             <div key={index} className={`p-4 md:p-6 py-5 md:py-8 text-slate-800 ${(index === 0 && 'bg-slate-100') || (index === 2 && 'bg-slate-100') || (index === 4 && 'bg-slate-100')}`}>
                <div className='flex justify-center items-center mb-3'> <BiHeadphone className='text-slate-800' size={60}  /></div>
                <p className='text-center text-slate-800 font-semibold'> {item.name} </p>
             </div> 
            )
        }
        </div>
    </div>  
   )  
}

export default Category;

const Categories = [
    {
        "name" : "Accessories",
        "icon" : "<BiHeadphone />"
    },
    {
        "name" : "Smartphones & Tablets",
        "icon" : "<MdSmartphone />"
    },
    {
        "name" : "Computers & Laptops",
        "icon" : "<FaComputer />"
    },
    {
        "name" : "Gadgets",
        "icon" : "<SiEngadget />"
    },
    {
        "name" : "Video Games",
        "icon" : "<MdVideogameAsset />"
    },
]