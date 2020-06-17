import React from "react";
import { brands, product_type } from "./fitlerType";

const Filters = ({
  filterToggle,
  handleFilter,
  handleFormSubmit,
  filter,
  handleChange,
  resetFilter,
}) => {
  return (
    <div className={`filter ${filterToggle ? "filter extra" : "filter"} `}>
      <div className="filter-btn" onClick={handleFilter}>
        {" "}
        <i className="fas fa-filter"></i>Filters
      </div>
      <div className={`hide ${filterToggle ? " filter-item" : "hide"}`}>
        <form onSubmit={handleFormSubmit}>
          <label>
            Brand:
            {/*   <input
            type="text"
            value={filter.brand}
            onChange={handleChange}
            name="brand"
       /> */}
            <select
              value={filter.brand}
              name="brand"
              onChange={handleChange}
              onBlur={handleChange}
            >
              {brands.map((brand, index) => {
                return (
                  <option value={brand} key={index}>
                    {brand}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Product Type:
            <select
              value={filter.productType}
              name="productType"
              onChange={handleChange}
              onBlur={handleChange}
            >
              {product_type.map((productTypeItem, index) => {
                return (
                  <option value={productTypeItem} key={index}>
                    {productTypeItem}
                  </option>
                );
              })}
            </select>
          </label>

          <button className="btn">
            <i class="fas fa-search"></i>
          </button>
        </form>
        <div className="reset-filter">
          <button className="btn" onClick={resetFilter}>
            All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
