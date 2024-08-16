import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
const ProductItem = ({ product }) => {
  // console.log(typeof product?.price);
  const options = {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Set to false for 24-hour format
  };
  return (
    <a className="group relative block overflow-hidden">
      <button className="absolute end-4 top-4 z-10  bg-white py-[2px] px-2 text-xs text-gray-900 transition hover:text-gray-900/75 uppercase">
        {product?.brandName}
      </button>
      {/* <button className="absolute start-4 top-4 z-10  bg-white py-[2px] px-2 text-xs text-gray-900 transition hover:text-gray-900/75">
        Man
      </button> */}

      <img
        src={product?.productImage}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        {/* <span className="whitespace-nowrap bg-teal-600 text-white px-3 py-1.5 text-xs font-medium">
          Brand
        </span> */}

        <h3 className=" text-lg font-medium text-gray-900">
          {product?.productName}
        </h3>
        <p>{product?.description}</p>

        <p className="mt-1.5 text-gray-700 font-bold text-lg">
          ${product?.price}
        </p>
        <div className="flex justify-between items-center">
          <p className="flex gap-1 items-center text-sm">
            <FaStar className="text-yellow-600" />{" "}
            <span>Ratings {product?.ratings}</span>
          </p>
          <p className="text-xs">
            {new Date(product?.creationDateTime).toLocaleString(
              undefined,
              options
            )}
          </p>
        </div>

        <form className="mt-4">
          <button className="block w-full rounded bg-teal-600 text-white p-4 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>
        </form>
      </div>
    </a>
  );
};
ProductItem.propTypes = {
  product: PropTypes.object,
};
export default ProductItem;
