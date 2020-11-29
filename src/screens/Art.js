import React from 'react'
import AtristsData from "../AtristsData";
import { useParams } from "react-router";
import SubHeader from '../components/SubHeader';

export default function Art() {
    const { artistId, artItemId } = useParams();
    console.log(artItemId);
    const artItem =  AtristsData.find(({ slug }) => slug === artistId).arts.find(({artId}) => artId === 1);
 
    return (
        <div className="col-12">
            <SubHeader/>
        <div className="row bg-dark p-2 justify-content-center align-items-center">
            <div className="ko-art-weapper d-flex flex-column justify-content-center align-items-center">
                <div className="ko-art-img">
                    <img src={artItem.artImg} width="100%" height="auto"/>
                </div>
                <div className="ko-art-description">
                    {artItem.artDescription}
                </div>
            </div>
            
        </div>
        </div>
    )
}
