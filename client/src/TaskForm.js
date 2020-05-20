import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: '',
			due_date: '',
			completed: '',
			for_feature: '',
			assigned_to: ''
		};
	}
	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	/*
    id          unique int
description varchar
due_date     datetime
completed   bool
for_feature  int FK >-< Features.id
assigned_to  uniqueInt FK - Employees.id
*/

	handleSubmit = async (evt) => {
		await axios
			.post(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/create/tasks`, this.state)
			.then((res) => {
				alert(res);
				console.log(res);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="container">
				<h1>Enter a new task:</h1>
				<form>
					<div className="form-group">
						<label htmlFor="description">Description:</label>
						<input
							type="text"
							className="form-control"
							id="description"
							name="description"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="due_date">Due date:</label>
						<input
							type="date"
							className="form-control"
							id="due_date"
							name="due_date"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="completed">Completed?</label>
						<select className="form-control" id="completed" name="completed" onChange={this.handleChange}>
							<option value="false">No</option>
							<option value="true">Yes</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="for_feature">For feature:</label>
						<input
							type="number"
							className="form-control"
							id="for_feature"
							name="for_feature"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="assigned_to">Assigned to employee:</label>
						<input
							type="number"
							className="form-control"
							id="assigned_to"
							name="assigned_to"
							onChange={this.handleChange}
						/>
					</div>
					<Link exact to="/teams" type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
						Create team
					</Link>
				</form>
			</div>
		);
	}
}
