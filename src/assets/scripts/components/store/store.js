import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './product';
import Cart from './cart';

export default class Store extends Component {
	constructor() {
		super();
		this.state = {
			cart: {},
			total: 0,
		};
		this.addToCart = this.addToCart.bind(this);
	}

	addToCart(obj) {
		const { cart } = this.state;
		let total = 0;
		// FIRST, CART.
		// Check if empty
		const empty =
			obj.qtd === 0 ||
			Number.isNaN(obj.qtd) ||
			obj.qtd === undefined;

		cart[obj.slug] = obj;
		// Remove se qtd estiver vazia
		if (empty) {
			delete cart[obj.slug];
		}

		// THEN, TOTAL
		if (Object.keys(cart).length > 0) {
			Object.keys(cart).map((c) => {
				total += cart[c].price * cart[c].qtd;
				return null;
			});
		}

		this.setState({ cart, total });
	}

	render() {
		const { produtos } = this.props.data;

		return (
			<div className="store">
				<div className="storefront">
					<h2>Loja</h2>
					<p>A loja funciona no regime <em>pague quanto quiser</em>.</p>
					<p>Os produtos digitais estão disponíveis a partir de <em>zero reais</em>, enquanto os impressos têm um <em>valor mínimo</em> (impressão e postagem). Cada produto também tem um <em>valor sugerido</em>.</p>
					<div className="products">
						{produtos.map(e => <Product prod={e} key={e.id} addToCart={this.addToCart} state={this.state} />)}
					</div>
				</div>
				<Cart state={this.state} />
			</div>
		);
	}
}

Store.propTypes = {
	data: PropTypes.object.isRequired,
};
