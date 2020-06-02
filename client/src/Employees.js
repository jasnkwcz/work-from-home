import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';

export default class Employees extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
		this.addItem = this.addItem.bind(this);
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
	handleSubmit = async (evt) => {
		evt.preventDefault();
		await axios
			.post(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/create/employees`, this.state)
			.then((res) => {
				alert(res);
				console.log(res);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	addItem(items) {
		this.setState((state) => ({
			list: items
		}));
	}

	render() {
		return (
			<div className="container">
				<EmployeeForm addItem={this.addItem} />
				<hr class="my-4" />
				{this.state.list.map((item) => {
					return (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">
									Name:{item.first_name} {item.last_name}
								</h5>
								<p className="card-text">
									TimeZone: UTC {item.time_zone > 0 ? '+' : '-'}
									{Math.abs(item.time_zone)}
								</p>
								<p className="card-text">Seniority: {item.seniority}</p>
								<p className="card-text">Team: {item.team_id}</p>
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
