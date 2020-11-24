import React from 'react';
import Artists from './Pages/Artists/Atrists';
import Shows from './Pages/Shows/Shows';


const Routes = [
  {
    path: '/',
    sidebarName: 'Artists',
    component: Artists
  },
  {
    path: '/shows',
    sidebarName: 'Shows',
    component: Shows
  },
 
];

export default Routes;