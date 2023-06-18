import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const useDataFetch = () => {
  const [productsQueries, postsQueries] = useQueries({
    queries: [
      {
        queryKey: ["products"],
        queryFn: async () =>
          axios
            .get("https://manufecture-website-server.onrender.com/products")
            .then((res) => res.data),
      },
      {
        queryKey: ["posts"],
        queryFn: async () =>
          axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.data),
      },
    ],
  });
  console.log(
    "Got all products.........",
    productsQueries?.data,
    "Got all posts.......",
    postsQueries?.data
  );
  return [productsQueries, postsQueries];
};

export default useDataFetch;
