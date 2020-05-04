import React, { Component } from 'react';
import './Navigation.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import List from './List';

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
						<NavLink activeClassName="Nav-active" exact to="/Features">
							Features
						</NavLink>
					</div>
					<div className="NavItem">
						<NavLink activeClassName="Nav-active" exact to="/Tasks">
							Tasks
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
					<div className="Nav-title">Work From Home</div>
				</div>
				<hr className="Nav-divider" />
			</div>
		);
	}
}
