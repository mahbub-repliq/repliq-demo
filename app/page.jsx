import Banner from '../Components/HomeComponents/Banner'
import Services from '../Components/HomeComponents/Services'
import Categories from '../Components/HomeComponents/Categories'
import Products from '../Components/HomeComponents/Products'
import Blogs from '../Components/HomeComponents/Blogs'
import Partners from '../Components/HomeComponents/Partners'
export default function Home() {
  return (
    <main className="">
     <Banner />
     <Services />
     <Products />
     <Categories />
     <Blogs />
     <Partners />
    </main>
  )
}
