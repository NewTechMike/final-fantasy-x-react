import React from "react";

function CelestialWeapons({celestial}){
  return(
    <div>
      <h1> Welcome to the Celestial Weapons Page!</h1>
      <ul>
        {celestial}
      </ul>
    </div>
  )
}

export default CelestialWeapons;