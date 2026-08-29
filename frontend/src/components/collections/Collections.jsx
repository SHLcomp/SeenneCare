import "./Collections.scss";
// import data from "../../assets/data/products.js";
import Product from "../product/Product.jsx";
import { useProducts } from "../../context/ProductContext";
export const Collections = () => {
  const { products } = useProducts();
  const collectionsItems = products.filter((item) =>
    item.eyebrow?.includes("Collection"),
  );
  return (
    <div className="collections">
      <h1>Our Collections</h1>
      <div className="collection">
        {collectionsItems
          .map((item) => {
            return <Product key={item.id} item={item} eyebrow="Collection" />;
          })}
      </div>
    </div>
  );
};
