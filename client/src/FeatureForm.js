import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class FeatureForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project_id: '',
			description: '',
			type: '',
			priority: '',
			completed: ''
		};
	}
	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	/*
id         unique int
project_id  int FK >-< Projects.id
description varchar
type        bool #true if front end, false if back end
priority    int
completed   bool
    */

	handleSubmit = async (evt) => {
		await axios
			.post(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/create/features`, this.state)
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
				<h1>Enter a new feature:</h1>
				<form>
					<div className="form-group">
						<label htmlFor="project_id">Project ID:</label>
						<input
							type="number"
							className="form-control"
							id="project_id"
							placeholder="Project ID"
							name="project_id"
							onChange={this.handleChange}
						/>
					</div>
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
						<label htmlFor="type">Type:</label>
						<input
							type="text"
							className="form-control"
							id="type"
							name="type"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="priority">Priority</label>
						<select
							type="select"
							className="form-control"
							id="is_full"
							name="is_full"
							onChange={this.handleChange}
						>
							<option selected value="1">
								1
							</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="completed">Completed?</label>
						<select
							type="select"
							className="form-control"
							id="completed"
							name="completed"
							onChange={this.handleChange}
						>
							<option value="true">Yes</option>
							<option selected value="false">
								No
							</option>
						</select>
					</div>
					<Link exact to="/teams" type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
						Create team
					</Link>
				</form>
			</div>
		);
	}
}
