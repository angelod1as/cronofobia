import React, { Component } from 'react';
import Mailchimp from './mailchimp';

export default class Opening extends Component {
	render() {
		return (
			<div className="opening">
				<div className="intro">
					<h1>CRONOFOBIA</h1>
					<p className="lead">Newsletter, zines e distrações</p>
					{/* IFRAME */}
					<img src="https://media.giphy.com/media/l0MYOUI5XfRk4LLWM/giphy.gif" alt="" />
				</div>
				<Mailchimp />
			</div>
		);
	}
}
