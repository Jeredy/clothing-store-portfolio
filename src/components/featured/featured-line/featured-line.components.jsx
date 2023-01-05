import React from "react";
import CollectionPreview from "../../preview-collection/collection-preview.component";
import "./featured-line.styles.scss";

const FeaturedLine = ({ collections }) => {
  return (
    <div className="featured-container">
      {" "}
      <CollectionPreview {...collections} />
    </div>
  );
};

export default FeaturedLine;