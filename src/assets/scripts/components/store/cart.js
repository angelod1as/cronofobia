import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Prod = (prod) => {
	const p = prod.prod;

	const qtd = <p>me vê <span>{p.qtd}</span> zine{p.qtd === 1 ? '' : 's'}</p>;

	let type = '';

	if (p.qtd === 1) {
		type = <p>{p.type}</p>;
	} else if (p.type === 'impressa') {
		type = <p>impressas</p>;
	} else {
		type = <p>digitais</p>;
	}

	let price = '';
	if (p.price > 0) {
		price = <p>por <span>R$ {p.price}</span> (cada)</p>;
	} else {
		price = <p>de graça</p>;
	}
	return (
		<div className="prod">
			<h3>{p.title}</h3>
			{qtd} {type} {price}
		</div>
	);
};

export default class Cart extends Component {
	render() {
		const { cart, total } = this.props.state;

		return (
			<div className="cart">
				<h2>Carrinho</h2>
				<p>O carrinho é atualizado automaticamente, basta preencher os campos nos produtos</p>
				<div className="cart_table">
					{Object.keys(cart).length > 0 ? Object.keys(cart).map(c => <Prod prod={cart[c]} key={cart[c].slug} />) : <div>carrinho vazio :(</div>}
				</div>
				<p className="cart_total">TOTAL: R$ {total}</p>
				<button
					disabled={Object.keys(cart).length === 0}
					className={Object.keys(cart).length === 0 ? 'disabled' : 'enabled'}
					onClick={this.props.showReview}
				>{!this.props.state.view ? 'Passar a régua' : 'Voltar à loja'}
				</button>
			</div>
		);
	}
}

Cart.propTypes = {
	state: PropTypes.object.isRequired,
	showReview: PropTypes.func.isRequired,
};
