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
			type: 'digital',
			url: p.url,
			id: p.id,
			spec: p.spec,
		});
	}

	handleChange(e) {
		const { state } = this;
		if (e.target.name === 'type') {
			state[e.target.name] = e.target.value;
		} else {
			state[e.target.name] = parseFloat(e.target.value);
		}
		this.setState(state);
		this.props.addToCart(state);
	}

	render() {
		const p = this.props.prod;

		return (
			<div className={`product ${p.id}`} key={p.id}>
				<img src={p.img} alt={`capa do zine "${p.title}"`} />
				<div className="prod_info">
					<form className="form">
						<h3 data-title={utils.slugfy(p.title)}>{p.title}</h3>
						<p className="description">{p.desc}</p>
						<p className="spec">{p.spec}</p>
						<p className="suggested">valor sugerido: R$ {p.sug}</p>
						<p className="minimum">mínimo para impresso: R$ {p.minprice}</p>
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
							/> zine{this.state.qtd === 1 ? '' : 's'}.
						</label>
						<label htmlFor="price">
							Vou pagar
							R$ <input
								id="price"
								name="price"
								placeholder={p.sug}
								className="form_price"
								type="number"
								min="0"
								onChange={this.handleChange}
							/> em cada.
						</label>
						<label htmlFor="type" className="radio">
							<span className="radio_margin">Quero a versão</span>
							<br /><input
								type="radio"
								name="type"
								value="digital"
								defaultChecked
								onChange={this.handleChange}
							/><span className="radio_margin">Digital</span>
							<br /><input
								type="radio"
								name="type"
								value="impressa"
								disabled={this.state.price < p.minprice}
								onChange={this.handleChange}
							/><span className={`${this.state.price < p.minprice ? 'disabled' : 'notDisabled'} radio-margin`}>Impressa</span>
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
