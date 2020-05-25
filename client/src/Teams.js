import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TeamForm from './TeamForm';

export default class Teams extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}
	async componentDidMount() {
		await axios
			.get(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/select/teams`)
			.then((res) => {
				console.log(res);
				const teamList = res.data;
				this.setState({ list: teamList });
			});
	}
	handleSubmit = async (evt) => {
		evt.preventDefault();
		await axios
			.post(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/create/teams`, this.state)
			.then((res) => {
				alert('New team submitted!');
				console.log(res);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	render() {
		return (
			<div className="container">
				<TeamForm handleSubmit={this.handleSubmit} />
				<hr class="my-4" />
				{this.state.list.map((item) => {
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Team ID:{item.id}</h5>
								<p className="card-text">Team Lead: {item.team_lead}</p>
								<p className="card-text">Assigned Project:{item.assigned_project}</p>
								<p className="card-text">Team Capacity:{item.capacity}</p>
								<p className="card-text">Full?:{item.is_full}</p>
								<Link exact to="/teams" class="btn btn-primary">
									View Team Members
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
