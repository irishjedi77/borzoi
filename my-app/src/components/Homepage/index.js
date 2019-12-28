import React, { Component } from "react";
import "../Homepage/Homepage.css";
import Chernya from "/Users/irishjedi77/code/homework/borzoi/my-app/src/images/Chernya2.JPG";
import Veter from "/Users/irishjedi77/code/homework/borzoi/my-app/src/images/Veter1.jpg";


class Homepage extends Component {
    render() {
      return (

        <div>
        <header className="header">
        <div className="boxed">
            <img src={Chernya} id="chernya" alt= "black borzoi dog"/>
            <img src={Veter} id="veter" alt= "brown and white borzoi dog" />
        </div>
        </header>
        </div>
       
      );
    }
  }

  
  export default Homepage;