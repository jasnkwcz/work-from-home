import React, { Component } from 'react';
import Navigation from './Navigation';
import './WorkFromHome.css';
import { Switch, Route, Link } from 'react-router-dom';
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

	render() {
		return (
			<div className="WorkFromHome">
				<Navigation />
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<div>
								<h1>Welcome</h1>
								<p>
									Work From Home is a platform for teams working remotely to coordinate with their
									peers and organize their remote work structure. Use the navbar above to view all
									projects, teams, or employees. Otherwise, you can use the links below to make
									something new.
								</p>
								<Link exact to="/Projects/New">
									Start a new project
								</Link>
								<br />
								<Link>Build a new team</Link>
								<br />
								<Link>Add a new employee</Link>
							</div>
						)}
					/>
					<Route
						exact
						path="/Projects"
						render={() => (
							<div>
								<Link exact to="/Projects/New">
									Start a new project
								</Link>
								<form>
									<label>Search projects by name:</label>
									<input type="text" />
									<button>search</button>
								</form>
								<List displayList="Projects" />
							</div>
						)}
					/>
					<Route
						exact
						path="/Projects/New"
						render={() => (
							<form>
								<label>Project name:</label>
								<input type="text" />
								<label>Description:</label>
								<input type="text" />
							</form>
						)}
					/>
					<Route
						exact
						path="/Teams"
						render={() => (
							<div>
								<Link exact to="/Teams/New">
									Build a new team
								</Link>
								<List displayList="Teams" />
							</div>
						)}
					/>
					<Route
						exact
						path="/Teams/New"
						render={() => (
							<form>
								<label>Team Name:</label>
								<input type="text" />
								<label>Team lead:</label>
								<input type="text" />
							</form>
						)}
					/>
					<Route
						exact
						path="/Employees"
						render={() => (
							<div>
								<Link exact to="/Employees/New">
									Add a new employee
								</Link>
								<List displayList="Employees" />
							</div>
						)}
					/>
					<Route
						exact
						path="/Employees/New"
						render={() => (
							<form>
								<label>First Name:</label>
								<input type="text" />
								<label>Last Name:</label>
								<input type="text" />
							</form>
						)}
					/>
					<Route
						exact
						path="/Employees/Add"
						render={() => (
							<div>
								<form>
									<label>Please enter the ID of the employee you want to add to the team:</label>
									<input type="text" />
									<button>submit</button>
								</form>
							</div>
						)}
					/>
					<Route
						path="/Projects/Display/:ProjectName"
						render={(routeProps) => (
							<div>Here we will display project details for {routeProps.match.params.ProjectName}</div>
						)}
					/>
					<Route
						path="/Projects/Edit/:ProjectName"
						render={(routeProps) => (
							<div>
								Here we can edit the project with name {routeProps.match.params.ProjectName} using a
								form
								<form>
									<label>Project name:</label>
									<input type="text" />
									<br />
									<label>Description:</label>
									<input type="text" />
									<br />
									<label>Employees:</label>
									<ul>
										<li>employee 1</li>
										<li>employee 2</li>
										<li>employee 3</li>
										<li>
											<button>Add employee</button>
										</li>
									</ul>
									<label>Features:</label>
									<ul>
										<li>feature 1</li>
										<li>feature 2</li>
										<li>feature 3</li>
										<li>
											<button>Add a new feature</button>
										</li>
									</ul>
								</form>
							</div>
						)}
					/>
					<Route
						path="/Projects/Delete/:ProjectName"
						render={(routeProps) => (
							<div>
								<div>Are you sure you want to delete {routeProps.match.params.ProjectName} ?</div>
								<div>
									<button>Yes</button>
									<button>No</button>
								</div>
							</div>
						)}
					/>
				</Switch>
				<div />
			</div>
		);
	}
}
