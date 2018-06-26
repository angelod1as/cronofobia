import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
	render() {
		const { data } = this.props;

		return (<p>{data.data}</p>);
	}
}

App.propTypes = {
	data: PropTypes.object.isRequired,
};
