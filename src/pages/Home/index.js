import React from 'react'
import {Route} from 'react-router-dom'

import './Home.scss';
import { LoginForm, RegisterForm } from '../../modules/index';
import { Message } from '../../components/index'

const Home = props => {
	return (
		<section className="home">
			<Message
			avatar="https://lh3.googleusercontent.com/proxy/pYODNNbwXErDbeS_bsZ-JzE-PgZUwBgVs6pnsqd2FoOAQOEjB1lsw-cI8SvnFc-Ntuo1LKAusmKhNWMfLV6CnD6lU0SWtmZvqTW-GwBbOTSNHG8nZ28kjKSKSXrbT_d3dCitG1MXngWh"
			text="Салам, Брут ! Че как, уничтожил флот галлов ?"
			date="Sun apr 21 2019 21:30:07"
			/>
		</section>

	);
}

export default Home;