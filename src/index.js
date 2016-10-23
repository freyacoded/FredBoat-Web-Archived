import React from "react";
import ReactDOM from "react-dom";
import UserDisplay from "./components/UserDisplay";
import SettingsLeft from "./components/SettingsLeft";
import Account from "./control/Account";
import TabManager from "./control/TabManager";
import "./index.css";

ReactDOM.render(
	<UserDisplay username="Fre_d 👻#2939" avatarUrl="https://cdn.discordapp.com/avatars/81011298891993088/f59d807bd63741ca24cb2556518aa35a.jpg"/>,
	document.getElementById("UserDisplay")
);

TabManager.renderTabs();