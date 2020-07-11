import React from 'react';
import Navbar from '../Navbar/';
import './index.css';

class Login extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Navbar/>
					<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
					    <div className="card card0 border-0">
					        <div className="row d-flex">
					            <div className="col-lg-6">
					                <div className="card1 pb-5">
					                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="/images/login-foreground.png" className="image" alt=""/> </div>
					                </div>
					            </div>
					            <div className="col-lg-6">
					                <div className="card2 card border-0 px-4 py-5">
					                    <div className="row px-3"> <label className="mb-1">
					                            <h6 className="mb-0 text-sm">Username</h6>
					                        </label> <input className="mb-4" type="text" name="email" placeholder="Enter username" /> </div>
					                    <div className="row px-3"> <label className="mb-1">
					                            <h6 className="mb-0 text-sm">Password</h6>
					                        </label> <input type="password" name="password" placeholder="Enter password"/> </div>					                        					                        					
					                    <div className="row px-3 mb-4">
					                        <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="javascript:void(0)" className="ml-auto mb-0 text-sm">Forgot Password?</a>
					                    </div>
					                    <div className="row mb-3 px-3"> <button type="submit" className="btn login-btn text-center">Login</button> </div>
					                    <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger ">Register</a></small> </div>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>
			</React.Fragment>
		);
	}
}

export default Login;