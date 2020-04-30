import React, { Component } from 'react';
import WorkFromHome from './WorkFromHome';

class App extends Component {
	constructor(props){
		super(props);
		this.state = { apiResponse: "" };
	}	
	callAPI(){
		fetch("http://localhost:9000/testAPI")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }))
			.catch(err => err);
	}

	componentDidMount() {
		this.callAPI();
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
