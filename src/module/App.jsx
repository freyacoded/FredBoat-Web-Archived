import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Checkbox from "rc-checkbox";
import TabManager from "../control/TabManager";
import 'rc-checkbox/assets/index.css';
import "./css/App.css";

class App extends Component {

    componentDidMount() {
        TabManager.renderTabs();
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <Header/>
                    <section className="main-flex">
                        <section className="settingsLeftContainer">
                            <div id="settingsLeft"></div>
                        </section>
                        <section className="page" id="page">
                            <Checkbox classnName="rc-checkbox-x150"/>
                        </section>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;