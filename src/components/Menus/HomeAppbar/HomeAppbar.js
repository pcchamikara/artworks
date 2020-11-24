/* HomeAppbar
<AppBar position="static" color="default">import Atrist from '../../Home/tabs/' */

import React, {Component} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";


import Atrists from '../../tabs/Artists/Atrists'
import Shows from '../../tabs/Shows/Shows'

class HomeAppbar extends Component {

 handleCallToRouter = (value) => {
   this.props.history.push(value);
 }

  render () {
     return (
      <Tabs
        value={this.props.history.location.pathname}
        onChange={this.handleCallToRouter}
        >
        <Tab
          label="Artist"
          value="/"
        >
        <div>
           <Atrists />
        </div>
        </Tab>
        <Tab
          label="Shows"
          value="/Shows"
            >
          <div>
            <Shows />
          </div>
        </Tab>
      </Tabs>           
    )
  }
}

export default withRouter(HomeAppbar)  