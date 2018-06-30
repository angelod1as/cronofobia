import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Prod = (prod) => {
	const p = prod.prod;
	return (
		<div className="prod">
			<h3>{p.title}</h3>
			<p>me vê <span>{p.qtd}</span> por <span>R$ {p.price}</span> (cada)</p>
		</div>
	);
};

export default class Cart extends Component {
	render() {
		const { cart, total } = this.props.state;

		return (
			<div className="cart">
				<h2>Carrinho</h2>
				<p>O carrinho é atualizado automaticamente, basta preencher os campos ao lado</p>
				<div className="cart_table">
					{Object.keys(cart).length > 0 ? Object.keys(cart).map(c => <Prod prod={cart[c]} key={cart[c].slug} />) : <div>carrinho vazio :(</div>}
				</div>
				<div className="cart_total">
					<p>TOTAL: R$ {total}</p>
				</div>
				<button>Passar a régua</button>
			</div>
		);
	}
}

Cart.propTypes = {
	state: PropTypes.object.isRequired,
};
