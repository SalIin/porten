import React from 'react';
import { Navbar } from '../../components/Navbar';
import './account-page.scss';

export const AccountPage = () => {
	return (
		<div className="account">
			<Navbar />

			<div className="container">
				<h1>Sign in</h1>
				<form className="jumbotron w-50">
					<input type="email" placeholder="Email" className="form-control" />
					<input type="password" placeholder="Password" className="form-control mt-3" />
					<button type="submit" className="btn btn-success mt-3 w-50">Sign in</button>
				</form>
			</div>
		</div>
	)
}
