import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";

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
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(productData);
  //   console.log(productData);

  // search funtionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // filtering products based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.tolowerCase())
    );
    setfilteredProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <input
              type="text"
              none="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
            />
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {
                searchInput && filteredProducts.map((product, i) => <li key={i}>
                    <Link></Link>
                </li>)
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
