import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Characters from "./Characters";
import CelestialWeapons from "./CelestialWeapons";
import Story from "./Story";
import NewChar from "./NewChar";
import '../App.css';

/*This app will show the main 7 characters 
  and their celestial (ultimate) weapons 
  from Final Fantasy X. Along with a page for 
  a basic layout of the story
*/
function App() {
  const [chars, setChars] = useState([])
  const [story, setStory] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/final-fantasy-x')
      .then((resp)=> resp.json())
      .then((char)=> setChars(char))
  },[]);
  
  useEffect(() =>{
    fetch('http://localhost:3000/story')
      .then((resp)=> resp.json())
      .then((data)=> setStory(data))
  },[]);
  
  const beginning = story.map((data)=>{
    return data.began
    }
  )
  
  const key = chars.map((char) =>{
    return char.id
    }
  )

  const names = chars.map((char) =>{
     return char.name
    }
  )

  const weapons = chars.map((char) =>{
    return char.celestial
    }
  )

  function handleAddNewChar(newChar){
    setChars([...chars, newChar])
  } 

  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/characters">
            <Characters id={key} names={names}/>
          </Route>
          <Route path="/celestialweapons">
            <CelestialWeapons id={key} celestial={weapons} />
          </Route>
          <Route path="/story">
            <Story story={beginning}/>
          </Route>
          <Route path="/newchar">
            <NewChar onAddNewChar={handleAddNewChar} onAddNewWeap={handleAddNewChar}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
