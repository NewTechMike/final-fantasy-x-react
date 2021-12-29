import React, { useState } from "react"

function NewChar({onAddNewChar}){
  const [newName, setNewName] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    const nameData = {
      "name": newName
    }; console.log("ND: ", nameData)

  fetch("http://localhost:3000/final-fantasy-x", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nameData),
  })
    .then((resp)=>resp.json())
    .then((addName)=>onAddNewChar(addName))
    console.log("newNamePost: ",newName)
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
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </label>
    </form>
    </div>
  )
}

export default NewChar;