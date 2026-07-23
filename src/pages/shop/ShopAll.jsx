import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import "./ShopAll.scss";
import Footer from "../../components/footer/Footer";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Filter from "../../components/filter/Filter";
import { useProducts } from "../../context/ProductContext";

const ShopAll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

   const { displayedProducts } =
      useProducts();
  


  return (
    <>
      <Navbar />

      <div className="shop">
        {/* FILTER SIDEBAR */}

        <Filter />

        {/* PRODUCTS */}

        <main className="shopping-div">
          <div className="breadcrumbs">Home / Shop</div>

          <h5>Shop Our Products</h5>

          <div className="shop-all">
            <div className="products">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <Product
                    key={product.id}
                    item={product}
                    eyebrow={product.eyebrow[0]}
                  />
                ))
              ) : (
                <div className="empty-message">
                  <h3>No products match your filters</h3>

                  <p>Try changing your filters to discover more products.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ShopAll;
