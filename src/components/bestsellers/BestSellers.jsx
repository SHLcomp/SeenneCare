import "./BestSellers.scss";
import data from "../../assets/data/products";
import Product from "../product/Product";

const BestSellers = () => {
  return (
    <div className="bestsellers">
      <h1>Chosen for you</h1>
      <div className="cards">
        {data
          .filter((item) => item.eyebrow.includes("best-seller"))
          .map((item) => (
            <Product key={item.id} item={item} eyebrow="Best Seller"/>
          ))}
      </div>
    </div>
  );
};

export default BestSellers;
