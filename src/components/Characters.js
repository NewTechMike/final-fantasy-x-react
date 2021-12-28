import React, { useState, useEffect } from "react";
import ListCharacters from "./ListCharacters"
import CelestialWeapons from "./CelestialWeapons";


//1. This component will render each of the Characters from FFX
//2. When clicking each name, the characters title will show

function Characters(){
  const [chars, setChars] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/final-fantasy-x')
      .then((resp)=> resp.json())
      .then((char)=> setChars(char))
  },[]);

  const renderChars = chars.map((char)=> {
    return <ListCharacters 
      key={char.id}
      name={char.name}
      />
    }
  )

  const renderCel = chars.map((cel) =>{
    return <ListCharacters
      key={cel.id}
      celweapon={cel.celesital}
      />
    }
  )

  console.log(renderChars)
  return( 
    <div>
      <h1> Welcome to the Characters Page!</h1>
      {renderChars}
      {renderCel}
    </div>
  )
}

export default Characters;