import React, { Component } from 'react';

export default class ProjectItem extends Component {
	render() {
		return (
			<div>
				<li className="ListItem">
					<div>Project Name: {this.props.projectName}</div>
					<div>Team: {this.props.team}</div>
					<button>View</button>
					<button>Edit</button>
					<button>Delete</button>
					<button>Add Team Members</button>
					<button>Add Features</button>
				</li>
			</div>
		);
	}
}
