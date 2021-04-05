import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Mailchimp from './mailchimp';

export default class Opening extends Component {
	refresh() {
		window.location.href = window.location.href.split('?')[0]; // eslint-disable-line
	}

	render() {
		return (
			<div className="opening">
				<div className="intro">
					<h1>CRONOFOBIA</h1>
					<p className="lead">Zines & podcasts</p>
					{!this.props.query ?
						<button onClick={this.props.showAbout}>{this.props.about ? 'Voltar à loja' : 'Sobre'}</button>
						: <button onClick={this.refresh}>Voltar ao site</button>}
					{/* <img src="https://media.giphy.com/media/l0MYOUI5XfRk4LLWM/giphy.gif" alt="" /> */}
				</div>
				{/* {this.props.about ? '' : <Mailchimp />} */}
				<a href="https://anchor.fm/cronofobia" rel="noopener noreferrer" target="_blank">
					<figure>
						<img src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/11107849/11107849-1607021440388-92e12c0864cb3.jpg" alt="Capa do podcast" />
						<figcaption>Escute o podcast <b>Cronofobia</b></figcaption>
					</figure>
				</a>

				<div className="print-info">
					<p className="small"><small><b><i>Cadê o material impresso?</i></b></small></p>
					<p className="small"><small><i>Parei de produzir edições impressas há um tempo. Se mesmo assim quiser, <a href="mailto:oicronofobico@gmail.com">me envie um email e vamos conversar</a></i></small></p>
				</div>
			</div>
		);
	}
}

Opening.propTypes = {
	showAbout: PropTypes.func.isRequired,
	about: PropTypes.bool.isRequired,
	query: PropTypes.string.isRequired,
};
