//setting up the Navbar component
import React from "react";
import "../components/Navbar.css";

function Navbar(props) {
  console.log(props);

  return (

    <nav className="navbar navbar-default navbar-fixed-top">
      <ul>
        <li className="itemLeft"><a href="/">Borzoi</a></li>
        <li className="itemCenter">What kind of dog is that?</li>
        <li className="itemRight">Woof!</li>
      </ul>
    </nav>

  );
}

export default Navbar;