import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './product';

export default class Store extends Component {
	render() {
		const { produtos } = this.props.data;


		return (
			<div className="store">
				<h2>Loja</h2>
				<p>A loja funciona no regime <em>pague quanto quiser</em>.</p>
				<p>Os produtos digitais estão disponíveis a partir de <em>zero reais</em>, enquanto os impressos têm um <em>valor mínimo</em> (impressão e postagem). Cada produto também tem um <em>valor sugerido</em>.</p>
				<div className="products">
					{produtos.map(e =>
						(<Product
							prod={e}
							key={e.id}
							addToCart={this.props.addToCart}
							state={this.props.state}
							beforeProd={this.props.beforeProd}
						/>))}
				</div>
			</div>
		);
	}
}

Store.propTypes = {
	data: PropTypes.object.isRequired,
	addToCart: PropTypes.func.isRequired,
	beforeProd: PropTypes.func,
	state: PropTypes.object.isRequired,
};
