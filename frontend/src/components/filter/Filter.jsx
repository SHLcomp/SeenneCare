import React from "react";
import "./Filter.scss";

import { useProducts } from "../../context/ProductContext";
// import products from "../../assets/data/products";

const Filter = () => {
  // Dynamic categories from products
  const { products } = useProducts();
  const productsP = products.map((product)=> product)

  const categories = [
    "all",

    ...new Set(productsP.map((product) => product.category)),
  ];

  // Dynamic skin types

  const skinTypes = [
    "all",

    ...new Set(
      productsP
        .flatMap((product) => product.skinTypes)
        .filter((type) => type !== "All Skin Types"),
    ),
  ];

  const { filters, updateFilter, clearFilters } = useProducts();

  return (
    <aside className="filtering">
      <h2>Filter Products</h2>

      {/* SORT */}

      <div className="filter-group">
        <h4>Sort By</h4>

        <select
          value={filters.sort}
          onChange={(e) => updateFilter("sort", e.target.value)}
        >
          <option value="price-low">Price: Low to High</option>

          <option value="price-high">Price: High to Low</option>

          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* CATEGORY */}

      <div className="filter-group">
        <h4>Category</h4>

        {categories.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              checked={filters.category === category}
              onChange={() => updateFilter("category", category)}
            />

            {category === "all" ? "All Products" : category}
          </label>
        ))}
      </div>

      {/* SKIN TYPE */}

      <div className="filter-group">
        <h4>Skin Type</h4>

        {skinTypes.map((type) => (
          <label key={type}>
            <input
              type="radio"
              name="skin"
              checked={filters.skinType === type}
              onChange={() => updateFilter("skinType", type)}
            />

            {type === "all" ? "All Skin Types" : type}
          </label>
        ))}
      </div>

      {/* RATING */}

      <div className="filter-group">
        <h4>Rating</h4>

        <select
          value={filters.rating}
          onChange={(e) => updateFilter("rating", Number(e.target.value))}
        >
          <option value="0">Any Rating</option>

          <option value="4">4★ & up</option>

          <option value="4.5">4.5★ & up</option>

          <option value="4.8">4.8★ & up</option>
        </select>
      </div>

      <button className="clear" onClick={clearFilters}>
        Clear Filters
      </button>
    </aside>
  );
};

export default Filter;
