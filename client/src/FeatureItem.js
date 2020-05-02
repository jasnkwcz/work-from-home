import React, { Component } from 'react';

export default class FeatureItem extends Component {
	render() {
		return (
			<div>
				<li className="ListItem">
					<div>This is a feature item</div>
					<label>Mark as complete?</label>
					<input type="checkbox" />
				</li>
			</div>
		);
	}
}
