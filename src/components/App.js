import React from "react";
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
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/celestialweapons">
            <CelestialWeapons />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
