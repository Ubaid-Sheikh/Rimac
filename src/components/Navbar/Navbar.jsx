import "./Navbar.css";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [menu, setmenu] = useState("");

  return (
    <div className="Nav-wrapper">
      <div className="Main-nav">
        <a href="#">Rimac.</a>
        <nav>
          <a
            href="#"
            className={menu === "home" ? "active" : ""}
            onClick={() => {
              setmenu("home");
            }}
          >
            Home
          </a>
          <a
            href="#"
            className={menu === "Collection" ? "active" : ""}
            onClick={() => {
              setmenu("Collection");
            }}
          >
            Collection
          </a>
          <a
            href="#"
            className={menu === "Team" ? "active" : ""}
            onClick={() => {
              setmenu("Team");
            }}
          >
            Team
          </a>
          <a
            href="#"
            className={menu === "contact-us" ? "active" : ""}
            onClick={() => {
              setmenu("contact-us");
            }}
          >
            Contact
          </a>
        </nav>
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
