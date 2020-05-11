import React, { Component } from 'react';
import './List.css';
import { Link } from 'react-router-dom';

export default class FeatureItem extends Component {
	render() {
		const tasksUrl = `/Features/${this.props.FeatureName}/Tasks}`;
		return (
			<div>
				<li className="ListItem">
					<div>This is a feature item</div>
					<label>Mark as complete?</label>
					<input type="checkbox" />
					<Link to={tasksUrl}>
						<button>Tasks</button>
					</Link>
				</li>
			</div>
		);
	}
}
