import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Opening from './components/static/opening';
import Store from './components/store/store';
import Cart from './components/store/cart';
import Review from './components/store/review';
import About from './components/static/about';

const localSplit = window.location.href.split('?');
const queryStr = localSplit.length > 1 ? localSplit[1] : '';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.data = this.props.data;
		this.state = {
			cart: {},
			total: 0,
			view: false,
			about: false,
			query: queryStr,
			before: {},
		};
		this.addToCart = this.addToCart.bind(this);
		this.showReview = this.showReview.bind(this);
		this.showAbout = this.showAbout.bind(this);
		this.sendToPay = this.sendToPay.bind(this);
		this.beforeProd = this.beforeProd.bind(this);
	}

	componentWillMount() {
		if (this.state.query !== '') {
			let { about } = this.state;
			about = true;
			this.setState({ about });
		}
	}

	beforeProd(p) {
		const { state } = this;
		state.before[p.slug] = {
			qtd: p.qtd,
			price: p.price,
			type: p.type,
		};
		this.setState({ state });
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
		const { query } = this.state;
		if (query !== '') {
			about = true;
		} else {
			about = about === false;
		}
		this.setState({ about });
	}

	sendToPay(info) {
		const myServer = 'http://backend-cronofobia-com.umbler.net/api/payment';
		// const myServer = 'http://0.0.0.0:3000/api/payment';

		axios.post(myServer, { data: info })
			.then((response) => {
				const { data } = response;
				if (data.status === 'error') {
					return console.log('error'); // eslint-disable-line
				}
				console.log('success'); // eslint-disable-line
				const anchor = document.createElement('a');
				document.body.appendChild(anchor);
				anchor.setAttribute('href', `https://pagseguro.uol.com.br/v2/checkout/payment.html?code=${data.code}`);
				anchor.setAttribute('target', '_blank');
				anchor.setAttribute('style', 'display: none');
				anchor.click();
				return null;
			})
			.catch((error) => {
				console.log(error); // eslint-disable-line
			});
	}

	render() {
		return (
			<div className="main">
				<div className="left">
					<Opening
						showAbout={this.showAbout}
						about={this.state.about}
						query={this.state.query}
					/>
				</div>
				<div className={`center ${this.state.about ? 'center-about' : ''}`}>
					{this.state.view && !this.state.about ?
						<Review
							state={this.state}
							showReview={this.showReview}
							sendToPay={this.sendToPay}
						/> : ''}
					{!this.state.view && !this.state.about ?
						<Store
							data={this.data}
							state={this.state}
							addToCart={this.addToCart}
							beforeProd={this.beforeProd}
						/> : ''}
					{this.state.about ?
						<About
							data={this.data.about}
							query={this.state.query}
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
