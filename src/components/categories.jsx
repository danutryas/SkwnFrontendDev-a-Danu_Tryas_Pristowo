import { useState } from "react";
import "../styles/categories.scss";
import Bedroom from "../assets/bedroom.jpg";
import GamingRoom from "../assets/gaming-room.jpg";
import LivingRoom from "../assets/living-room.png";
import HomeOffice from "../assets/home-office.jpg";

const CategorySection = () => {
  const [activeStatus, setActiveStatus] = useState(0);

  const onClickListItem = (index) => {
    setActiveStatus(index);
  };
  const categoryList = [
    {
      name: "Bedroom",
      description:
        "Create your dream bedroom sanctuary with our exquisite furniture sets",
      img: Bedroom,
    },
    {
      name: "Living Room",
      description:
        "Enjoy a great living room aesthetics with your family Designs created for increased comfortability",
      img: LivingRoom,
    },
    {
      name: "Home Office",
      description:
        "Transform your home office into a productive and stylish space with our carefully curated furniture sets",
      img: HomeOffice,
    },
    {
      name: "Gaming Room",
      description:
        "Elevate your gaming experience with our specially designed furniture sets for the gaming room",
      img: GamingRoom,
    },
  ];

  return (
    <section className="category">
      <div className="category-pictures">
        {categoryList.map((category, index) => {
          return (
            <div
              className={`picture-card ${
                activeStatus === index ? "active" : ""
              }`}
              key={index}
              onClick={() => onClickListItem(index)}
            >
              <img src={category.img} alt={category.name} />
            </div>
          );
        })}
      </div>
      <div className="category-information">
        <div className="information-header">
          <div className="category-title">Categories</div>
          <h2 className="category-heading">Furniture Sets Recommendations</h2>
        </div>
        <ul>
          {categoryList.map((category, index) => {
            return (
              <li
                className={`${activeStatus === index ? "active" : ""}`}
                key={index}
                onClick={() => onClickListItem(index)}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default CategorySection;
