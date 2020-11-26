import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { Link , NavLink } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Artists from '../../Pages/Artists/Atrists'
import Albums from '../../Pages/Albums/Albums'
import Shows from '../../Pages/Shows/Shows'
import SingleArtist from '../../Pages/Artists/SingleArtist/SingleArtist'
import Art from '../../Pages/Artists/SingleArtist/Art/Art'


export default function Appbar() {
 

  return (
    <div >  
     
        <nav className="navbar  navbar-dark d-flex bg-dark justify-content-center pt-4 pb-4">
          
        <NavLink className="navbar-brand" to="/">
          <img src="./logoblack-alta.jpg" width="80"  className="d-inline-block align-top" alt=""/>
          
        </NavLink>


          <div className=" d-flex" id="navbarNav">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item  ml-2 mr-2">
                <NavLink exact={true} activeClassName='active'  to="/" className="nav-link">Atrists</NavLink >
              </li>
              <li className="nav-item ml-2 mr-2">
                <NavLink  to="/albums" className="nav-link">Albums</NavLink >
              </li>
              <li className="nav-item ml-2 mr-2">
                <NavLink  to="/shows" className="nav-link">Shows</NavLink >
              </li>
            </ul>
          </div>
        </nav>
        
        <Switch>
            <Route exact path="/">
                <Artists />
            </Route>
            <Route path="/albums">
                <Albums />
            </Route>
            <Route path="/shows">
                <Shows />
            </Route>
            <Route path="/artist/:slug">
                <SingleArtist />
            </Route>
            <Route path="/artist/:slug/:artSlug">
                <Art/>
            </Route>
        </Switch>

     </div> 
   
  );
}
