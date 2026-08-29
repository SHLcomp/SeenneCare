import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.scss";
import img from "../../assets/mk8.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const bubblesRef = useRef([]);

  useLayoutEffect(() => {
    const floatBubble = (bubble) => {
      gsap.to(bubble, {
        x: gsap.utils.random(-40, 40),
        y: gsap.utils.random(-40, 40),
        rotation: gsap.utils.random(-15, 15),
        duration: gsap.utils.random(4, 8),
        ease: "sine.inOut",
        onComplete: () => floatBubble(bubble),
      });
    };

    bubblesRef.current.forEach((bubble) => {
      if (!bubble) return;

      // Random starting offset
      gsap.set(bubble, {
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-20, 20),
        rotation: gsap.utils.random(-10, 10),
      });

      // Start floating
      floatBubble(bubble);

      // Gentle breathing effect
      gsap.to(bubble, {
        scale: gsap.utils.random(0.92, 1.08),
        duration: gsap.utils.random(2, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Cleanup when component unmounts
    return () => {
      gsap.killTweensOf(bubblesRef.current);
    };
  }, []);

  return (
    <div className="hero noise">
      <div className="text">
        <h1>
          Stay Fresh <br /> Stay <span className="span">Glowy</span>
        </h1>

        <p>Hydrate your skin with Seenne Care. Healthy skin starts here.</p>

        <div className="ctas">
          <Link to={"/shop"} className="link"><h3 className="cta">Shop Now</h3></Link>
        </div>

        <div className="info-div">
          <div className="info">
            <i className="fa-solid fa-leaf"></i>
            <div className="txt">
              <h4>Natural Ingredients</h4>
              <p>Safe and Organic</p>
            </div>
          </div>

          <div className="info">
            <i className="fa-solid fa-user-doctor"></i>
            <div className="txt">
              <h4>Dermatologist Tested</h4>
              <p>Clinically Proven</p>
            </div>
          </div>

          <div className="info">
            <i className="fa-solid fa-lock-open"></i>
            <div className="txt">
              <h4>Cruelty Free</h4>
              <p>Love Animals</p>
            </div>
          </div>
        </div>
      </div>

      <div className="img">
        <div className="bubbles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (bubblesRef.current[i] = el)}
              className={`bubble b${i + 1}`}
            ></div>
          ))}
        </div>

        <div className="img-div">
          <img src={img} alt="Seenne skincare product" />
        </div>
      </div>
    </div>
  );
};

export default Hero;