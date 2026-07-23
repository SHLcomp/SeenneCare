import "./Offer.scss";
import mk9 from "../../assets/mk9.jpg";
import mk13 from "../../assets/mk13.jpg";
import { Link } from "react-router-dom";
const Offer = () => {
  return (
    <div className="offer">
      <div className="first">
        <div className="text">
          <h1>
            50% <span>OFF</span>
          </h1>
          <h5>Clean. Vegan. Powerful.</h5>
          <h3 className="cta">Buy Now</h3>
        </div>
      </div>

      <div className="second">
        <div className="text">
          <h1>
            30% <span>OFF</span>
          </h1>
          <h5>Summer sets on sale</h5>
          <h3 className="cta">Buy Now</h3>
        </div>
      </div>

      <div className="third">
            <h1>Beauty That <span className="span">Loves</span> Your <span className="span">Skin</span> Back</h1>
            <p>We redefine glow with clean, conscious beauty.</p>
            <Link to={"/shop"} className="link"><h3 className="cta">See Products</h3></Link>
      </div>
    </div>
  );
};
export default Offer;
