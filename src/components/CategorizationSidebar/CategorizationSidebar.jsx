import { useState } from "react";

const CategorizationSidebar = () => {
  const [rangevalue, setRangeValue] = useState(0);
  // handleChangeBrand
  const handleChangeBrand = (e) => {
    console.log(e.target.value);
  };
  // handleChangeCategory
  const handleChangeCategory = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="space-y-2">
      {/* Brand  */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">Brands</h2>
        <div className="mt-1 space-y-2">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                onChange={handleChangeBrand}
                type="checkbox"
                value="anjans"
                className="size-4 rounded border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">Anjans</strong>
            </div>
          </label>
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                onChange={handleChangeBrand}
                type="checkbox"
                value="nike"
                className="size-4 rounded border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">Nike</strong>
            </div>
          </label>
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                onChange={handleChangeBrand}
                type="checkbox"
                value="sailor"
                className="size-4 rounded border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">Sailor</strong>
            </div>
          </label>
        </div>
      </div>
      {/* Category */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">Category</h2>
        <div className="mt-1 space-y-2">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                onChange={handleChangeCategory}
                type="checkbox"
                value="Women's"
                className="size-4 rounded border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">Women's</strong>
            </div>
          </label>

          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                onChange={handleChangeCategory}
                type="checkbox"
                value="Men's"
                className="size-4 rounded border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">Men's</strong>
            </div>
          </label>
        </div>
      </div>
      {/* Price Range */}
      <div>
        <h2 className="text-lg font-medium text-gray-900">Price Range</h2>
        <div className="mt-1 space-y-2">
          <div>
            <input
              type="range"
              id="cowbell"
              name="cowbell"
              value={rangevalue}
              onChange={(e) => setRangeValue(e.target.value)}
              min="0"
              max="100"
              step="10"
            />
            {rangevalue && <label>max ${rangevalue}</label>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorizationSidebar;
