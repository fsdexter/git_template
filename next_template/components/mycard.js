import React from "react";

export const Card = props => {
	
	return (
		<>
			<div className="container">
				<div className="card ">
					<img className="card-img-top" src={props.img} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text d-flex">{props.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};