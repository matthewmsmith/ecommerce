import React from "react";
import { client } from "../lib/client";

import {
  Product,
  HeroBanner,
  Footer,
  FooterBanner,
  Cart,
  Layout,
} from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Peep Our Best Sellers</h2>
        <p>We have what you need, tell the homies</p>
      </div>

      <div className="products-container">
        {products.map((product, index) =>
          <Product key={index} product={product}/>
        )}
      </div>
      <FooterBanner />
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
