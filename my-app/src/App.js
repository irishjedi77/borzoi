import React, { Component } from "react";
import Navbar from "./components/Navbar/index.js";
import Homepage from "../src/components/Homepage/index.js";
import Footer from "../src/components/Footer/index";






class App extends Component {

    render () {
        return (
            <div className="App">
               <Navbar />
               <Homepage />
               <Footer />
               
               
            </div>
        )
    }

}


export default App;
