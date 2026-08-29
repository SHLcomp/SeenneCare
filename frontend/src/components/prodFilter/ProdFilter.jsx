import { useParams } from "react-router-dom";
// import data from "../../assets/data/products.js";
import ProductDisplay from "../../pages/productDisplay/ProductDisplay.jsx";

import { useProducts } from "../../context/ProductContext";
const ProdFilter = () => {
  const { products } = useProducts();
  const { itemSlug } = useParams();
  const item = products.find((e) => e.slug === itemSlug);
  if (!item) return <h1 style={{ padding: "10vh" }}>Product Not Found</h1>;
  return (
    <div>
      <ProductDisplay item={item} />
    </div>
  );
};

export default ProdFilter;
