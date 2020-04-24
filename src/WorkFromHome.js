import React, { Component } from 'react';
import Navigation from './Navigation';
import './WorkFromHome.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import List from './List';

export default class WorkFromHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ ProjectName: 'Project1', Team: 'team1' },
				{ ProjectName: 'Project2', Team: 'team2' },
				{ ProjectName: 'Project3', Team: 'team3' }
			]
		};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="WorkFromHome">
				<h1 className="PageTitle">Work From Home</h1>
				<Navigation />
				<Switch>
					<Route exact path="/Projects" render={() => <List />} />
					<Route exact path="/Features" render={() => <List />} />
					<Route exact path="/Tasks" render={() => <List />} />
					<Route exact path="/Teams" render={() => <List />} />
					<Route exact path="/Employees" render={() => <List />} />
				</Switch>
				<div />
			</div>
		);
	}
}
