import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/';
import Login from './components/Login/';
import Register from './components/Register/';

class App extends React.Component {
	render(){
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>					
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>						
					</Switch>
				</div>
			</Router>			
		);
	}
}

export default App;
