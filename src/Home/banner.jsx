import React from "react";

const title = (
  <h2>
    Search Your One From <span>Thousand</span> Of Products
  </h2>
);

const desc = "we have the largest collection of products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">{title}</div>
      </div>
    </div>
  );
};

export default Banner;
