import { MailIcon } from "../assets/Icons";
import "../styles/newsletter.scss";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-info">
        <p className="newsletter-title">LIMITED DEALS</p>
        <h2 className="title">
          Become a member and get 10% off of your first purchase
        </h2>
      </div>
      <div className="subscription">
        <input type="email" name="email" placeholder="Enter your email here" />
        <button className="icon-frame">
          <MailIcon />
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;
