import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProjectForm from './ProjectForm';

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}
	async componentDidMount() {
		console.log('Project component mounted');
		await axios
			.get(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/select/projects`)
			.then((res) => {
				console.log(res);
				const projectList = res.data;
				this.setState({ list: projectList });
			});
	}

	handleSubmit = async (evt) => {
		evt.preventDeafult();
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
				<ProjectForm handleSubmit={this.handleSubmit} />
				<hr class="my-4" />
				<div className="row">
					<div className="input-group input-group-md col">
						<div className="input-group-prepend">
							<select className="custom-select">
								<option selected value="id">
									Search projects by ID
								</option>
								<option value="description">Search projects by description</option>
							</select>
						</div>
						<input
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Search projects"
						/>
						<Link exact to="" className="btn btn-primary">
							Go!
						</Link>
					</div>
				</div>
				<div class="my-4" />

				<div className="col-md-3" />

				{this.state.list.map((item) => {
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Project ID:{item.id}</h5>
								<p className="card-text">Description: {item.description}</p>
								<p className="card-text">Assigned Team:{item.assigned_team}</p>
								<Link className="btn btn-primary">See project features</Link>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
