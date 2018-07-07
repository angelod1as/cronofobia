import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Mailchimp from './mailchimp';

export default class Opening extends Component {
	refresh() {
		window.location.href = window.location.href.split('?')[0]; // eslint-disable-line
	}

	render() {
		return (
			<div className="opening">
				<div className="intro">
					<h1>CRONOFOBIA</h1>
					<p className="lead">Newsletter, zines e distrações</p>
					{!this.props.query ?
						<button onClick={this.props.showAbout}>{this.props.about ? 'Voltar à loja' : 'Sobre'}</button>
						: <button onClick={this.refresh}>Voltar ao site</button>}
					{/* <img src="https://media.giphy.com/media/l0MYOUI5XfRk4LLWM/giphy.gif" alt="" /> */}
				</div>
				{this.props.about ? '' : <Mailchimp />}
			</div>
		);
	}
}

Opening.propTypes = {
	showAbout: PropTypes.func.isRequired,
	about: PropTypes.bool.isRequired,
	query: PropTypes.string.isRequired,
};
