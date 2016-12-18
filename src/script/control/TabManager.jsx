import React from "react";
import ReactDOM from "react-dom";
import SettingsLeft from "../components/SettingsLeft";

class TabManager {
	static renderTabs() {
		ReactDOM.render(
			<SettingsLeft tabs={TabManager.tabs} selected={TabManager.currentTab}/>,
			document.getElementById("settingsLeft")
		);
	}

	static setCurrentTab(num) {
		this.currentTab = num;
		this.renderTabs();
	}
}

TabManager.tabs = ["Server", "#general", "#spam", "#etc"];
TabManager.currentTab = 0;

export default TabManager;