import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import ProjectForm from './ProjectForm';
import Teams from './Teams';
import TeamForm from './TeamForm';
import Tasks from './Tasks';
import TaskForm from './TaskForm';
import Features from './Features';
import FeatureForm from './FeatureForm';
import Navbar from './Navbar';
import Employees from './Employees';
import EmployeeForm from './EmployeeForm';

export default class WorkFromHome extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/projects" render={() => <Projects />} />
					<Route exact path="/projects/add" render={() => <ProjectForm />} />
					<Route exact path="/teams" render={() => <Teams />} />
					<Route exact path="/teams/add" render={() => <TeamForm />} />
					<Route exact path="/employees" render={() => <Employees />} />
					<Route exact path="/employees/add" render={() => <EmployeeForm />} />
					<Route exact path="/tasks" render={() => <Tasks />} />
					<Route exact path="/tasks/add" render={() => <TaskForm />} />
					<Route exact path="/features" render={() => <Features />} />
					<Route exact path="/features/add" render={() => <FeatureForm />} />
				</Switch>
			</div>
		);
	}
}
