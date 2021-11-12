import React, { useState, useContext } from "react";
import { Contact } from "../component/ContactList";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="jumbotron bg-dark py-5 align-items-center justify-content-center text-center">
				<h1 className="display-4 text-white text-center">Conactie</h1>
				<p className="lead text-white text-center">
					A place to store all you contact to access them anywhere you have internet connection.
				</p>
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
			<div className="container py-5">
				<div className="row justify-content-around">
					<div className="card col-md-4 col-lg-4" style={{ width: "18rem;" }}>
						<div className="card-body">
							<h5 className="card-title">Connect anywhere</h5>
							<p className="card-text">
								Contactie is about connecting with anyone by having there info anywhere there is
								internet connection. You do not need a phone.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card col-md-4 col-lg-4" style={{ width: "18rem;" }}>
						<div className="card-body">
							<h5 className="card-title">How To Use</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the
								card&apos;s content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
					<div className="card col-md-4 col-lg-4" style={{ width: "18rem;" }}>
						<div className="card-body">
							<h5 className="card-title">Sign up</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the
								card&apos;s content.
							</p>
							<Link to="signup" href="#" className="btn btn-primary">
								Go somewhere
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
