import "./Product.scss";
import { Link } from "react-router-dom";

const Product = ({ item, eyebrow }) => {
  return (
    <div
      className="product"
      data-text={eyebrow}
    >
      <Link to={`/product/${item.slug}`} className="link">
        <div className="img">
          <img src={item.imageSrc} alt={item._id} />
        </div>
      </Link>
      <div className="text">
        <Link to={`/product/${item.slug}`} className="link2 a"><h3>{item.name}</h3></Link>
        <div className="info">
          <p>
            {item.price} <span>{item.currency}</span>
          </p>
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <span>({item.reviewCount})</span>
          </div>
        </div>
        <div className="ctas">
          <h3 className="cta">Add to cart</h3>
          <i className="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;
