import React, { useState, useContext, useEffect } from "react";
import { Contact } from "../component/ContactList";
import { Context } from "../store/appContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		AOS.init({
			duration: 2000
		});
	}, []);
	return (
		<>
			<div className="jumbotron bg-dark py-5 align-items-center justify-content-center text-center">
				<h1 className="display-4 text-white text-center p-5">Contactie</h1>
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
				<div className="row justify-content-around" data-aos="fade-up">
					<div className="card col-md-4 col-lg-3 p-2 ml-1" style={{ width: "18rem;" }}>
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
					<div className="card col-md-4 col-lg-3 p-2 ml-1" style={{ width: "18rem;" }}>
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
					<div className="card col-md-4 col-lg-3 p-2 ml-1" style={{ width: "18rem;" }}>
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
				<div
					className="container justify-content-center align-items-center text-center mt-5"
					data-aos="fade-zoom-in"
					data-aos-offset="300">
					<div className="jumbotron">
						<h1 className="display-4">This App For</h1>
						<p className="text-center lead">
							Contactie is for everyone that wants to save there contact effortlessly. No more trying to
							remember contacts or address.
							<br /> Just save your contact information and use them when you need them.
						</p>
						<button type="button" className="btn btn-dark">
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
