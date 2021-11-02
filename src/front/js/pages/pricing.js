import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Pricing = () => {
	return (
		<div className="container py-3">
			<div className="p-3 pb-md-4 mx-auto text-center">
				<div className="text-center">
					<h2 className="display-4 fw-normal">Pricing</h2>
					<p className="fs-5 text-center text-muted">
						Our list of pricing. Three different plans to enjoy three different experiences. Contacts on the
						go. When you go. Wherever you go.
					</p>
				</div>

				<div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
					<div className="col">
						<div className="card mb-4 rounded-3 shadow-sm">
							<div className="card-header py-3">
								<h4 className="my-0 fw-normal"> Free</h4>
							</div>
						</div>
						<div className="card-body">
							<h1 className="card-title">
								$0
								<small className="text-muted fw-light">/mo</small>
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li> 10 users included</li>
								<li> 2 GB of storage</li>
								<li> Email support</li>
								<li> Help center access</li>
							</ul>
							<button className="w-100 btn btn-lg btn-outline-primary"> Sign Up For Free</button>
						</div>
					</div>
					<div className="col">
						<div className="card mb-4 rounded-3 shadow-sm">
							<div className="card-header py-3">
								<h4 className="my-0 fw-normal"> Free</h4>
							</div>
						</div>
						<div className="card-body">
							<h1 className="card-title">
								$15
								<small className="text-muted fw-light">/mo</small>
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li> 10 users included</li>
								<li> 2 GB of storage</li>
								<li> Email support</li>
								<li> Help center access</li>
							</ul>
							<button className="w-100 btn btn-lg btn-outline-primary"> Sign Up For Free</button>
						</div>
					</div>
					<div className="col">
						<div className="card mb-4 rounded-3 shadow-sm">
							<div className="card-header py-3">
								<h4 className="my-0 fw-normal"> Free</h4>
							</div>
						</div>
						<div className="card-body">
							<h1 className="card-title">
								$29
								<small className="text-muted fw-light">/mo</small>
							</h1>
							<ul className="list-unstyled mt-3 mb-4">
								<li> 10 users included</li>
								<li> 2 GB of storage</li>
								<li> Email support</li>
								<li> Help center access</li>
							</ul>
							<button className="w-100 btn btn-lg btn-outline-primary"> Sign Up For Free</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
