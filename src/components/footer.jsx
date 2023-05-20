import DekoorLogo from "../assets/Dekoor-Logo.png";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-information">
        <div className="company-information">
          <div className="image-logo">
            <img src={DekoorLogo} alt="logo dekoor" />
          </div>
          <p>
            Dekoor is a furniture company created to fulfill the needs of family
            with aesthetic feeling in their furniture. Always pay attention to
            details and give clear communication for the customers. Priority of
            our design is comfortability.
          </p>
        </div>
        <p className="copyright">© Copyright 2022 Dekoor</p>
      </div>
      <div className="nav-grid">
        <ul className="support-link">
          <li className="list-heading">Support</li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Shipping & Returns</a>
          </li>
          <li>
            <a href="">Care guide</a>
          </li>
          <li>
            <a href="">Redeem Warranty</a>
          </li>
        </ul>
        <ul className="sosmed-link">
          <li className="list-heading">Social Media</li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">TikTok</a>
          </li>
        </ul>
        <ul className="about-link">
          <li className="list-heading">About Us</li>
          <li>
            <a href="">Our Story</a>
          </li>
          <li>
            <a href="">Designer</a>
          </li>
          <li>
            <a href="">Craftmanship</a>
          </li>
          <li>
            <a href="">Sustainability</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
