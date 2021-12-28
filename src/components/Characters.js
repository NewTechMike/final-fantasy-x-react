import React, { useState, useEffect } from "react";

function Characters(){
  const [chars, setChars] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/final-fantasy-x')
      .then((resp)=> resp.json())
      .then((chars)=> console.log(chars))
  },[]);


  return( 
    <div>
      <h1> Welcome to the Characters Page!</h1>
    </div>
  )
}

export default Characters;