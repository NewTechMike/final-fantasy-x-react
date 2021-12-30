import React from "react";
import List from "./List";
import { Link } from "react-router-dom";
 
function CelestialWeapons({celestial}){
  console.log("(Ce)cels: ",celestial)
  const displayCels = celestial.map((weapons, id) => {
    return <List 
      key={id}
      names={weapons}
      />      
    }
  )

  /* const renderCels = Object.keys(celestial).map((celID)=>(
    <li key={celID}>
      <Link to={`/characters/${celID}`}>{celestial[celID]}</Link>  
    </li>,
    console.log("Links: ", "./characters/name")
  )); 
    this was an attempt to link the character
    with their celestial weapon
  */

  return(
    <div>
      <h1 style={{color: "silver"}} > Welcome to the Celestial Weapons Page!</h1>
      <h5 style={{color: "grey"}}>These are the Ultimate Weapons in the game</h5>
      <ul>
        {displayCels} 
        {/* renderCels */}
      </ul>
    </div>
  )
}

export default CelestialWeapons;