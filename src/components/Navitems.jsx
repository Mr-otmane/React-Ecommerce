import React, { useState } from "react";

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
            <Link to="/signup" className='lab-btn me-3'>
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
