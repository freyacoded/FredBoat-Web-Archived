import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import App from "./root/App";
import Login from "./root/Login";
import UserDisplay from "./components/UserDisplay";

import Account from "./control/Account";
import TabManager from "./control/TabManager";
import "./index.css";

//TODO: Loading screen

Account.isLoggedIn(function(isLoggedIn){
	if(isLoggedIn){
		ReactDOM.render(
			<App />,
			document.getElementById("appMount")
		);
	} else {
		ReactDOM.render(
			<Login />,
			document.getElementById("appMount")
		);
	}
});