import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProjectForm from './ProjectForm';
import ProjectSearch from './ProjectSearch';
import DeleteButton from './DeleteButton';

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
		this.addItem = this.addItem.bind(this);
		this.searchProject = this.searchProject.bind(this);
		this.deleteProject = this.deleteProject.bind(this);
	}
	async componentDidMount() {
		await axios
			.get(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/select/projects`)
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

	searchProject(item) {
		this.setState((state) => ({
			list: item
		}));
	}

	deleteProject(items) {
		this.setState((state) => ({
			list: items
		}));
	}

	render() {
		return (
			<div className="container">
				<ProjectForm addItem={this.addItem} />
				<hr class="my-4" />
				<ProjectSearch searchProject={this.searchProject} />
				<div class="my-4" />

				<div className="col-md-3" />

				{this.state.list.map((item) => {
					const featureUrl = `/projects/${item.id}`;
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Project ID:{item.id}</h5>
								<p className="card-text">Description: {item.description}</p>
								<p className="card-text">Assigned Team:{item.assigned_team}</p>
								<Link exact to={featureUrl} className="btn btn-primary">
									See project features
								</Link>
								<DeleteButton id={item.id} deleteProject={this.deleteProject} />
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
