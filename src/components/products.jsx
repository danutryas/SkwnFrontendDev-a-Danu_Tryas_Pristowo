import { ArrowBack, ArrowForward } from "../assets/Icons";
import "../styles/products.scss";
import img1 from "../assets/bedroom.jpg";
import img2 from "../assets/gaming-room.jpg";
import img3 from "../assets/home-office.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://kohls.p.rapidapi.com/products/list",
  params: {
    limit: "8",
    offset: "2",
    dimensionValueID: "AgeAppropriate:Teens",
  },
  headers: {
    "X-RapidAPI-Key": "08c01b23f3msh8bcce4290c5cbf1p1d749djsn832cbc98e823",
    "X-RapidAPI-Host": "kohls.p.rapidapi.com",
  },
};

const ProductSection = () => {
  const sliderEl = useRef(null);
  const [activeCard, setActiveCard] = useState(1);
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        await axios
          .request(options)
          .then((data) => setDataProduct(data.data.payload.products));
      };
      getData();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const slideLeft = () => {
    if (activeCard > 0) {
      setActiveCard((prev) => prev - 1);
      if (document.documentElement.clientWidth) {
        sliderEl.current.scrollLeft = sliderEl.current.scrollLeft - 150;
      } else {
        sliderEl.current.scrollLeft = sliderEl.current.scrollLeft - 300;
      }
    }
  };

  const slideRight = () => {
    if (Math.abs(activeCard - dataProduct.length) > 1) {
      setActiveCard((prev) => prev + 1);
      if (document.documentElement.clientWidth) {
        sliderEl.current.scrollLeft = sliderEl.current.scrollLeft + 150;
      } else {
        sliderEl.current.scrollLeft = sliderEl.current.scrollLeft + 300;
      }
    }
  };
  return (
    <section className="products">
      <header className="product-header">
        <div className="header-text">
          <div className="header-title">our products</div>
          <div className="header-desc">This month’s best seller</div>
        </div>
        <div className="header-action">
          <a href="" className="see-more">
            see more
          </a>
        </div>
      </header>
      <div className="products-carousel">
        <div className="product-list" ref={sliderEl}>
          {dataProduct.map((produk, index) => {
            return (
              <div
                className={`product-card ${
                  activeCard === index ? "active" : ""
                }`}
              >
                <div className="product-information">
                  <div className="product-price">
                    ${produk.prices[0]?.regularPrice.minPrice}
                  </div>
                  <div className="product-name">
                    {produk.productTitle.slice(0, 15)}
                  </div>
                </div>
                <img src={produk.image.url} alt="" />
              </div>
            );
          })}
        </div>
        <div className="carousel-handler">
          <buutton className="icon-frame" onClick={slideLeft}>
            <ArrowBack />
          </buutton>
          <buutton className="icon-frame" onClick={slideRight}>
            <ArrowForward />
          </buutton>
        </div>
      </div>
    </section>
  );
};
export default ProductSection;
