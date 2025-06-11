import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // addevent listener
  window.addEventListener("scroll", () => {
    if (window.screenY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header>
      {/* header top start */}
      <div>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup"><span>Create Account</span></Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
