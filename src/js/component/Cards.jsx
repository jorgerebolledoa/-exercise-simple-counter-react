import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
let hola = 0;
const Cards = () => {
	const [num1, setNum1] = useState(0);
	const [intervalId, setIntervalId] = useState(null);

	useEffect(() => {
		setIntervalId(
			setInterval(() => {
				setNum1((num1) => num1 + 1);
			}, 1000)
		);

		return () => {
			clearInterval(intervalId);
		};
	}, []);
	return (
		<div className="container ">
			<div className="row align-items-center">
				<>
					<div className="col-1 text-center p-2 ">
						<Card title={<i class="fa-regular fa-clock"></i>} />
					</div>
					<div className="col-1 text-center p-2 ">
						<Card title={Math.floor((num1 / 100000) % 10)} />
					</div>
					<div className="col-1 text-center p-2 ">
						<Card title={Math.floor((num1 / 10000) % 10)} />
					</div>
					<div className="col-1 text-center p-2 ">
						<Card title={Math.floor((num1 / 1000) % 10)} />
					</div>
					<div className="col-1 text-center p-2 ">
						<Card title={Math.floor((num1 / 100) % 10)} />
					</div>
					<div className="col-1 text-center p-2 ">
						<Card title={Math.floor((num1 / 10) % 10)} />
					</div>
					<div className="col-1 text-center p-2 ">
						<Card title={num1 % 10} />
					</div>
				</>
			</div>
		</div>
	);
};
export default Cards;
