import { Search, WorkOutline } from "../assets/Icons";
import "../styles/reason.scss";

const ReasonSection = () => {
  return (
    <section className="reason-to-section">
      <p className="reason-to-title">WHY CHOOSE US?</p>
      <h2 className="title">
        We care about details and the quality of our products
      </h2>
      <ul>
        <li>
          <div className="icon-frame">
            <Search className="icon-search" />
          </div>
          <p>MANUFACTURED WITH QUALITY MATERIALS</p>
        </li>
        <li>
          <div className="icon-frame">
            <p className="icon-number">5</p>
          </div>
          <p>5 YEARS OF WARRANTY FOR EACH PROFUCT</p>
        </li>
        <li>
          <div className="icon-frame">
            <WorkOutline />
          </div>
          <p>20 YEARS OF EXPERTISE</p>
        </li>
      </ul>
    </section>
  );
};
export default ReasonSection;
