import "./BestSellers.scss";
// import data from "../../assets/data/products";
// used for sample data from a data js file ^
import Product from "../product/Product";
// import { useEffect } from "react";
// import { useState } from "react";
import { useProducts } from "../../context/ProductContext";

const BestSellers = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await fetch("http://localhost:5000/api/products");

  //     const data = await response.json();

  //     setProducts(data);
  //   };

  //   getProducts();
  // }, []);

  const { products } = useProducts();
  const bestSellers = products.filter((item) =>
    item.eyebrow?.includes("best-seller"),
  );

  return (
    <div className="bestsellers">
      <h1>Chosen for you</h1>
      <div className="cards">
        {bestSellers.map((item) => (
          <Product key={item._id} item={item} eyebrow="Best Seller" />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
