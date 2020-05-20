import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="/">
					Work From Home
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/projects">
								Projects
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/teams">
								Teams
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/employees">
								Employees
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
