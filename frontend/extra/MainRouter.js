import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"; //import the package
import Events from './Events' //import your Login page
import ForgotPassword from './ForgotPassword' //import the register page

function MainRouter(){
    return(
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path='./Events' component={Events} />
                    <Route path='./ForgotPassword' component={ForgotPassword} />
                </Switch>
            </div>
       </BrowserRouter>

    )
}
export default MainRouter