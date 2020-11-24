import React, {useContext, useEffect, useState } from 'react'
import {MainContext} from '../../../../contex/MainContext';
import { useParams, Link } from 'react-router-dom'


export default function SingleArtist() {
    let { slug } = useParams();
    const  { getArtworks }  = useContext( MainContext );
    const [Artist, SetArtist] = useState([]);
    
   // const SingleArtist = '';
    useEffect(() => {
        const SingleArtist = getArtworks(slug);
        SetArtist(...Artist, SingleArtist )
      },[]);
      
    
    if(Artist.arts === undefined || Artist.arts === null){
        return false;
     }
    return (
        <div className="col-12">
    <div className="atBreadCrumb row">Artists / {Artist.artistName}</div>
        <div className="row bg-dark p-2">
            
            {

              
                 Artist.arts.map(
                    (Art, key) => ( 
                        
                        <div key={key} className="art_block col-sm-6 col-md-4 mb-4 p-2">
                            <Link to={`${slug}/${Art.artId}`}>
                                
                            <div className="card bg-dark text-white">
                                <div className="at_img" style={{backgroundImage: `url(${Art.artImg})`}}/>
                                <div className="card-body">
                                <h5 className="card-title text-uppercase">{Art.artTitle}</h5>
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
