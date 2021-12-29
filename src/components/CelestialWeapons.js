import React from "react";
import List from "./List";

function CelestialWeapons({celestial}){
  console.log("cels: ",celestial)
  const displayCels = celestial.map((weapons) => {
    return <List 
      key={weapons}
      names={weapons}
      />
    }
  )

  return(
    <div>
      <h1> Welcome to the Celestial Weapons Page!</h1>
      <ul>
        {displayCels}
      </ul>
    </div>
  )
}

export default CelestialWeapons;