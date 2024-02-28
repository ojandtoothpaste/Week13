import React, {useState} from "react";
import "./App.css";


//ANCHOR - Simple NavBar w/ unordered list and list items
class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }
}
  
  export default Navbar;

