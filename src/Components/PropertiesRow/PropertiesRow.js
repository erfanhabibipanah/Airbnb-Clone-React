import React from "react";
import PropertiesCard from "../PropertiesCard/PropertiesCard";
import "./PropertiesRow.css";
const PropertiesRow = ({ items }) => {
  return (
    <div className="propertiesRow">
      {items.map((ele) => {
        return (
          <PropertiesCard
              key={ele.title}
            image={ele.src}
            title={ele.title}
            description={ele.description}
            price={ele.price}
          />
        );
      })}
    </div>
  );
};

export default PropertiesRow;
