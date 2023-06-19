import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMultipleDataFetch = () => {
  
  const { isLoading:isloadingProducts , error:productsError, data:products } = useQuery({
    queryKey: ["products"],
    queryFn: async () =>
    await fetch(`https://manufecture-website-server.onrender.com/products`).then(
      (res) => res.json()
      ),
    });
    
    const { isLoading:isloadingPosts , error:postsError, data:posts } = useQuery({
      queryKey: ["posts"],
      queryFn: async () =>
      await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
        (res) => res.json()
        ),
      });
      
      
      console.log('Data got from hook', products, posts)
    return [products, posts, isloadingProducts, isloadingPosts];
};

export default useMultipleDataFetch;
