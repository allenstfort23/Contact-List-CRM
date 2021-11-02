import React from "react";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";
export const Contact = () => {
	const { store, actions } = useContext(Context);
	console.log("This is the contacts in the contact list", store.contacts);
	// console.log(store.users);
	return (
		<div className="container">
			<div className="text-center mx-auto mt-5 mb-5">
				<h1>Contact List</h1>
			</div>
			<div className="row">
				{store.contacts.map((item, index) => (
					<div className="card col" key={index} style={{ width: "18rem;" }}>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<h6 className="card-subtitle mb-2 text-muted">{item.phone_number}</h6>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
						</div>
					</div>
				))}
			</div>

			{/* <div className="card" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<a href="#" className="card-link">
						Card link
					</a>
					<a href="#" className="card-link">
						Another link
					</a>
				</div>
			</div> */}
		</div>
	);
};
