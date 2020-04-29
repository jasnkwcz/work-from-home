import React, { Component } from 'react';

export default class TeamItem extends Component {
	render() {
		return (
			<div>
				<li className="ListItem">
					<div>This is a Team item</div>
					<div>The team leader can go here</div>
					<ul>
						Here are some team members:
						<li>member1</li>
					</ul>
				</li>
			</div>
		);
	}
}
