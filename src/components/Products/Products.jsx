import ProductItem from "../Shared/ProductItem/ProductItem";

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductItem />
    </div>
  );
};

export default Products;
