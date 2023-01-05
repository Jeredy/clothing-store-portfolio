import React from "react";
import { brands } from "../../data/brands";
import "./brands.styles.scss";

function Brands() {
  return (
    <div className="brands-container">
      {brands.map(({ image, link }) => (
        <div className="brand-image-container">
          <img src={image} className="brand-image" />
        </div>
      ))}
    </div>
  );
}

export default Brands;
