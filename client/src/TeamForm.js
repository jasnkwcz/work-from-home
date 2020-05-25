import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TeamForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			team_lead: '',
			assigned_project: '',
			capacity: '',
			is_full: ''
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
				<h1>Enter a new team:</h1>
				<form>
					<div className="row">
						<div className="form-group col">
							<label htmlFor="team_lead">Team lead ID:</label>
							<input
								type="number"
								className="form-control"
								id="team_lead"
								placeholder="0"
								name="team_lead"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group col">
							<label htmlFor="assigned_project">Assigned project ID:</label>
							<input
								type="number"
								className="form-control"
								id="assigned_project"
								name="assigned_project"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="row">
						<div className="form-group col">
							<label htmlFor="capactity">Team capacity:</label>
							<input
								type="number"
								className="form-control"
								id="capacity"
								name="capacity"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group col">
							<label htmlFor="is_full">Team is full?</label>
							<select
								type="select"
								className="form-control"
								id="is_full"
								name="is_full"
								onChange={this.handleChange}
							>
								<option value="-1">Yes</option>
								<option value="0">No</option>
							</select>
						</div>
						<button
							type="submit"
							className="btn btn-primary col-sm-2 my-1"
							onClick={this.props.handleSubmit}
						>
							Create team
						</button>
					</div>
				</form>
			</div>
		);
	}
}
