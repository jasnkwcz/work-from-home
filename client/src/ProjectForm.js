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

	handleSubmit = async (evt) => {
		await axios
			.post(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/create/projects`, this.state)
			.then((res) => {
				console.log(res);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="container">
				<h1>Enter a new project:</h1>
				<form>
					<div className="form-group">
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
					<div className="form-group">
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
					<Link exact to="/projects" type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
						Submit project
					</Link>
				</form>
			</div>
		);
	}
}
