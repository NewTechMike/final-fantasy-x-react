import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles ={
  display: "inline-block",
  width: "75px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lightblue",
  textDecoration: "none",
  color: "white",
  //fill this with the style of the nav boxes
  // at the top of the page
};

function NavBar(){
  return (
    <div>
      <NavLink 
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "gold",
        }}
      >
        Home
      </NavLink>
      <NavLink 
        to="/characters"
        exact
        style={linkStyles}
        activeStyle={{
          background: "gold",
        }}
        >
          Characters
        </NavLink>
        <NavLink
          to="/celestialweapons"
          exact
          style={linkStyles}
          activeStyle={{
            background: "gold",
          }}
        >
            Celestial Weapons
        </NavLink>
        <NavLink
          to="/story"
          exact
          style={linkStyles}
          activeStyle={{
            background: "gold",
          }}
        >
            Story
        </NavLink>
        <NavLink
          to="/newchar"
          exact
          style={linkStyles}
          activeStyle={{
            background: "gold",
          }}
        >
            New Character Form
        </NavLink>
      {/*continue with the other components 
      like "characters and celestial weapons" */}
    </div>
  )
}

export default NavBar;