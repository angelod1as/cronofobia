import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Opening from './components/static/opening';
import Mailchimp from './components/static/mailchimp';
import Store from './components/store';

export default class App extends Component {
	constructor(props) {
		super(props);
		// this.state = props.data;
		this.data = this.props.data;
	}

	render() {
		console.log(this.props);
		return (
			<div className="main">
				<Opening />
				<Mailchimp />
				<Store data={this.data} />
			</div>
		);
	}
}

App.propTypes = {
	data: PropTypes.object.isRequired,
};
