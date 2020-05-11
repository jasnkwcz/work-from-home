import React, { Component } from 'react';
import './List.css';

export default class EmployeeItem extends Component {
	render() {
		return (
			<div>
				<li className="ListItem">
					<div>Here is an employee</div>
					<div>This is the team they're on</div>
					<div>Maybe a list of the tasks they're currently working on can go in here too</div>
					<button>Edit employee information</button>
					<button>Remove employee</button>
				</li>
			</div>
		);
	}
}
