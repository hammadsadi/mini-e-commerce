import { useQuery } from "@tanstack/react-query";
import ProductItem from "../Shared/ProductItem/ProductItem";
import axios from "axios";
const Products = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/products`
      );
      return data;
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
