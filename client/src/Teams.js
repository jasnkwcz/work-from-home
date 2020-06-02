import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TeamForm from './TeamForm';

export default class Teams extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
		this.addItem = this.addItem.bind(this);
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

	addItem(items) {
		this.setState((state) => ({
			list: items
		}));
	}

	render() {
		return (
			<div className="container">
				<TeamForm addItem={this.addItem} />
				<hr class="my-4" />
				{this.state.list.map((item) => {
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Team ID:{item.id}</h5>
								<p className="card-text">Team Lead: {item.team_lead}</p>
								<p className="card-text">Assigned Project:{item.assigned_project}</p>
								<p className="card-text">Team Capacity:{item.capacity}</p>
								<p className="card-text">Full?: {item.is_full === -1 ? 'Yes' : 'No'}</p>
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
