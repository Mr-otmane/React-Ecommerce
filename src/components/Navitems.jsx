import React, { useState } from "react";

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // addevent listener
  window.addEventListener("scroll", () => {
    if (window.screenY > 200) {
      setHeaderFixed(true);
    }
  });
  return <div>Navitems</div>;
};

export default Navitems;
