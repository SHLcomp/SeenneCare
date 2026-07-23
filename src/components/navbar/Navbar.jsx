import "./Navbar.scss";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="nav-cont">
      <div className="banner">
        <h3>Summer Sale up to 30%</h3>
      </div>

      <nav>
        <Link className="brand link" to="/">
          <h1>Seenne Care</h1>
        </Link>

        <ul className="nav-links">
          <li><Link className="link" to="/shop/eyebrow/new">New</Link></li>
          <li><Link className="link" to="/shop/eyebrow/sales">Summer Sales</Link></li>
          <li><Link className="link" to="/shop/category/makeup">Makeup</Link></li>
          <li><Link className="link" to="/shop/category/skincare">Skin care</Link></li>
          <li><Link className="link" to="/shop/eyebrow/best-seller">Best Sellers</Link></li>
        </ul>

        <ul className="nav-icons">
          <li><i className="fa-brands fa-sistrix"></i></li>
          <li><i className="fa-solid fa-bag-shopping"></i></li>
          <li><i className="fa-solid fa-user"></i></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;