import React from 'react';
import './App.css';
import Nav from './Nav';
import App from './App';
import About   from './About';
import Shop from './Shop';
import ItemDetails from './ItemDetails'
import { BrowserRouter, Switch, Route } from "react-router-dom";


const Routes = () => {
    return(
            <BrowserRouter>
             <div>
            <Nav />
       <Switch>     
<Route exact path="/" component={App}/>
<Route exact path="/about" component={About}/>
<Route exact path="/shop" component={Shop}/>
<Route path="/shop/:id" component={ItemDetails}/>
</Switch>
</div>
</BrowserRouter>
    )
}
export default Routes;