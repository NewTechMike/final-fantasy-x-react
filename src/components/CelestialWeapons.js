import React from "react";
import List from "./List";
 
function CelestialWeapons({celestial}){
  console.log("(Ce)cels: ",celestial)
  const displayCels = celestial.map((weapons, id) => {
    return <List 
      key={id}
      names={weapons}
      />      
    }
  )

  return(
    <div>
      <h1>Welcome to the Celestial Weapons Page!</h1>
      <h5 style={{color: "grey"}}>(These are the Ultimate Weapons in the game)</h5>
      <ul>
        {displayCels} 
      </ul>
    </div>
  )
}

export default CelestialWeapons;