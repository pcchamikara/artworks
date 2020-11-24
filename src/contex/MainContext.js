import React, { createContext, useState } from 'react';
import Artists from '../data';
import AlbumsData from '../albums';

export const MainContext = createContext();
const TempArts = '' ;
const TempAlbums = '' ;

const MainContextprovider = (props) =>{
    const [Atrists, setAtrists] = useState(Artists);
    const [Albums, setAlbums] = useState(AlbumsData);
   
   
    
    const getArtworks = (slug) => {
       
        let TempArtist = [...Atrists];
        const Artist = TempArtist.find(artist => artist.slug === slug );
        return Artist;
    }

    const getAlbums = (slug) => {
       
        let TempArtist = [...Albums];
        const Albums = TempAlbums.find(albums => albums.slug === slug );
        return Albums;
    }

    
    return(
        <MainContext.Provider value={{Atrists,setAtrists, getArtworks, Albums, getAlbums} }>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextprovider;

