import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../Commons/Header'
import Footer from '../Commons/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Repliq Test',
  description: 'Basic E-Commerce',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`inter.className`}>
        <Header/>
        {children}
        <Footer />
        </body>
    </html>
  ) 
}
