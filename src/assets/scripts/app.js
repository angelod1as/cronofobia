import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Opening from './components/static/opening';
import Store from './components/store/store';
import Cart from './components/store/cart';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.data = this.props.data;
		this.state = {
			cart: {},
			total: 0,
			view: 'store',
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
		return (
			<div className="main">
				<div className="left">
					<Opening />
				</div>
				<Store data={this.data} state={this.state} addToCart={this.addToCart} />
				<div className="right">
					<Cart state={this.state} />
				</div>
			</div>
		);
	}
}

App.propTypes = {
	data: PropTypes.object.isRequired,
};
