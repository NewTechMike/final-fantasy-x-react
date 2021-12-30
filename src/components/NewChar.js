import React, { useState } from "react"

function NewChar({onAddNewChar}){
  const [nameData, setNameData] = useState({
    name:''
  });

  function handleChange(event){
    setNameData ({
      ...nameData,
      [event.target.name]: event.target.value
    });
  }


  function handleSubmit(event){
    event.preventDefault();

  fetch("http://localhost:3000/final-fantasy-x", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "name": nameData.name
    }),
  })
  onAddNewChar(nameData)
    /* .then((resp)=>resp.json())
    .then((addName)=>setNewName(addName))
    onAddNewChar(nameData.name) */

  setNameData({
    name:''
  })
}

  return(
    <div>
      <h1 style={{color: "silver"}}>Add a Character</h1>
    <form className="NewCharacter" onSubmit={handleSubmit}>
      <label style={{color: "lightgreen"}}>
        Name: 
        <input
          type="text"
          name="name"
          value={nameData.name}
          onChange={handleChange}
        />
      </label>
      {/* <button type="submit">Add Character</button> */}
    </form>
    </div>
  )
}

export default NewChar;