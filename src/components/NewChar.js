import React, { useState } from "react"

function NewChar({onAddNewChar, onAddNewWeap}){
  const [nameData, setNameData] = useState({
    name:'',
    celestial: ''
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
      "name": nameData.name,
      "celestial": nameData.celestial
    }),
  })
  onAddNewChar(nameData)
  onAddNewWeap(nameData)
    /* .then((resp)=>resp.json())
    .then((addName)=>setNewName(addName))
    onAddNewChar(nameData.name) */

  setNameData({
    name:'',
    celestial:''
  })
}

  return(
    <div>
      <h1 style={{color: "silver"}}>Add a Character</h1>
    <form className="New" onSubmit={handleSubmit}>
      <label style={{color: "lightgreen"}}>
        Name   :  
        <input
          type="text"
          placeholder="New Character"
          name="name"
          value={nameData.name}
          onChange={handleChange}
        />
      </label>
      <label style={{color: "lightsteelblue"}}>
          Celestial Weapon:
          <input style={{textAlign: "center"}}
            type="text"
            placeholder="New Celestial Weapon"
            name="celestial"
            value={nameData.celestial}
            onChange={handleChange}
          />
      </label>
      <button type="submit">Add New</button>
    </form>
    </div>
  )
}

export default NewChar;