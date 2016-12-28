import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "react-loading";
import "./css/Callback.css";

class Callback extends Component {

    render() {
        return (
            <div>
                <div className="wrapper">
                    <Header/>
                    <section className="main">
                        <div className="callback-loading">
                            <Loading type="spin" color='#1CBFE2' />
                        </div>
                        <p className="callback-text">
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