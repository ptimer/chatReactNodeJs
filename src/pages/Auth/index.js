import React from 'react'
import './Auth.scss';

import {Route} from 'react-router-dom'
import { LoginForm, RegisterForm } from '../../modules/index';


const Auth = props => {
	return (
		<section className="auth">
			<div className="auth-content">
				<Route exact path={['/', "/login"]} component={LoginForm} />
		        <Route exact path="/register" component={RegisterForm} />
   			</div>
		</section>

	);
}

export default Auth;