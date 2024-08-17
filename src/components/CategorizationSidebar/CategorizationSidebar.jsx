import RadioField from "../Shared/RadioField/RadioField";

const CategorizationSidebar = ({
  handleBrand,
  handleCategory,
  handlePriceRange,
}) => {
  return (
    <div className="space-y-2">
      {/* Brand  */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">Brands</h2>
        <div className="mt-1 space-y-2">
          <RadioField
            handleChangeRadio={handleBrand}
            value="anjans"
            name="brand"
            title="Anjans"
          />
          <RadioField
            handleChangeRadio={handleBrand}
            value="nike"
            name="brand"
            title="Nike"
          />
          <RadioField
            handleChangeRadio={handleBrand}
            value="sailor"
            name="brand"
            title="Sailor"
          />
        </div>
      </div>
      {/* Category */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">Category</h2>
        <div className="mt-1 space-y-2">
          <RadioField
            handleChangeRadio={handleCategory}
            value="Women's"
            name="category"
            title="Women's"
          />
          <RadioField
            handleChangeRadio={handleCategory}
            value="Men's"
            name="category"
            title="Men's"
          />
        </div>
      </div>
      {/* Price Range */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">Price Range</h2>
        <div className="mt-1 space-y-2">
          <div>
            <RadioField
              handleChangeRadio={handlePriceRange}
              value="50"
              name="price"
              title="$0-50"
            />
            <RadioField
              handleChangeRadio={handlePriceRange}
              value="100"
              name="price"
              title="$50-100"
            />
            <RadioField
              handleChangeRadio={handlePriceRange}
              value="150"
              name="price"
              title="$100-150"
            />
            <RadioField
              handleChangeRadio={handlePriceRange}
              value="200"
              name="price"
              title="Over-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorizationSidebar;
