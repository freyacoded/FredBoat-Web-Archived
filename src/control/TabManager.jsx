import React from "react";
import ReactDOM from "react-dom";
import SettingsLeft from "../components/SettingsLeft";

class TabManager {
	static renderTabs() {
		ReactDOM.render(
			<SettingsLeft tabs={TabManager.tabs} selected={TabManager.currentTab}/>,
			document.getElementById("page")
		);
	}

	static setCurrentTab(num) {
		this.currentTab = num;
		this.renderTabs();
	}
}

var clazz = TabManager;

TabManager.tabs = ["tab1", "tab2", "tab3", "tab4"];
TabManager.currentTab = 0;

export default TabManager;