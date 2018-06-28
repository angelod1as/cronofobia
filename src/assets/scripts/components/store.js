import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './store/product';

export default class Store extends Component {
	constructor() {
		super();
		this.state = {
			cart: [],
		};
		this.handleClick = this.handleClick.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
	}

	handleClick(e) {
		e.preventDefault();

		const cart = [...this.state.cart];
		cart.push('oi');
		this.setState({ cart });
	}

	render() {
		const { produtos } = this.props.data;

		return (
			<div className="store">
				<button onClick={this.handleClick}>CLICK ME</button>
				<h2>Loja</h2>
				<p>A loja funciona no regime <em>pague quanto quiser</em>.</p>
				<p>Os produtos digitais estão disponíveis a partir de <em>zero reais</em>, enquanto os impressos têm um <em>valor mínimo</em> (impressão e postagem). Cada produto também tem um <em>valor sugerido</em>.</p>
				<div className="storefront">
					{produtos.map(e => <Product prod={e} key={e.id} onUpdate={this.onUpdate} />)}
				</div>
			</div>
		);
	}
}

Store.propTypes = {
	data: PropTypes.object.isRequired,
};
