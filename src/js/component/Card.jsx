import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
function Card(props) {
	return (
		<div className="card">
			<div>{props.title}</div>
		</div>
	);
}
Card.prototypeaa = {
	title: PropTypes.number,
};

export default Card;
