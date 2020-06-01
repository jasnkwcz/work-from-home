import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteButton extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}

	handleDelete = async (evt) => {
		evt.preventDefault();
		console.log('Deleting project with ID: ', this.props.id);
		await axios
			.post(
				`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/delete/projects/${this.props.id}`
			)
			.then((res) => {
				console.log(res);
			})
			.catch(function(error) {
				console.log(error);
			});
		await axios
			.get(`http://workfromhome-env-1.eba-mwb43dpw.us-east-1.elasticbeanstalk.com/select/projects`)
			.then((res) => {
				console.log(res);
				const projectList = res.data;
				this.setState({ list: projectList });
			});
		this.props.deleteProject(this.state.list);
	};

	render() {
		return (
			<button className="btn btn-primary ml-1" onClick={this.handleDelete}>
				Delete
			</button>
		);
	}
}
