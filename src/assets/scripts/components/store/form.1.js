import React, { Component } from 'react';
// import axios from 'axios';

export default class Form extends Component {
	componentDidMount() {
		const formFrom = document.forms['submit-to-google-sheet'];
		const origin = 'https://script.google.com/macros/s/AKfycbziqRYW3AMjypbywbj75cWWH-ODeRg0nj_vyNZYU4Ap3PSYEis/exec';

		const ajaxPost = (form, url, callback) => {
			const xhr = new XMLHttpRequest();

			// This is a bit tricky, [].fn.call(form.elements, ...) allows us to call .fn
			// on the form's elements, even though it's not an array. Effectively
			// Filtering all of the fields on the form
			const params = {};
			[].filter.call(form.elements, el => el).map((el) => {
				// Map each field into a name=value string, make sure to properly escape!
				params[el.name] = el.value;

				return true;
			}); // Then join all the strings by &
			for (let i = 0; i < Object.keys(params).length; i += 1) {
				const el = Object.keys(params)[i];
			}

			xhr.open('POST', url);
			xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
			xhr.onload = callback.bind(xhr);

			xhr.send(JSON.stringify(params));
		};

		formFrom.addEventListener('submit', (e) => {
			e.preventDefault();
			// const data = toJSONString(formFrom);
			ajaxPost(formFrom, origin, (res) => {
				console.log(res);
			});
		});
	}
	render() {
		return (
			<form name="submit-to-google-sheet">
				<input name="nome" type="nome" placeholder="nome" required />
				<input name="email" type="email" placeholder="Email" required />
				<button type="submit">Send</button>
			</form>
		);
	}
}
