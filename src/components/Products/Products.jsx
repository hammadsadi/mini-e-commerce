import ProductItem from "../Shared/ProductItem/ProductItem";

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((item) => (
        <ProductItem product={item} key={item._id} />
      ))}
    </div>
  );
};

export default Products;
