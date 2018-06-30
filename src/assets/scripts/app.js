import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Opening from './components/static/opening';
import Mailchimp from './components/static/mailchimp';
import Store from './components/store/store';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.data = this.props.data;
	}

	render() {
		return (
			<div className="main">
				<div className="left">
					<div className="left_container">
						<Opening />
						<Mailchimp />
					</div>
				</div>
				<div className="right">
					<Store data={this.data} />
				</div>
			</div>
		);
	}
}

App.propTypes = {
	data: PropTypes.object.isRequired,
};
