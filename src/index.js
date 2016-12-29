import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./module/App";
import ServerSelect from "./module/ServerSelect";
import Login from "./module/Login";
import Callback from "./module/Callback";

import Account from "./control/Account";
import "./index.css";

//TODO: Loading screen

console.log("Loading");

class Index {
    static render() {
        Account.isLoggedIn(function(isLoggedIn) {
            if (isLoggedIn) {
                ReactDOM.render(
                    <Router history={browserHistory}>
                        <Route path="/manage/:serverid" component={App}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/*" component={ServerSelect}/>
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
                    ReactDOM.render(
                        <Login />,
                        document.getElementById("appMount")
                    );
                }

            }
        });
    }
}

Index.render();

export default Index;