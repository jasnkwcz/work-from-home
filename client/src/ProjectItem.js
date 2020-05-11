import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ViewModal from './ViewModal';
import './List.css';

export default class ProjectItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view: false,
			edit: false,
			delete: false,
			addMember: false,
			addFeature: false
		};
	}

	toggleView = () => {
		console.log('Calling toggleView');
		this.setState({
			view: !this.state.view
		});
	};

	toggleEdit = () => {
		this.setState({
			edit: !this.state.edit
		});
	};

	toggleDelete = () => {
		this.setState({
			delete: !this.state.delete
		});
	};

	toggleAddMember = () => {
		this.setState({
			addMember: !this.state.addMember
		});
	};

	toggleAddFeature = () => {
		this.setState({
			addFeature: !this.state.addFeature
		});
	};

	render() {
		const viewUrl = `/Projects/Display/${this.props.projectName}`;
		const editUrl = `/Projects/Edit/${this.props.projectName}`;
		const deleteUrl = `/Projects/Delete/${this.props.projectName}`;
		const assignUrl = `/Projects/AssignTeam/${this.props.projectName}`;
		return (
			<div>
				<li className="ListItem">
					<div>
						<h2>Project Name:</h2>
						{this.props.projectName}
					</div>
					<div>
						<h3>Team:</h3>
						{this.props.team}
					</div>
					{this.state.view ? <ViewModal toggle={this.toggleView} /> : null}
					<Link to={viewUrl}>
						<button>Display Details</button>
					</Link>
					<Link to={editUrl}>
						<button>Edit</button>
					</Link>
					<Link to={deleteUrl}>
						<button>Delete</button>
					</Link>
					<Link to={assignUrl}>
						<button>Assign a new team to this project</button>
					</Link>
					<label>Mark this project complete?</label>
					<input type="checkbox" />
				</li>
			</div>
		);
	}
}
