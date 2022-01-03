import React, { useState } from "react";
import List from "./List";
 
function CelestialWeapons({celestial}){
  const [sorted, setSorted] = useState([...celestial])
  const [clicked, setClick] = useState(false)

  console.log("(Ce)cels: ",celestial)
  const displayCels = sorted.map((weapons, id) => {
    return <List 
      key={id}
      names={weapons}
      />      
    }
  )

  function handleClick(celestial){
    setClick(!clicked)
    console.log("HandleClick: ", celestial )
    clicked ? setSorted([...celestial].sort()) : setSorted([...celestial])
  }


  /* Create a button that will sort the celestial weapons in ABC order
  and also return to original order */
  return(
    <div>
      <h1>Welcome to the Celestial Weapons Page!</h1>
      <h5 style={{color: "grey"}}>(These are the Ultimate Weapons in the game)</h5>
      <ul>
        {displayCels} 
        {sorted}
      </ul>
      <button onClick={(e)=>handleClick(celestial)}>ABC Sort</button>
    </div>
  )
}

export default CelestialWeapons;