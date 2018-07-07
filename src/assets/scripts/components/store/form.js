import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
	constructor() {
		super();
		this.state = { hasClicked: false };
		this.changeClick = this.changeClick.bind(this);
	}

	componentDidMount() {
		const form = document.forms['submit-to-google-sheet'];

		function formatter(f) {
			const obj = {};
			const elements = f.querySelectorAll('input, select, textarea');
			for (let i = 0; i < elements.length; i += 1) {
				const element = elements[i];
				const { name } = element;
				const { value } = element;
				if (name) {
					obj[name] = value;
				}
			}
			return obj;
		}

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			// muda texto do clique
			// formata os dados e envia
			const data = formatter(form);
			const cart = JSON.stringify(this.props.cart);
			data.pedido = cart;
			this.props.sendToPay(data);
		});
	}

	changeClick() {
		let { hasClicked } = this.state;
		hasClicked = hasClicked === false;
		this.setState({ hasClicked });
	}

	render() {
		return (
			<form className="pedido" name="submit-to-google-sheet">
				{/* <input name="nome" type="text" placeholder="nome" />
				<input name="email" type="email" placeholder="Email" />
				<input name="rua" type="text" placeholder="Rua" />
				<input name="numero" type="text" placeholder="Número" />
				<input name="complemento" type="text" placeholder="Complemento" />
				<input name="bairro" type="text" placeholder="Bairro" />
				<input name="cep" type="text" placeholder="CEP" />
				<input name="cidade" type="text" placeholder="Cidade" />
				<input name="estado" type="text" placeholder="Estado" /> */}
				{this.state.hasClicked ?
					<button type="submit" onClick={this.changeClick}><span role="img" aria-label="finger poiting up emoji">☝️</span> Só aguardar (e liberar o popup lá em cima)! <span role="img" aria-label="finger poiting up emoji">☝️</span></button> :
					<button type="submit" onClick={this.changeClick}><span role="img" aria-label="money bag emoji">💰</span> Clique para pagar <span role="img" aria-label="money bag emoji">💰</span></button>
				}
			</form>
		);
	}
}

Form.propTypes = {
	cart: PropTypes.object.isRequired,
	sendToPay: PropTypes.func.isRequired,
};
