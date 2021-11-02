import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Contact } from "../component/ContactList";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [alert, setAlert] = useState(false);

	const history = useHistory();

	const signUp = () => {
		if (
			firstName == "" ||
			lastName == "" ||
			username == "" ||
			email == "" ||
			password == "" ||
			confirmPassword == ""
		) {
			setAlert(true);
		} else {
			if (confirmPassword == password) {
				actions.createUser(firstName, lastName, email, username, password);
				history.push("/");
			}
		}
	};

	const enterKeyPress = event => {
		if (event.key == "Enter") {
			signUp();
		}
	};

	return (
		<div className="container col-xl col-xxl-8 px-4 py-5">
			<div className="row align-items-center g-lg-5 py-5">
				<div
					className="col-lg-7 text-center text-lg-start"
					style={{
						background:
							"url(https://blush.design/api/download?shareUri=WyKihve7H83CBVD-&c=Bottom_0%7E393f82-0.1%7E393f82-0.2%7E393f82_Hair_0%7Ee8e1e1-0.1%7E2c1b18-0.2%7E2c1b18_Skin_0%7Eb28b67-0.1%7Eeac7a8-0.2%7E57331f_Top_0%7Effa434-0.1%7E43d26c-0.2%7E43d26c&bg=a4a4d2&w=800&h=800&fm=png);"
					}}>
					<h1 className="display-4 fw-bold lh-1 mb-3">
						Contactie <i className="mr-2 fas fa-address-book" />
					</h1>

					<p className="col fw-bold lh-1 lead">Have all of you contacts in one place.</p>
					<p className="col fw-bold lh-1 lead">All the time, Anytime.</p>
				</div>
				<div className="col-md-10 mx-auto col-lg-5">
					<form className="p-4 p-md-5 boarder rounded-3 bg-light">
						<div>
							{alert && (
								<div className="border rounded text-center align-items-center bg-danger py-1 mb-1 ">
									Missing Field(s)!
								</div>
							)}
						</div>
						<div className="form-floating mb-1">
							<input
								type="text"
								className="form-control"
								placeholder="First Name"
								id="floatingFirstName"
								onChange={event => setFirstName(event.target.value)}
								onKeyPress={e => enterKeyPress(e)}
								autoComplete="off"
								value={firstName}
							/>
							<label className="text-muted" htmlFor="floatingFirstName">
								Enter Your First name
							</label>
						</div>
						<div className="form-floating mb-1">
							<input
								type="text"
								className="form-control"
								placeholder="Last Name"
								id="floatingLastName"
								onChange={event => setLastName(event.target.value)}
								onKeyPress={e => enterKeyPress(e)}
								autoComplete="off"
								vaule={lastName}
							/>
							<label className="text-muted" htmlFor="floatingLastName">
								Enter Your Last Name
							</label>
						</div>
						<div className="form-floating mb-1">
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								id="floatingUsername"
								onChange={event => setUsername(event.target.value)}
								onKeyPress={e => enterKeyPress(e)}
								autoComplete="off"
								value={username}
							/>
							<label className="text-muted" htmlFor="floatingUsername">
								Enter A Username
							</label>
						</div>
						<div className="form-floating mb-1">
							<input
								type="email"
								id="floatingInput"
								className="form-control"
								onChange={event => setEmail(event.target.value)}
								onKeyPress={e => enterKeyPress(e)}
								placeholder="Enter Your Email"
								autoComplete="off"
								value={email}
							/>
							<label className="text-muted" htmlFor="FloatingInput">
								Enter your Email
							</label>
						</div>
						<div className="form-floating mb-1">
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								id="floatingPassword"
								onChange={event => setPassword(event.target.value)}
								onKeyPress={e => enterKeyPress(e)}
								autoComplete="off"
								value={password}
							/>
							<label className="text-muted" htmlFor="floatingPassword">
								Enter a Password
							</label>
						</div>
						<div className="form-floating mb-1">
							<input
								type="password"
								className="form-control"
								placeholder="Confirm Password"
								id="floatingConfirmPassword"
								onChange={event => setConfirmPassword(event.target.value)}
								onKeyPress={e => enterKeyPress(e)}
								autoComplete="off"
								value={confirmPassword}
							/>
							<label className="text-muted" htmlFor="floatingConfirmPassword">
								Confirm Password
							</label>
						</div>

						<button
							onClick={e => {
								e.preventDefault();
								signUp();
								console.log("IT'S WORKING");
							}}
							className="w-100 btn btn-lg btn-primary mt-4"
							type="submit">
							Sign Up
						</button>
						<hr className="my-4" />
						<small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
					</form>
				</div>
			</div>
		</div>
	);
};
