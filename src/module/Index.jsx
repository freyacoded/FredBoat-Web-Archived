import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import Account from "../control/Account";
import logo from "../../public/logo.svg";
import discordLogo from "../../public/svg/discord.svg";
import "./css/Index.css";

class Index extends Component {
    render() {
        return (
            <div className="indexMount">
                <header className="header">
                    <div id="UserDisplay"></div>
                    <i className="fa fa_music fa-lg"/>
                    <div className="title">FredBoat</div>
                </header>
                <section className="indexBody">
                    <div className="logoDiv">
                        <img className="fbLogo" src={logo} draggable="false" alt="logo"/>
                    </div>

                    <p className="loginTitle">The easy to use music bot for </p>
                    <img className="loginDiscordLogo" src={discordLogo}/>

                </section>

                <div>
                    <div className="loginText">
                        Add FredBoat to your server
                    </div>
                </div>

                <a className="authButton" href={
                    "https://discordapp.com/oauth2/authorize?&client_id=184405253028970496&scope=bot"
                    //Account.isProduction() ? "https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=168686772216135681&scope=identify guilds&redirect_uri=http%3A%2F%2Ffredboat.com%2Fcallback&access_type=offline"
                    //    : "https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=168672778860494849&scope=identify guilds&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&access_type=offline"
                }>
                    Authenticate with Discord
                </a>

                <section id="indexFeatures" style={{height: "500px"}}>

                    <p className="indexFeaturesHeader">Why use FredBoat?</p>
                    <div className="featuresFlexbox">
                        <FeatureFlexItem
                            title="Great audio"
                            icon="music"
                            text="Support for YouTube, Soundcloud, Bandcamp, Twitch, Vimeo and direct file links. All of which streamed at minimal or no loss of quality. You can even link directly to raw audio files."
                        />
                        <FeatureFlexItem
                            title="Shuffle and repeat"
                            icon="random"
                            text="FredBoat supports shuffling and repeating your playlist. It's not unheard of to shuffle a thousand tracks at once!"
                        />
                        <FeatureFlexItem
                            title="Free and unlimited"
                            icon="gift"
                            text="Like Discord, FredBoat is available completely free of charge. There's no catch, I just like what I am doing."
                        />
                        <FeatureFlexItem
                            title="Playlists"
                            icon="list"
                            text="Play your YouTube and Soundcloud playlists with just one command. FredBoat also supports exporting your playlist for later use!"
                        />
                        <FeatureFlexItem
                            title="Stream support"
                            icon="bolt"
                            text="FredBoat will allow you to tune in to your favorite radio station with a .m3u or .pls file. Keep a look out for those files when trying to play radio."
                        />
                        <FeatureFlexItem
                            title="Open source"
                            icon="code-fork"
                            text={<div>FredBoat is hosted <a href="https://github.com/Frederikam/FredBoat\">on GitHub</a> and I would ❤ corrections and improvements!</div>}
                        />
                        <FeatureFlexItem
                            title="Selfhosting"
                            icon="server"
                            text={<div>If you really insist, you can host FredBoat on your own hardware! Check out our <a href="http://docs.frederikam.com/selfhosting">selfhosting guide</a>.</div>}
                        />
                    </div>
                </section>

            </div>
        );
    }

    static resizeFeaturesDiv() {
        const element = document.getElementById("indexFeatures");
        if(element) {
            element.style["min-height"] = (document.body.clientHeight - element.offsetTop) + "px";
            element.style["height"] = null;
            document.body.style["overflow"] = null;
        }
    }

    componentDidMount() {
        setTimeout(Index.resizeFeaturesDiv, 1);
    }
}

class FeatureFlexItem extends Component {

    render() {
        return (
            <div className="featureFlexItem">
                <div className="featureBox">
                    <h1>
                        <FontAwesome name={this.props.icon}/>
                        <span className="featureTitle">{this.props.title}</span>
                    </h1>
                    <div className="indexTitleUnderline"></div>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

document.body.onresize = Index.resizeFeaturesDiv;

export default Index;
