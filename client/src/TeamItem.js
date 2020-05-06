import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

export default class TeamItem extends Component {
	render() {
		return (
			<div>
				<li className="ListItem">
					<h2>Team Name:</h2>
					<h3>Team lead:</h3>
					<ul>
						Here are some team members:
						<li>member1</li>
					</ul>
					<Link to="Employees/Add">
						<button>Add an employee</button>
					</Link>
				</li>
			</div>
		);
	}
}
