import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Opening from './components/opening';
import Mailchimp from './components/mailchimp';

export default class App extends Component {
	render() {
		const { data } = this.props;

		return (
			<div className="main">
				<Opening />
				<Mailchimp />
			</div>
		);
	}
}

App.propTypes = {
	data: PropTypes.object.isRequired,
};
