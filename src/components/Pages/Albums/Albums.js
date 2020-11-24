import React, {useContext} from 'react'
import {MainContext} from '../../../contex/MainContext';
import {Link} from "react-router-dom";
export default function Albums() {
    const  { Albums, setAlbums }  = useContext( MainContext );
   
        console.log(Albums);
    return (
        <div className="col-12">
        <div className="row bg-dark p-2">
            
             {

               
                Albums.map(
                    (album, key) => (
                        
                        <div key={key} className="art_block col-sm-6 col-md-4 mb-4 p-2">
                            <Link to={`/album/${album.id}`}>
                            <div className="card bg-dark text-white">
                                <div className="at_img" style={{backgroundImage: `url(${album.albumImage})`}}/>
                                <div className="card-body">
                                <h5 className="card-title text-uppercase">{album.albumName}</h5>
                                <small className="text-muted">{album.artworks} Artworks</small>
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
