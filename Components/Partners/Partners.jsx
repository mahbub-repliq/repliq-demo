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
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-5 border p-3 md:p-5 lg:p-8">
                <Image width={80} height={80} src={brands1} />
                <Image width={80} height={80} src={brands2} />
                <Image width={80} height={80} src={brands3} />
                <Image width={80} height={80} src={brands4} />
                <Image width={80} height={80} src={brands5} />
                <Image width={80} height={80} src={brands6} />
                <Image width={80} height={80} src={brands7} />
                <Image width={80} height={80} src={brands8} />
            </div>
      </div>
    )
}

export default Partners