import React, { Component } from 'react';
import Account from "../control/Account";
import logo from "../../public/logo.svg";
import discordLogo from "../../public/discord.svg";
import "./Login.css";

class Login extends Component {
    render() {
        return (
            <div className="loginBack">
                <section className="header">
                    <div id="UserDisplay"></div>
                    <div className="title">FredBoat</div>
                </section>
                <div className="logoDiv">
                    <img className="fbLogo" src={logo} draggable="false" alt="logo"></img>
                    <div className="loginPlus">+</div>
                    <img className="discordLogo" src={discordLogo} draggable="false" alt="logo"></img>
                </div>
                <div className="loginBody">
                    <div className="loginText">
                        Log in to Discord to manage FredBoat on your server.
                        <p>(No not really, this site is just a preview.)</p>
                    </div>

                    <a className="authButton" href={
                        Account.isProduction() ? "https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=168686772216135681&scope=identify guilds&redirect_uri=http%3A%2F%2Ffredboat.frederikam.com%2Fcallback&access_type=offline"
                        : "https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=168672778860494849&scope=identify guilds&redirect_uri=http%3A%2F%2Flocalhost%3A3600%2Fcallback&access_type=offline"
                        }>
                        Authenticate with Discord
                    </a>
                </div>
                <div className="footer">
                    <div className="footerText">
                        FredBoat-Web &#169; Fre_d licensed under the <a href="https://github.com/Frederikam/FredBoat-Web/blob/master/LICENSE">MIT License</a>.
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;