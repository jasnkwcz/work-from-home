import React, { Component } from 'react';
import './Modal.css';

export default class ViewModal extends Component {
	handleClick = () => {
		this.props.toggle();
	};

	render() {
		return (
			<div className="modal">
				<div className="modal-content">Viewing project information</div>
			</div>
		);
	}
}
