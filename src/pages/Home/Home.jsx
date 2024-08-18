import { useEffect, useRef, useState } from "react";
import CategorizationSidebar from "../../components/CategorizationSidebar/CategorizationSidebar";
import Products from "../../components/Products/Products";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import axios from "axios";
import Loader from "../Loader/Loader";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const searchText = useRef();
  // Pagination State
  const [itemPerPage, setItemPerPage] = useState(6);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // handleSearch
  const handleSearch = () => {
    setSearch(searchText?.current.value);
    setCurrentPage(1);
  };

  // handleChangeSort
  const handleChangeSort = (e) => {
    setSortBy(e.target.value);
  };

  // Handle Brand
  const handleBrand = (e) => {
    setFilter(e.target.value);
    setBrand(e.target.value);
    setCurrentPage(1);
  };

  // Handle Brand
  const handleCategory = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  // Handle Brand
  const handlePriceRange = (e) => {
    let calcMaxPrice = 0;
    let calcMinPrice = 0;
    const priceCount = parseInt(e.target.value);
    if (priceCount === 50) {
      calcMinPrice = 0;
      calcMaxPrice = 50;
    } else if (priceCount === 100) {
      calcMinPrice = 50;
      calcMaxPrice = 100;
    } else if (priceCount === 150) {
      calcMinPrice = 100;
      calcMaxPrice = 150;
    } else if (priceCount === 200) {
      calcMinPrice = 150;
      calcMaxPrice = 500;
    }
    setMaxPrice(calcMaxPrice);
    setMinPrice(calcMinPrice);
    setCurrentPage(1);
  };
  // Get Data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/products?page=${currentPage}&size=${itemPerPage}&filter=${filter}&category=${category}&brand=${brand}&minPrice=${minPrice}&maxPrice=${maxPrice}&search=${search}&sortBy=${sortBy}`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [
    filter,
    currentPage,
    itemPerPage,
    category,
    brand,
    minPrice,
    maxPrice,
    search,
    sortBy,
  ]);

  // Get Data Count
  // Get Data
  useEffect(() => {
    const fetchProductsCounts = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/product-count?filter=${filter}&category=${category}&brand=${brand}&minPrice=${minPrice}&maxPrice=${maxPrice}&search=${search}`
        );
        console.log(data.count);
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProductsCounts();
  }, [filter, category, brand, minPrice, maxPrice, search]);

  // Pagination

  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  // Handle Current Page
  const handleCurrentPage = (number) => {
    setCurrentPage(number);
  };
  console.log(currentPage);
  // if (loading) return <Loader />;
  return (
    <div>
      <MyContainer>
        <div className="my-5 md:my-10">
          {/* Section Title */}
          <SectionTitle title="Chose Your Awesome Product" />
          {/* Product Query */}
          <div className="flex justify-center items-center md:relative mt-2 md:mt-4 ">
            {/* Searching */}
            <div>
              <div className="relative">
                <label htmlFor="Search" className="sr-only">
                  {" "}
                  Search{" "}
                </label>

                <input
                  type="text"
                  ref={searchText}
                  id="Search"
                  name="search"
                  placeholder="Search for..."
                  className="w-full rounded-md border outline-none px-3 py-1 border-gray-200 focus:border-teal-600 pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    onClick={handleSearch}
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            {/* Sorting */}
            <div className="md:absolute md:right-0">
              <select
                name=""
                id=""
                onChange={handleChangeSort}
                className="py-1 px-2 outline-none border-gray-200 border focus:border-teal-600"
              >
                <option>Sort</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
                <option value="newestFirst">Newest first</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:static md:grid md:grid-cols-6 gap-4">
          {/* Categorization Sidebar */}
          <div className="md:col-span-1">
            <CategorizationSidebar
              handleBrand={handleBrand}
              handleCategory={handleCategory}
              handlePriceRange={handlePriceRange}
            />
          </div>
          {/* Products */}
          <div className="md:col-span-5">
            {products.length > 0 ? (
              <Products products={products} />
            ) : (
              <h2 className="text-3xl font-bold text-teal-600 text-center">
                Product Not Found
              </h2>
            )}

            {/* Pagination */}
            <ol className="flex justify-center gap-1 text-xs font-medium my-3">
              {products?.length > 0 ? (
                <li>
                  <button
                    disabled={currentPage === 1}
                    onClick={() => handleCurrentPage(currentPage - 1)}
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 disabled:cursor-not-allowed"
                  >
                    <span className="">Prev</span>
                  </button>
                </li>
              ) : (
                ""
              )}

              {pages?.map((btnItem) => (
                <li
                  key={btnItem}
                  className={`block size-8 rounded ${
                    currentPage === btnItem
                      ? "border-teal-600 bg-teal-600 text-white"
                      : "text-black"
                  } text-center leading-8`}
                >
                  <button onClick={() => handleCurrentPage(btnItem)}>
                    {btnItem}
                  </button>
                </li>
              ))}

              {products?.length > 0 ? (
                <li>
                  <button
                    disabled={currentPage === numberOfPages}
                    onClick={() => handleCurrentPage(currentPage + 1)}
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 disabled:cursor-not-allowed rtl:rotate-180"
                  >
                    <span className="">Next</span>
                  </button>
                </li>
              ) : (
                ""
              )}
            </ol>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Home;
