import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from '../static/utils';

export default class Product extends Component {
	onUpdate() {
		console.log('foi');
		return 'oi';
	}

	render() {
		const p = this.props.prod;

		return (
			<div className={`product ${p.id}`} key={p.id}>
				<img src={p.img} alt={`capa do zine "${p.title}"`} />
				<div className="side">
					<form className="form" onSubmit={this.onUpdate}>
						<h3 data-title={utils.slugfy(p.title)}>{p.title}</h3>
						<p className="description">{p.desc}</p>
						<p className="suggested">valor sugerido: {p.sug}</p>
						{/* FORM */}
						<label htmlFor="price">
							Quero pagar
							R$ <input
								id="price"
								placeholder={p.sug}
								className="form_qtd"
								type="number"
								name="quantity"
								min="0"
							/>
						</label>
						<label htmlFor="qtd">
							Por <input
								id="qtd"
								placeholder="1"
								className="form_qtd"
								type="number"
								name="quantity"
								min="1"
							/> zine(s)
						</label>
						<button className="button">
							+ carrinho
						</button>
					</form>
				</div>
			</div>
		);
	}
}

Product.propTypes = {
	prod: PropTypes.object.isRequired,
};
