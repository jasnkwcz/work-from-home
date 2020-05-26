import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FeatureForm from './FeatureForm';

export default class Features extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
		this.addItem = this.addItem.bind(this);
	}
	async componentDidMount() {
		await axios
			.get(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/select/features`)
			.then((res) => {
				console.log(res);
				const projectList = res.data;
				this.setState({ list: projectList });
			});
	}

	addItem(items) {
		this.setState((state) => ({
			list: items
		}));
	}

	render() {
		return (
			<div className="container">
				<FeatureForm addItem={this.addItem} />
				<hr class="my-4" />
				{this.state.list.map((item) => {
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Feature ID:{item.id}</h5>
								<p className="card-text">For project: {item.project_id}</p>
								<p className="card-text">Description: {item.description}</p>
								<p className="card-text">Front/back end: {item.type}</p>
								<p className="card-text">Priority:: {item.priority}</p>
								<p className="card-text">Completed? {item.completed}</p>
								<Link class="btn btn-primary">See tasks for this feature</Link>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
