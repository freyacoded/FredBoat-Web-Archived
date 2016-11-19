import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./root/App";
import Login from "./root/Login";

import Account from "./control/Account";
import "./index.css";

//TODO: Loading screen

Account.isLoggedIn(function(isLoggedIn){
	if(isLoggedIn){
		ReactDOM.render(
			<Router history={browserHistory}>
				<Route path="/" component={App}/>
			</Router>,
			document.getElementById("appMount")
		);
	} else {
		ReactDOM.render(
			<Login />,
			document.getElementById("appMount")
		);
	}
});