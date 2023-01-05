import React from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ collections }) => {
  const params = useParams();

  return (
    <div className="shop-page">
      <Routes>
        <Route
          exact
          path="/"
          element={<CollectionsOverview collections={collections} />}
        />
        <Route
          path=":categoryId"
          element={<CollectionPage categoryId={params["*"]} />}
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ShopPage);
