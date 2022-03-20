import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top-nav">
        <div className="logo">digipol</div>
        <div className="tel">call +234 08123583317 </div>
      </div>
      <hr></hr>
      <div className="bottom-nav">
        <div className="nav-menu">home</div>
        <div className="nav-menu">service</div>
        <div className="nav-menu">insight</div>
        <div className="nav-menu">about us</div>
        <div className="nav-menu">contact us</div>
      </div>
    </div>
  );
};

export default Navbar;
