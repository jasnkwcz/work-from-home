import React, { Component } from 'react';

export default class FeatureList extends Component {
	render() {
		return (
			<div>
				<p>Search For Projects</p>
				<form>
					<label>Project Name</label>
					<input type="text" />
					<br />
					<label>Team Lead</label>
					<input type="text" />
					<br />
					<label>Is Open?</label>
					<input type="checkbox" />
				</form>
			</div>
		);
	}
}
