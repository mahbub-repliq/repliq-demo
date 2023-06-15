import Banner from '../Components/Banner/Banner'
import Services from '../Components/Services/Services'
import Categories from '../Components/Categories/Categories'
import Products from '../Components/Products/Products'
import Blogs from '../Components/Blogs/Blogs'
import Partners from '../Components/Partners/Partners'
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
