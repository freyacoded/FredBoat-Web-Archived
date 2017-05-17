import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./module/App";
import ServerSelect from "./module/ServerSelect";
import Index from "./module/Index";
import Callback from "./module/Callback";

import Account from "./control/Account";
import "./index.css";

// Redirect with force
window.location = "https://docs.fredboat.com";

//TODO: Loading screen

console.log("Loading");

class Routing {
    static render() {
        Account.isLoggedIn(function(isLoggedIn) {
            if (isLoggedIn) {
                ReactDOM.render(
                    <Router history={browserHistory}>
                        <Route path="/manage/:serverid" component={App}/>
                        <Route path="/manage" component={ServerSelect}/>
                        <Route path="/" component={Index}/>
                    </Router>,
                    document.getElementById("appMount")
                );
            } else {
                if (location.pathname === "/callback") {
                    ReactDOM.render(
                        <Callback />,
                        document.getElementById("appMount")
                    );
                    Callback.handleCallback();
                } else {
                    browserHistory.push("/")
                    ReactDOM.render(
                        <Index />,
                        document.getElementById("appMount")
                    );
                }

            }
        });
    }
}

Routing.render();

export default Routing;
