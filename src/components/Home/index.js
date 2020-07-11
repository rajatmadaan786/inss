import React from 'react';
import Navbar from '../Navbar/';
import './index.css';

class Home extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Navbar/>
				<div className="message">
					<h3>Welcome to Homepage!</h3>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;