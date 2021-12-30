import React from "react";

function Story({ story }){

  return (
    <div>
      <h1 style={{color: "silver"}}>Here's where it starts.</h1>
      <h3 style={{color: "orange"}}>
        {story}
      </h3>
    </div>
  )
}

export default Story;