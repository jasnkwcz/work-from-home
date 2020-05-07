import React, { Component } from 'react';
import './List.css';
import ProjectItem from './ProjectItem';
import FeatureItem from './FeatureItem';
import TaskItem from './TaskItem';
import TeamItem from './TeamItem';
import EmployeeItem from './EmployeeItem';

const axios = require('axios');

export default class List extends Component {
	static defaultProps = {
		displayList: 'Projects', //default display is projects
		items: [
			{ ProjectName: 'p1', Team: 't1' },
			{ ProjectName: 'p2', Team: 't2' },
			{ ProjectName: 'p3', Team: 't3' }
		]
	};

	//use componentDidUpdate to make API calls to get new data on nav click - component only mounts on page load, updates on nav click
	componentDidUpdate() {
        axios.get('/Projects').then(function (response)
            {
                console.log(response);
            });
		console.log('Component updated');
	}

	render() {
		return (
			<div className="ListContainer">
				<ul className="List">
					{this.props.items.map((item) => {
						switch (this.props.displayList) {
							case 'Projects':
								return <ProjectItem projectName={item.ProjectName} team={item.Team} />;
							case 'Features':
								return <FeatureItem />;
							case 'Tasks':
								return <TaskItem />;
							case 'Teams':
								return <TeamItem />;
							case 'Employees':
								return <EmployeeItem />;
							default:
								return <ProjectItem projectName={item.ProjectName} team={item.Team} />;
						}
					})}
				</ul>
			</div>
		);
	}
}
