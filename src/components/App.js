import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Characters from "./Characters";
import CelestialWeapons from "./CelestialWeapons";
import '../App.css';

/*This app will show the main 7 characters 
  and their celestial (ultimate) weapons 
  from Final Fantasy X. Along with a page for 
  a basic layout of the story
*/
function App() {
  const [chars, setChars] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/final-fantasy-x')
      .then((resp)=> resp.json())
      .then((char)=> setChars(char))
  },[]);

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

  console.log("Names: ", names)
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
        </Switch>
    </div>
  );
}

export default App;
