import React from "react";
import "./PropertiesCard.css";
const PropertiesCard = ({ image, title, description, price }) => {
  return (
    <div className="propertiesCard">
      <img src={image} alt="property" />
      <div className="propertiesCard__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        {price && <h3>{price}</h3>}
      </div>
    </div>
  );
};

export default PropertiesCard;


