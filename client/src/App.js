import React, { Component } from 'react';
import WorkFromHome from './WorkFromHome';

class App extends Component {
	constructor(props){
		super(props);
		this.state = { apiResponse: "placeholder API message" };
	}

	render() {
		return (
			<div>
				<WorkFromHome />
				<p>{this.state.apiResponse}</p>
			</div>
		);
	}
}

export default App;
