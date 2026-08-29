import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Products fetched from the backend
  const [products, setProducts] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState(null);

  // Fetch products from Express API
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Filters
  const [filters, setFilters] = useState({
    category: "all",
    skinType: "all",
    rating: 0,
    sort: "featured",
  });

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: "all",
      skinType: "all",
      rating: 0,
      sort: "featured",
    });
  };

  // Filter products
  let displayedProducts = products.filter((product) => {
    if (filters.category !== "all" && product.category !== filters.category) {
      return false;
    }

    if (
      filters.skinType !== "all" &&
      !product.skinTypes.includes(filters.skinType)
    ) {
      return false;
    }

    if (product.rating < filters.rating) {
      return false;
    }

    return true;
  });

  // Sort by price: low → high
  if (filters.sort === "price-low") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => a.price - b.price,
    );
  }

  // Sort by price: high → low
  if (filters.sort === "price-high") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => b.price - a.price,
    );
  }

  // Sort by rating
  if (filters.sort === "rating") {
    displayedProducts = [...displayedProducts].sort(
      (a, b) => b.rating - a.rating,
    );
  }

  return (
    <ProductContext.Provider
      value={{
        // All products from database
        products,

        // Filtered/sorted products
        displayedProducts,

        // Filter state
        filters,

        // Filter functions
        updateFilter,
        clearFilters,

        // API state
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
