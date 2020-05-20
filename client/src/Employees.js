import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Employees extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}
	async componentDidMount() {
		await axios
			.get(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/select/employees`)
			.then((res) => {
				console.log(res);
				const employeeList = res.data;
				this.setState({ list: employeeList });
			});
	}
	render() {
		return (
			<div className="container">
				<div className="col-md-3 ml-auto row">
					<Link exact to="/employees/add" className="btn btn-primary col">
						Add a new employee
					</Link>
				</div>
				{this.state.list.map((item) => {
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">
									Name:{item.first_name} {item.last_name}
								</h5>
								<p className="card-text">TimeZone: {item.time_zone}</p>
								<p className="card-text">Seniority:{item.seniority}</p>
								<p className="card-text">Team:{item.team_id}</p>
								<Link exact to="/employees" class="btn btn-primary">
									Edit information
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

/*
 {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "time_zone": "-5",
        "seniority": "Senior",
        "team_id": 1
},
    */
