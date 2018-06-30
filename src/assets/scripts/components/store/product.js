import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from '../static/utils';

export default class Product extends Component {
	constructor() {
		super();
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		const p = this.props.prod;
		this.setState({
			title: p.title,
			slug: p.slug,
			price: 0,
			qtd: 0,
		});
	}

	handleChange(e) {
		const { state } = this;
		state[e.target.name] = parseFloat(e.target.value);
		this.setState(state);
		this.props.addToCart(state);
	}

	render() {
		const p = this.props.prod;

		return (
			<div className={`product ${p.id}`} key={p.id}>
				<img src={p.img} alt={`capa do zine "${p.title}"`} />
				<div className="side">
					<form className="form">
						<h3 data-title={utils.slugfy(p.title)}>{p.title}</h3>
						<p className="description">{p.desc}</p>
						<p className="suggested">valor sugerido: R$ {p.sug}</p>
						{/* FORM */}
						<label htmlFor="qtd">
							Quero <input
								id="qtd"
								name="qtd"
								placeholder="0"
								className="form_qtd"
								type="number"
								min="0"
								onChange={this.handleChange}
							/> zine(s)
						</label>
						<label htmlFor="price">
							E vou pagar
							R$ <input
								id="price"
								name="price"
								placeholder={p.sug}
								className="form_price"
								type="number"
								min="0"
								onChange={this.handleChange}
							/> por cada
						</label>
						{/* <button className="button">
							+ carrinho
						</button> */}
					</form>
				</div>
			</div>
		);
	}
}

Product.propTypes = {
	prod: PropTypes.object.isRequired,
	addToCart: PropTypes.func,
};
