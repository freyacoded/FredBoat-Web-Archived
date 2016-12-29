import React, { Component } from "react";
import { browserHistory } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "react-loading";
import Account from "../control/Account"
import "./css/Callback.css";

class Callback extends Component {

    static handleCallback() {
        const groups = /code=([^&]+)/.exec(location.search.substring(1));
        if(groups == null) {
            console.log("No code in URL. Navigating to /login");
            browserHistory.push("/login");
            return;
        }

        const body = {
            code: groups[1]
        };

        const request = new XMLHttpRequest();
        request.open("POST", Account.getBaseApiUrl() + "/callback" , true);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                const json = JSON.parse(this.responseText);
                localStorage.bearer = json.bearer;
                localStorage.refresh = json.refresh;
                browserHistory.push("/");
            } else {
                browserHistory.push("/login");
                throw "Failed to authenticate";
            }
        };

        request.onerror = function() {
            browserHistory.push("/login");
            throw "Failed to authenticate";
        };

        request.send(JSON.stringify(body));
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