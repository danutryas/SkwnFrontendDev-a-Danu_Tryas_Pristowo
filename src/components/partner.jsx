import company1 from "../assets/Company logo.png";
import company2 from "../assets/Company logo-1.png";
import company3 from "../assets/Company logo-2.png";
import company4 from "../assets/Company logo-3.png";
import "../styles/partner.scss";

const PartnerSection = () => {
  const companyLogo = [company1, company2, company3, company4];
  return (
    <section className="partner-section">
      <div className="total-partner">
        <h2>25+</h2>
        <p>partnered brands</p>
      </div>
      <ul className="partners">
        {companyLogo.map((logo, index) => {
          return (
            <li key={index}>
              <img src={logo} alt="company logo" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PartnerSection;
