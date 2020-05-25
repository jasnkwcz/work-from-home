import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ProjectForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			description: '',
			assigned_team: 0
		};
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	render() {
		return (
			<div className="container">
				<h1>Enter a new project:</h1>
				<form handleSubmit={this.props.handleSubmit}>
					<div className="row">
						<div className="form-group col">
							<label htmlFor="description">Project description:</label>
							<input
								type="text"
								className="form-control"
								id="description"
								placeholder="Enter a short description of your new project"
								name="description"
								value={this.state.description}
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group col">
							<label htmlFor="assigned_team">Assign to team:</label>
							<input
								type="number"
								className="form-control"
								id="assigned_team"
								name="assigned_team"
								value={this.state.assigned_team}
								onChange={this.handleChange}
							/>
						</div>
					</div>

					<button type="submit" className="btn btn-primary" onClick={this.props.handleSubmit}>
						Submit project
					</button>
				</form>
			</div>
		);
	}
}
