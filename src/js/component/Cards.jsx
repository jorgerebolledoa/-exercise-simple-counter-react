import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
function Card(props) {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.imageUrl}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.tittle}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and fill
					the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
Card.prototypeaa = {
	tittle: PropTypes.string,
	imageUrl: PropTypes.string,
};

export default Card;
