import React from 'react'
import AtristsData from "../AtristsData";
import { Link , useRouteMatch } from "react-router-dom";
import { useParams } from "react-router";
import SubHeader from '../components/SubHeader';

export default function Artist() {
    const { artistId } = useParams();
    let { path, url } = useRouteMatch();
    const artistItem = AtristsData.find(({ slug }) => slug === artistId);

    return (

        <div className="col-12">
            <SubHeader/>
        <div className="row bg-dark p-2">
            
            {artistItem.arts.map(({ artTitle, slug, artId, artImg, artDescription }) => (
            <div key={artId} className="art_block col-sm-6 col-md-4 mb-4 p-2" >
                <Link to={`${url}/${artId}`}>

                <div className="card bg-dark text-white">
                    <div className="at_img" style={{backgroundImage: `url(${artImg})`}}/>
                    <div className="card-body">
                    <h5 className="card-title text-uppercase">{artTitle}</h5>
                   
                    </div>
                </div> 


                </Link>
            </div>
            ))}
        
        
        </div>
        </div>
    )
}


