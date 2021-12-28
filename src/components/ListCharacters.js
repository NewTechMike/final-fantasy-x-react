import React from "react"

function ListCharacters({name, celesital}){

  // The style of each character rendered
  // next step, use this to render Cel weapons

  return(
    <ul>
      <h2 style={{color: "green"}} text-align="center">
        {name}
        {celesital}
      </h2>
    </ul>
  )
}

export default ListCharacters;