import React from "react";
import './Navbar.css'

const Navbar = () => {
  return(
    <div className="Navbar">
      <div>
        <a href="/">Header</a>
      </div>
      <div>
      <a href="/"> SignUp </a>
      <a href="/Profile"> Profile </a> 
      </div>
          
    </div>
  );
}

export default Navbar;