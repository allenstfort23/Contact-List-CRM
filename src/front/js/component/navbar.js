import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
	const [show, setShow] = useState(false);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			<Link to="/" className="navbar-brand" href="#">
				Contactie
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ">
					<ul className="nav justify-content-center align-items-center text-center">
						<li className="nav-item">
							<Link to="/" className="nav-link active" href="#">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#">
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link to="contactlist" className="nav-link" href="#">
								Contact List
							</Link>
						</li>
						<li className="nav-item">
							<Link to="pricing" className="nav-link" href="#">
								Pricing
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/signup" className="nav-link" href="#">
								Signup/Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
