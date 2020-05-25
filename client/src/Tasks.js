import React, { Component } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';

export default class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}
	async componentDidMount() {
		await axios
			.get(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/select/tasks`)
			.then((res) => {
				console.log(res);
				const teamList = res.data;
				this.setState({ list: teamList });
			});
	}
	render() {
		return (
			<div className="container">
				<TaskForm />
				<hr class="my-4" />
				{this.state.list.map((item) => {
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Task:{item.id}</h5>
								<p className="card-text">Description: {item.description}</p>
								<p className="card-text">Due date:{item.due_date}</p>
								<p className="card-text">For feature:{item.for_feature}</p>
								<p className="card-text">Assigned employee:{item.assigned_to}</p>
								<p className="card-text">Completed? {item.completed}</p>
								<a href="#" class="btn btn-primary">
									Mark this complete
								</a>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
