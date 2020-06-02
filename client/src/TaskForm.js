import React, { Component } from 'react';
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

	handleSubmit = async (evt) => {
		evt.preventDefault();
		await axios
			.post(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/create/tasks`, this.state)
			.then((res) => {
				console.log(res);
			})
			.catch(function(error) {
				console.log(error);
			});
		await axios
			.get(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/select/tasks`)
			.then((res) => {
				console.log(res);
				const projectList = res.data;
				this.setState({ list: projectList });
			});
		this.props.addItem(this.state.list);
	};

	render() {
		return (
			<div className="container">
				<h1>Enter a new task:</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="form-group col">
							<label htmlFor="due_date">Due date:</label>
							<input
								type="date"
								className="form-control"
								id="due_date"
								name="due_date"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group col">
							<label htmlFor="for_feature">For feature:</label>
							<input
								type="number"
								className="form-control"
								id="for_feature"
								name="for_feature"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group col">
							<label htmlFor="assigned_to">Assigned to employee:</label>
							<input
								type="number"
								className="form-control"
								id="assigned_to"
								name="assigned_to"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group col">
							<label htmlFor="completed">Completed?</label>
							<select
								className="form-control"
								id="completed"
								name="completed"
								onChange={this.handleChange}
							>
								<option value="0">No</option>
								<option value="1">Yes</option>
							</select>
						</div>
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

					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
						Add task
					</button>
				</form>
			</div>
		);
	}
}
