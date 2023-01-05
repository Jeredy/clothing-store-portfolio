import React from "react";
import Banner from "../../components/banner/banner.component";

import FeaturedLine from "../../components/featured/featured-line/featured-line.components";
import SHOP_DATA from "../../redux/shop/shop.data";
import Directory from "../../components/directory/directory.component";
import Brands from "../../components/brands/brands.components";
import FeaturedBlock from "../../components/featured/featured-block/featured-block.components";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Banner />
    <FeaturedLine collections={SHOP_DATA.hats} />
    <Directory firstPosition />
    <Brands />
    <Directory />
    <FeaturedBlock categoryId="hats" />
  </div>
);

export default HomePage;
