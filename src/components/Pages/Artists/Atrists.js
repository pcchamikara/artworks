import React, {useContext} from 'react'
import {MainContext} from '../../../contex/MainContext';
import './Artists.css';
import {Link} from "react-router-dom";
export default function Artists() {
    const  { Atrists, setAtrists }  = useContext( MainContext );
   
    
    return (
        <div className="col-12">
        <div className="row bg-dark p-2">
            
            {

               
                Atrists.map(
                    (artist, key) => (
                        
                        <div key={key} className="art_block col-sm-6 col-md-4 mb-4 p-2">
                            <Link to={`/artist/${artist.slug}`}>
                            <div className="card bg-dark text-white">
                                <div className="at_img" style={{backgroundImage: `url(${artist.artistImage})`}}/>
                                <div className="card-body">
                                <h5 className="card-title text-uppercase">{artist.artistName}</h5>
                                <small className="text-muted">{artist.artworks} Artworks</small>
                                </div>
                            </div>
                        </Link>
                        
                        </div>
                        
                    )
                )
            }
            </div>    
        </div>
    )
}
