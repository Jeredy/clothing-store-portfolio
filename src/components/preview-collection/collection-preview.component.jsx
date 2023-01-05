import React from "react";
import { useNavigate } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  const navigate = useNavigate();

  const slide = (direction) => {
    let container = document.getElementById(`${title}`);

    if (direction == "left") {
      container.scrollLeft -= 290;
    } else {
      container.scrollLeft += 290;
    }
  };

  return (
    <div className="container-collection-preview">
      <h1 className="title">{title} - Mais Comprados</h1>
      <div id={`${title}`} className="collection-preview">
        <div className="preview">
          {items
            .filter((item, index) => index < 8)
            .map((item, index) => (
              <CollectionItem key={item.id} item={item} index={index} />
            ))}
        </div>
      </div>
      <div className="button-overview" onClick={() => navigate("/shop/hats")}>
        {" "}
        <p>See all {title}</p>
      </div>
      <div className="arrow-container-collection">
        <button
          className="arrow-background arrow-left"
          type="button"
          onClick={() => slide("left")}
        >
          <AiOutlineLeft className="arrow" />
        </button>
        <button
          type="button"
          className="arrow-background arrow-right"
          onClick={() => slide("right")}
        >
          <AiOutlineRight className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default CollectionPreview;
