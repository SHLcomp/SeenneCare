import { useLocation } from "react-router-dom";
import "./ProductDisplay.scss";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const ProductDisplay = ({ item }) => {
  const { pathname } = useLocation();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
      <Navbar />

      <section className="productDisplay">
        <div className="breadcrumbs">
          Home / {item.category} / {item.name}
        </div>

        <div className="wrapper">
          <div className="left">
            <div className="image">
              <img src={item.imageSrc} alt={item.name} />
            </div>
          </div>

          <div className="right">
            <div className="eyebrow-div">
              {item.eyebrow?.map((text) => (
                <span className="eyebrow" key={text}>
                  {text}
                </span>
              ))}
            </div>

            <h1>{item.name}</h1>

            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <span>{item.rating}</span>
              <p>({item.reviewCount} Reviews)</p>
            </div>

            <div className="price">
              {item.discountPrice ? (
                <>
                  <span className="discount">
                    {item.discountPrice} {item.currency}
                  </span>

                  <span className="old">
                    {item.price} {item.currency}
                  </span>
                </>
              ) : (
                <span>
                  {item.price} {item.currency}
                </span>
              )}
            </div>

            <p className="description">{item.description}</p>

            <div className="section">
              <h3>Skin Types</h3>

              <div className="chips">
                {item.skinTypes?.map((skin) => (
                  <span key={skin}>{skin}</span>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>Ingredients</h3>

              <div className="chips">
                {item.ingredients?.map((ingredient) => (
                  <span key={ingredient}>{ingredient}</span>
                ))}
              </div>
            </div>

            {item.concerns && (
              <div className="section">
                <h3>Targets</h3>

                <div className="chips">
                  {item.concerns.map((concern) => (
                    <span key={concern}>{concern}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="quantity">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <h3 className="addCart cta">Add to Cart</h3>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDisplay;
