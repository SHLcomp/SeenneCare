import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  useGSAP(() => {
    gsap.from(".footer-cont > div", {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 85%",
      },
    });
  });

  return (
    <footer className="footer noise">
      <div className="footer-cont">
        {/* Branding */}
        <div className="brand">
          <h2>Seenne Care</h2>
          <p>
            Thoughtfully crafted skincare designed to nourish, protect, and
            reveal your skin's natural radiance. Gentle formulas inspired by
            self-care, backed by quality ingredients.
          </p>
          <span className="availability">Clean • Gentle • Cruelty-Free</span>
        </div>

        {/* Quick Links */}
        <div className="links">
          <h3>Explore</h3>
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="/">
            Products
          </Link>
          <HashLink className="a" to="/">
            New Arrivals
          </HashLink>{" "}
          {/*Here, I need the user to be able to visit the home page and exactly on the #designs section*/}
          <Link className="a" to="/">
            Contact
          </Link>
        </div>

        {/* Customer Care */}
        <div className="freelance">
          <h3>Customer Care</h3>
          <Link className="a" to="/shipping">
            Shipping
          </Link>
          <Link className="a" to="/returns">
            Returns
          </Link>
          <Link className="a" to="/faq">
            FAQs
          </Link>
        </div>

        {/* Social */}
        <div className="social">
          <h3>Follow Us</h3>
          <a className="a" href="#">
            Instagram
          </a>
          <a className="a" href="#">
            TikTok
          </a>
          <a className="a" href="#">
            Facebook
          </a>
        </div>
      </div>

      <div className="bottom">
        <p>© {new Date().getFullYear()} Seenne Care. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
