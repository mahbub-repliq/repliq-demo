
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchProducts = () => {
    return axios.get('https://manufecture-website-server.onrender.com/products')
}
const fetchBlogs = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

export default function useAPIs() {
    const {data:products, isLoading, error} = useQuery('products', fetchProducts);
    const {data:blogs} = useQuery('products', fetchProducts);
  return (
    <div></div>
  )
}
