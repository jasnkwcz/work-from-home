import React, { Component } from 'react';
import './List.css';

export default class TaskItem extends Component {
	render() {
		return (
			<div>
				<li className="ListItem">
					<div>This is a task item</div>
					<label>Mark as complete?</label>
					<input type="checkbox" />
				</li>
			</div>
		);
	}
}
