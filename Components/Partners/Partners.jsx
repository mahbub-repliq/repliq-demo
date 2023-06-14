import Image from 'next/image'
import brands1 from '../../assets/images/brands/brands_1.jpg'
import brands2 from '../../assets/images/brands/brands_2.jpg'
import brands3 from '../../assets/images/brands/brands_3.jpg'
import brands4 from '../../assets/images/brands/brands_4.jpg'
import brands5 from '../../assets/images/brands/brands_5.jpg'
import brands6 from '../../assets/images/brands/brands_6.jpg'
import brands7 from '../../assets/images/brands/brands_7.jpg'
import brands8 from '../../assets/images/brands/brands_8.jpg'
function Partners() {
    return(
      <div className="py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 bg-[#FFFFFF]">

            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 border p-2 md:p-4 lg:p-6">
                <Image width={65} height={65} src={brands1} alt=''/>
                <Image width={65} height={65} src={brands2} alt=''/>
                <Image width={65} height={65} src={brands3} alt=''/>
                <Image width={65} height={65} src={brands4} alt=''/>
                <Image width={65} height={65} src={brands5} alt=''/>
                <Image width={65} height={65} src={brands6} alt=''/>
                <Image width={65} height={65} src={brands7} alt=''/>
                <Image width={65} height={65} src={brands8} alt=''/>
            </div>
            
      </div>
    )
}

export default Partners