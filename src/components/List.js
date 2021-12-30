import React from "react"

function List({names}){
  
  // The style of each character rendered
  // next step, use this to render Cel weapons

  return(
    <ul>
      <h2 style={{color: "green"}}>
        {names}
      </h2>
    </ul>
  )
}

export default List;