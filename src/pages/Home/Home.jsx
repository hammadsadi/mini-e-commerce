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
  const searchText = useRef();
  // handleSearch
  const handleSearch = () => {
    setSearch(searchText?.current.value);
  };

  // handleChangeSort
  const handleChangeSort = (e) => {
    setSortBy(e.target.value);
  };

  // Handle Brand
  const handleBrand = (e) => {
    setBrand(e.target.value);
  };

  // Handle Brand
  const handleCategory = (e) => {
    setCategory(e.target.value);
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
  };
  // Get Data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/products`,
          {
            params: { search, brand, category, minPrice, maxPrice, sortBy },
          }
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [search, brand, category, minPrice, maxPrice, sortBy]);

  if (loading) return <Loader />;
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
            <Products products={products} />
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Home;
