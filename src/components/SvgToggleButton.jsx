import React, { Component } from "react";
import Snap from "snapsvg-cjs";
import SvgIconConfig from "../control/SvgIconConfig";
import "./css/SvgToggleButton.css";

const duration = 300;//ms

const animate = function (s, config, reverse) {
    const direction = reverse ? "from" : "to";

    for (let i in config.animation) {
        const part = config.animation[i];
        const el = s.select("g").select(part.el);
        const props = part.animProperties[direction];

        if (props.before) {
            el.attr(JSON.parse(props.before));
        }

        el.animate(JSON.parse(props.val), duration);
    }
};

class SvgToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: props.defaultValue
        };
    }

    onClick = () => {

        const state = this.state;
        state.toggle = this.state.toggle === false;
        this.setState(state);

        animate(
            Snap("#" + this.props.id),
            SvgIconConfig[this.props.type],
            this.state.toggle
            );

        if(this.props.onClick){
            this.props.onClick(this);
        }
    };

    componentDidMount() {
        Snap.load(SvgIconConfig[this.props.type].url, (svg) => {
            const s = Snap("#" + this.props.id);
            const g = svg.select("g");
            s.append(g);
        });
    }

    render() {
        return (
            <div
                className={"SvgToggleButton " + this.props.type}
                onClick={this.onClick}
            >
                <svg viewBox="0 0 64 64" id={this.props.id} width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}

export default SvgToggleButton;