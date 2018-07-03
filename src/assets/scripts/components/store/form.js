import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
	componentDidMount() {
		const form = document.forms['submit-to-google-sheet'];
		const origin = 'https://script.google.com/macros/s/AKfycbziqRYW3AMjypbywbj75cWWH-ODeRg0nj_vyNZYU4Ap3PSYEis/exec';

		function toJSONString(f) {
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
			return JSON.stringify(obj);
		}

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const data = toJSONString(form);
			axios.post(origin, data)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}
	render() {
		return (
			<form className="pedido" name="submit-to-google-sheet">
				<input name="nome" type="text" placeholder="nome" required />
				<input name="email" type="email" placeholder="Email" required />
				{/* <input name="rua" type="text" placeholder="Rua" required />
				<input name="numero" type="text" placeholder="Número" required />
				<input name="complemento" type="text" placeholder="Complemento" required />
				<input name="bairro" type="text" placeholder="Bairro" required />
				<input name="cep" type="text" placeholder="CEP" required />
				<input name="cidade" type="text" placeholder="Cidade" required />
				<input name="estado" type="text" placeholder="Estado" required /> */}
				<button type="submit">Send</button>
			</form>
		);
	}
}
