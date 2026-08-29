import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import "./Shop.scss";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import { useProducts } from "../../context/ProductContext";

const Shop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  const { filterType, filterValue } = useParams();

  // Products after applying the sidebar filters
  const { displayedProducts } = useProducts();

  // Apply URL filter on top of the sidebar filters
  let filtered = displayedProducts;

  if (filterType && filterValue) {
    switch (filterType) {
      case "category":
        filtered = displayedProducts.filter(
          (product) =>
            product.category.toLowerCase() === filterValue.toLowerCase()
        );
        break;

      case "eyebrow":
        filtered = displayedProducts.filter((product) =>
          product.eyebrow.some(
            (eye) => eye.toLowerCase() === filterValue.toLowerCase()
          )
        );
        break;

      case "tag":
        filtered = displayedProducts.filter((product) =>
          product.tags?.some(
            (tag) => tag.toLowerCase() === filterValue.toLowerCase()
          )
        );
        break;

      default:
        filtered = displayedProducts;
    }
  }

  return (
    <>
      <Navbar />

      <div className="shop">
        <Filter />

        <div className="shopping-div">
          {/* Filtered Section */}
          <div className="shop-filtered">
            <div className="breadcrumbs">
              Home / {filterValue ? filterValue.toUpperCase() : "SHOP"}
            </div>

            <h5>
              {filterValue
                ? `Shop For ${filterValue.toUpperCase()} Products`
                : "Shop All Products"}
            </h5>

            <div className="products">
              {filtered.length > 0 ? (
                filtered.map((product) => (
                  <Product
                    key={product.id}
                    item={product}
                    eyebrow={product.eyebrow[0]}
                  />
                ))
              ) : (
                <div className="empty-message">
                  <h3>No products found for "{filterValue}"</h3>

                  <p>
                    We couldn't find any products in this section. Explore our
                    other products or check back soon.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* All products after sidebar filtering */}
          <div className="shop-all">
            <h4>Shop Our Products</h4>

            <div className="all-products-cont">
              {displayedProducts.map((item) => (
                <Product
                  key={item.id}
                  item={item}
                  eyebrow={item.eyebrow[0]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;