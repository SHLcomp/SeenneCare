import { Link } from "react-router-dom";
import "./Offer2.scss";

const Offer2 = () => {
  return (
    <div className="offer2">
      <div className="cont">
        <div className="img">
          <img src="https://images.pexels.com/photos/20377674/pexels-photo-20377674.jpeg" alt="New Product" />
        </div>
        <div className="text">
          <span className="eyebrow">INTRODUCING</span>
          <h1>Meet Our Hydrating Glow Serum</h1>
          <p>A lightweight serum enriched with skin-loving ingredients that deeply hydrates, restores moisture, and leaves your complexion smooth, fresh, and naturally radiant from the very first drop.</p>
          <div className="cta-div">
            <Link to={"/product/hydrating-glow-serum"} className="link"><h3 className="cta">Discover the Serum</h3></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer2