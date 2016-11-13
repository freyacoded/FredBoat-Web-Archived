import React, { Component } from "react";
import ReactDOM from "react-dom";
import Snap from "snapsvg-cjs";
import SvgIconConfig from "../control/SvgIconConfig";
import "./css/SvgToggleButton.css";

class SvgToggleButton extends Component {
	onClick = () => {
		this.props.onClick(this);
	}

	componentDidMount() {
		
		Snap.load("svg/" + this.props.type + ".svg", (svg) => {
			var s = Snap("#" + this.props.id);
			var g = svg.select("g");
			console.log(g)
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