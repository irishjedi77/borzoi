//setting up the Navbar component
import React from "react";
import "../Navbar/Navbar.css";

function Navbar(props) {
  console.log(props);

  return (

    <nav className="navbar navbar-default navbar-fixed-top">
      <ul>
        <li className="itemLeft"><a href="/">Borzoi</a></li>
        <li className="itemCenter"><i class="fas fa-bone"></i></li>
        <li className="itemRight"><a href="mailto:lora.koretz@icloud.com"><i class="fas fa-envelope-square" id="fas-fa-envelope-square"></i></a><a href="https://www.facebook.com/lorakoretz"><i class="fab fa-facebook-square"></i></a>
        <a href="https://en.wikipedia.org/wiki/Borzoi"><i class="fas fa-paw"></i></a>
        <li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn"><i class="fas fa-caret-square-down"></i>

</a>
      <div class="dropdown-content">
          <a href="https://www.facebook.com/lorakoretz">Link 1</a>
          <a href="https://www.facebook.com/lorakoretz">Link 2</a>
          <a href="https://www.facebook.com/lorakoretz">Link 3</a>
      </div>
        </li>
          </li>
       

      </ul>
    </nav>

  );
}

export default Navbar;