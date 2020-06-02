import React, { Component } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import CompleteButton from './CompleteButton';

export default class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
		this.addItem = this.addItem.bind(this);
		this.completeTask = this.completeTask.bind(this);
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

	addItem(items) {
		this.setState((state) => ({
			list: items
		}));
	}

	completeTask(items) {
		this.setState((state) => ({
			list: items
		}));
	}

	render() {
		return (
			<div className="container">
				<TaskForm addItem={this.addItem} />
				<hr class="my-4" />
				{this.state.list.map((item) => {
					console.log('item.for_feature = ', item.for_feature);
					console.log('this.props.featureId = ', this.props.featureId);
					if (item.for_feature === Number(this.props.featureId)) {
						console.log('Match');
						return (
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Task:{item.id}</h5>
									<p className="card-text">Description: {item.description}</p>
									<p className="card-text">Due date:{item.due_date}</p>
									<p className="card-text">For feature:{item.for_feature}</p>
									<p className="card-text">Assigned employee:{item.assigned_to}</p>
									<p className="card-text">Completed? {item.completed === 0 ? 'No' : 'Yes'}</p>
									<CompleteButton completeTask={this.completeTask} id={item.id}>
										Mark complete
									</CompleteButton>
								</div>
							</div>
						);
					}
				})}
			</div>
		);
	}
}
