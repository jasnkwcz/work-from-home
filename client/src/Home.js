import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 class="display-4">Welcome to Work From Home</h1>
					<p class="lead">
						This application is designed to help organize workflow for teams that need to work remotely.
					</p>
					<hr class="my-4" />
					<p>
						You can create projects, organize teams, assign employees and so much more. Use the navbar at
						the top to get started.
					</p>
				</div>
			</div>
		);
	}
}
