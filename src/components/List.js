import React from "react"

function List({names}){
  
  // The style of each character rendered
  // next step, use this to render Cel weapons

  return(
    <div className="list">
      <ul>
        <h2 style={{color: "#9932cc"}}>
          {names}
        </h2>
      </ul>
    </div>
  )
}

export default List;