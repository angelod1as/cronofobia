import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
			const data = formatter(form);
			const cart = JSON.stringify(this.props.cart);
			data.pedido = cart;
			this.props.sendToPay(data);
		});
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
				<button type="submit"><span role="img" aria-label="money bag emoji">💰</span> Clique para pagar <span role="img" aria-label="money bag emoji">💰</span></button>
			</form>
		);
	}
}

Form.propTypes = {
	cart: PropTypes.object.isRequired,
	sendToPay: PropTypes.func.isRequired,
};
