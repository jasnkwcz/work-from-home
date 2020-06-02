import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Teams from './Teams';
import Tasks from './Tasks';
import Features from './Features';
import Navbar from './Navbar';
import Employees from './Employees';
import Home from './Home';

export default class WorkFromHome extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/projects" render={() => <Projects />} />
					<Route
						exact
						path="/projects/:id"
						render={(routeProps) => <Features id={routeProps.match.params.id} />}
					/>
					<Route exact path="/teams" render={() => <Teams />} />
					<Route exact path="/employees" render={() => <Employees />} />
					<Route
						exact
						path="/tasks/:featureId"
						render={(routeProps) => <Tasks featureId={routeProps.match.params.featureId} />}
					/>
					<Route exact path="/features" render={() => <Features />} />
				</Switch>
			</div>
		);
	}
}
