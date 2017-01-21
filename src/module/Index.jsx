import React, { Component } from 'react';
import Account from "../control/Account";
import logo from "../../public/logo.svg";
import discordLogo from "../../public/svg/discord.svg";
import "./css/Index.css";

class Index extends Component {
    render() {
        document.body.style.overflow = "hidden";

        return (
            <div className="indexMount">
                <header className="header">
                    <div id="UserDisplay"></div>
                    <div className="title">FredBoat</div>
                </header>
                <section className="indexBody">
                    <div className="logoDiv">
                        <img className="fbLogo" src={logo} draggable="false" alt="logo"/>
                    </div>

                    <p className="loginTitle">The easy to use music bot for </p>
                    <img className="loginDiscordLogo" src={discordLogo}/>

                </section>

                <section id="indexFeatures" style={{height: "1000px"}}>
                    <div>
                        <div className="loginText">
                            Log in to Discord to manage FredBoat on your server.
                            <p>(No not really, this site is just a preview.)</p>
                        </div>
                    </div>

                    <a className="authButton" href={
                        Account.isProduction() ? "https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=168686772216135681&scope=identify guilds&redirect_uri=http%3A%2F%2Ffredboat.com%2Fcallback&access_type=offline"
                            : "https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=168672778860494849&scope=identify guilds&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&access_type=offline"
                    }>
                        Authenticate with Discord
                    </a>
                </section>
            </div>
        );
    }

    static resizeFeaturesDiv() {
        const element = document.getElementById("indexFeatures");
        if(element) {
            element.style["min-height"] = (document.body.clientHeight - element.offsetTop) + "px";
            element.style["overflow"] = "visible";
            element.style["height"] = null;
            document.body.style.overflow = "visible";
        }
    }

    componentDidMount() {
        setTimeout(Index.resizeFeaturesDiv, 1);
    }
}

document.body.onresize = Index.resizeFeaturesDiv;

export default Index;