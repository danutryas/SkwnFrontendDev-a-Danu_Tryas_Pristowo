import { ChevronRight, PlayCircle, Search } from "../assets/Icons";
import "../styles/banner.scss";

const Banner = () => {
  return (
    <div className="hero">
      <div className="title">
        <h1>
          The kind of <br />
          <span className="highlight">furniture</span> you have <br /> been
          looking for
        </h1>
        <div className="cta">
          <button className="primary">
            <Search />
            <span>SEARCH CATALOG</span>
          </button>
          <button>
            <PlayCircle />
            <span>WATCH VIDEOS</span>
          </button>
        </div>
      </div>
      <div className="sample-product">
        <p className="sample-product-title">HIGHLIGHTED PRODUCT</p>
        <div className="product-details">
          <div className="product-price">$329</div>
          <div className="product-name">Pösht Sofa</div>
          <a href="#">
            <span>VIEW DETAILS</span>
            <ChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
