import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

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
          
        <Link className="navbar-brand" to="/">
          <img src="logoblack-alta.jpg" width="80"  className="d-inline-block align-top" alt=""/>
          
        </Link>


          <div className=" d-flex" id="navbarNav">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item active ml-2 mr-2">
                <Link to="/" className="nav-link">Atrists</Link>
              </li>
              <li className="nav-item ml-2 mr-2">
                <Link to="/albums" className="nav-link">Albums</Link>
              </li>
              <li className="nav-item ml-2 mr-2">
                <Link to="/shows" className="nav-link">Shows</Link>
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
