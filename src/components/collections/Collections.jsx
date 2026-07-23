import "./Collections.scss";
import data from "../../assets/data/products.js";
import Product from "../product/Product.jsx";
export const Collections = () => {
  return (
    <div className="collections">
      <h1>Our Collections</h1>
      <div className="collection">
      {data
        .filter((item) => item.eyebrow.includes("Collection"))
        .map((item) => {
          return (
              <Product key={item.id} item={item} eyebrow="Collection" />
            );
          })}
          </div>
    </div>
  );
};
