import React from "react";
import List from "./List"

//1. This component will render each of the Characters from FFX
//2. When clicking each name, the characters title will show

function Characters({id, names}){
  
  console.log("names: ", names)
  const displayChars = names.map((char, id)=> {
    return <List 
      key={id}
      names={char}
      />
    }
  )

  return( 
    <div>
      <h1 style={{color: "silver"}}> Welcome to the Characters Page!</h1>
       {displayChars}
    </div>
  )
}

export default Characters;