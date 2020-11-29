import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header'
import Art from '../screens/Art';
import Artist from '../screens/Artist';
import Artists from '../screens/Artists';
/* import MainContextprovider from './MainContext'; */

function App(props) {
  return (
    <BrowserRouter>
     
      <div className="mainContent">
        <Route exact path="/artist/:artistId" component={Artist} />
        <Route path="/artist/:artistId/:artItemId" component={Art} />
        <Route exact path="/" component={Artists} />
      </div>
    </BrowserRouter>
  );
}

export default App;
