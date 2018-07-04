import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Opening from './components/static/opening';
import Store from './components/store/store';
import Cart from './components/store/cart';
import Review from './components/store/review';
import About from './components/static/about';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.data = this.props.data;
		this.state = {
			cart: {},
			total: 0,
			view: false,
			about: false,
		};
		this.addToCart = this.addToCart.bind(this);
		this.showReview = this.showReview.bind(this);
		this.showAbout = this.showAbout.bind(this);
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

	showReview() {
		let { view } = this.state;
		view = view === false;
		this.setState({ view });
	}

	showAbout() {
		let { about } = this.state;
		about = about === false;
		this.setState({ about });
	}

	render() {
		return (
			<div className="main">
				<div className="left">
					<Opening
						showAbout={this.showAbout}
						about={this.state.about}
					/>
				</div>
				<div className={`center ${this.state.about ? 'center-about' : ''}`}>
					{this.state.view && !this.state.about ?
						<Review
							state={this.state}
							showReview={this.showReview}
						/> : ''}
					{!this.state.view && !this.state.about ?
						<Store
							data={this.data}
							state={this.state}
							addToCart={this.addToCart}
						/> : ''}
					{this.state.about ?
						<About
							data={this.data.about}
						/> : ''}
				</div>
				<div className="right">
					{!this.state.about ?
						<Cart
							state={this.state}
							showReview={this.showReview}
						/> : '' }
				</div>
			</div>
		);
	}
}

App.propTypes = {
	data: PropTypes.object.isRequired,
};
