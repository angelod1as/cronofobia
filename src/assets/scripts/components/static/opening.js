import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Opening extends Component {
	render() {
		return (
			<div className="opening">
				<h1>CRONOFOBIA</h1>
				<p className="lead">Newsletter, zine e mais distrações</p>
				{/* IFRAME */}
				{/* <div style={{
					width: '100%',
					height: 0,
					paddingBottom: '75%',
					position: 'relative',
				}}
				>
					<iframe
						src="https://giphy.com/embed/l0MYOUI5XfRk4LLWM"
						title="gif"
						width="100%"
						height="100%"
						style={{ position: 'absolute' }}
						frameBorder={0}
						className="giphy-embed"
						allowFullScreen
					/>
				</div> */}
				<p>Se você caiu aqui, provavelmente alguém te passou esse link.</p>
				<p>
					<em>
						Ouse, arrisque-se, seja aventureiro
					</em>,
					enfie seu email nos campos abaixo e aguarde novas informações.
				</p>
				<p>
					<small>
					(é bem provável que eu arrume esse HTML lixo
					em algumas semanas. Por enquanto, é o que tem pra hoje)
					</small>
				</p>
			</div>
		);
	}
}
