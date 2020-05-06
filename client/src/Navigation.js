import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<div>
				<div className="NavContainer">
					<div className="NavItem">
						<NavLink activeClassName="Nav-active" exact to="/Projects">
							Projects
						</NavLink>
					</div>
					<div className="NavItem">
						<NavLink activeClassName="Nav-active" exact to="/Teams">
							Teams
						</NavLink>
					</div>
					<div className="NavItem">
						<NavLink activeClassName="Nav-active" exact to="/Employees">
							Employees
						</NavLink>
					</div>
					<div className="Nav-title">
						<NavLink activeClassName="Nav-active" exact to="/">
							Work From Home
						</NavLink>
					</div>
				</div>
				<hr className="Nav-divider" />
			</div>
		);
	}
}
