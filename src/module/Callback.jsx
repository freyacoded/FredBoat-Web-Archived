import React, { Component } from "react";
import { browserHistory } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "react-loading";
import "./css/Callback.css";

class Callback extends Component {

    static handleCallback() {
        const groups = /code=([^&]+)/.exec(location.search.substring(1));
        if(groups == null) {
            console.log("No code in URL. Navigatin to /login");
            browserHistory.push("/login");
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <Header/>
                    <section className="main">
                        <div id="callback-loading">
                            <Loading type="spin" color='#1CBFE2' />
                        </div>
                        <p id="callback-text">
                            Authenticating with Discord...
                        </p>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Callback;