import React, { Component } from "react";
import ReactDOM from "react-dom";
import Snap from "snapsvg-cjs";
import SvgIconConfig from "../control/SvgIconConfig";
import "./css/SvgToggleButton.css";

const duration = 500;//ms

var animate = function(s, config, reverse) {
	const direction = reverse ? "to" : "from";

	for(let i in config.animation){
		const part = config.animation[i];
		const el = s.select("g").select(part.el);
		el.animate(part.animProperties[direction], duration);
	}
}

class SvgToggleButton extends Component {
	onClick = () => {
		animate(
			Snap("#" + this.props.id),
			SvgIconConfig[this.props.type],
			false
			);
		this.props.onClick(this);
	}

	componentDidMount() {
		Snap.load(SvgIconConfig[this.props.type].url, (svg) => {
			var s = Snap("#" + this.props.id);
			var g = svg.select("g");
			s.append(g);
		});
	}

	render() {var button = (
			<div
			className={"SvgToggleButton " + this.props.type}
			onClick={this.onClick}
			>
				<svg viewBox="0 0 64 64" id={this.props.id} width={this.props.width} height={this.props.height}></svg>
			</div>
		);

		return button;
	}
}

export default SvgToggleButton;