import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
	static defaultProps = {
		items: [
			{ ProjectName: 'p1', Team: 't1' },
			{ ProjectName: 'p2', Team: 't2' },
			{ ProjectName: 'p3', Team: 't3' }
		]
	};

	//use componentDidUpdate to make API calls to get new data on nav click - component only mounts on page load, updates on nav click
	componentDidUpdate() {
		console.log('Component updated');
	}
	render() {
		return (
			<div className="ListContainer">
				<ul className="List">
					{this.props.items.map((item) => (
						<li className="ListItem">
							<div>Project Name: {item.ProjectName}</div>
							<div>Team: {item.Team}</div>
							<button>View</button>
							<button>Edit</button>
							<button>Delete</button>
							<button>Add Team Members</button>
							<button>Add Features</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
