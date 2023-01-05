import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../collection-item/collection-item.component";

import { selectCollection } from "../../../redux/shop/shop.selectors";
import "./featured-block.styles.scss";

const FeaturedBlock = ({ collection: { title, items } }) => {
  return (
    <div className="featured-block-container">
      <h2 className="block-title">Most Featured</h2>
      <div className="block-items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      <div className="button-overview">
        {" "}
        <p>See all {title}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => ({
  collection: selectCollection(ownprops.categoryId)(state),
});

export default connect(mapStateToProps)(FeaturedBlock);
