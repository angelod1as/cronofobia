import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './form';

const uuidv1 = require('uuid/v1');

const RevProd = (prod) => {
	const p = prod.prod;
	if (p.type === 'digital') {
		return [
			<div key={uuidv1()} className="rev_item rev-title">{p.title}</div>,
			<div key={uuidv1()} className="rev_item rev-price">R$ {p.price}</div>,
			<a key={uuidv1()} className="rev_item rev-url" href={p.url} download>Baixar</a>,
		];
	}
	// if impresso
	return [
		<div key={uuidv1()} className="rev_item rev-title">{p.title}</div>,
		<div key={uuidv1()} className="rev_item rev-price">R$ {p.price}</div>,
		<div key={uuidv1()} className="rev_item rev-qtd">{p.qtd}</div>,
	];
};

const RevCart = (d) => {
	const { cart, type, data } = d;

	const tableBuild = (t) => {
		if (t === 'digitais') {
			return [
				<div key={uuidv1()} className="grid_header">Nome</div>,
				<div key={uuidv1()} className="grid_header">Preço</div>,
				<div key={uuidv1()} className="grid_header">Download</div>,
			];
		}
		// if impresso
		return [
			<div key={uuidv1()} className="grid_header">Nome</div>,
			<div key={uuidv1()} className="grid_header">Preço</div>,
			<div key={uuidv1()} className="grid_header">Quantidade</div>,
		];
	};

	return (
		<div className={type}>
			<h4>{type}</h4>
			<div className={`grid ${type}`}>
				{tableBuild(type)}
				{data.map(c => <RevProd prod={cart[c]} key={uuidv1()} />)}
			</div>
		</div>
	);
};

export default class Review extends Component {
	render() {
		const { cart } = this.props.state;
		const filtered = [[], []];
		let pay = false;

		if (Object.keys(cart).length > 0) {
			// checa se há pagamento > boolean
			pay = Object
				.keys(cart)
				.filter(key => cart[key].price > 0)
				.length > 0;

			// filtra digitais
			const fDig = Object
				.keys(cart)
				.filter(key => cart[key].type === 'digital');

			// filtra impressos
			const fImp = Object
				.keys(cart)
				.filter(key => cart[key].type === 'impressa');

			filtered[0] = fDig;
			filtered[1] = fImp;
		}

		const show = d => filtered[d].length > 0;

		return (
			<div className="review">
				<div className="rev_inner">
					<h2>Fecha a conta, campeão</h2>
					{show(0) ? <p><small>(Você pode observar que é possível baixar os arquivos digitais antes mesmo de pagar. É isso mesmo, estou contando com sua consciência <span role="img" aria-label="Emoji piscando">😉</span>)</small></p> : ''}
					{show(0) ? <RevCart cart={cart} type="digitais" data={filtered[0]} key={uuidv1()} /> : ''}
					{show(1) ? <RevCart cart={cart} type="impressos" data={filtered[1]} key={uuidv1()} /> : ''}
					{pay ?
						<div className="form">
							<Form cart={cart} sendToPay={this.props.sendToPay} />
						</div> : ''}
				</div>
			</div>
		);
	}
}

Review.propTypes = {
	state: PropTypes.object.isRequired,
	sendToPay: PropTypes.func.isRequired,
};
