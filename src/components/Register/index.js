import React from 'react';
import Navbar from '../Navbar/';
import './index.css';

class Registration extends React.Component{
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
					                            <h6 className="mb-0 text-sm">First name</h6>
					                        </label> <input className="mb-4" type="password" name="password" placeholder="Enter password"/> </div>
					                    <div className="row px-3"> <label className="mb-1">
					                            <h6 className="mb-0 text-sm">Last name</h6>
					                        </label> <input className="mb-4" type="password" name="password" placeholder="Enter password"/> </div>
					                    <div className="row px-3"> <label className="mb-1">
					                            <h6 className="mb-0 text-sm">Email</h6>
					                        </label> <input className="mb-4" type="password" name="password" placeholder="Enter password"/> </div>
					                    <div className="row px-3"> <label className="mb-1">
					                            <h6 className="mb-0 text-sm">Password</h6>
					                        </label> <input className="mb-4" type="password" name="password" placeholder="Enter password"/> </div>					                        					                        					
					                    <div className="row px-3"> <label className="mb-1">
					                            <h6 className="mb-0 text-sm">Confirm Password</h6>
					                        </label> <input className="mb-4" type="password" name="password" placeholder="Enter password"/> </div>
					                    <div className="row mb-3 px-3"> <button type="submit" className="btn register-btn text-center">Register</button> </div>
					                    <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <a href="javascript:void(0)" className="text-danger">Login</a></small> </div>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>
			</React.Fragment>
		);
	}
}

export default Registration;