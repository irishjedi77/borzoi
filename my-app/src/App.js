import React, { Component } from "react";
import Navbar from "./components/Navbar/index.js";
import Homepage from "../src/components/Homepage/index.js";






class App extends Component {

    render () {
        return (
            <div className="App">
               <Navbar />
               <Homepage />
               
               
            </div>
        )
    }

}


export default App;
