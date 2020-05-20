import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
	render() {
		return (
			<div className="container">
				<div className="col-md-3 ml-auto row">
					<Link exact to="/employees/add" className="btn btn-primary col">
						Create a new team
					</Link>
				</div>
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
