import React, { Component } from 'react';
import PropTypes from 'prop-types';

const uuidv1 = require('uuid/v1');

export default class About extends Component {
	render() {
		const about = this.props.data[0];
		return (
			<div className="about">
				<h2>{about.title}</h2>
				<p>Queria saber descrever esse projeto como o pessoal das artes faz, sabe, cheios de pompa e elegância?</p>
				<p><i>{'"'}Cronofobia é a expressão gutural de sentimentos aprisionados transformados com leveza em impressos monocromáticos pelo multiartista Angelo Dias.{'"'}</i></p>
				<p>Como não tenho essa capacidade, vaia assim mesmo: o projeto <em>Cronofobia</em> surgiu para expressar pensamentos e vivências. É um trabalho autoral, feito em casa, impresso em xerox e grampeado manualmente.</p>
				<p>A ideia é ter algumas zines aleatórias que contam histórias e , se pá, fazem alguns questionamentos. Haverá uma série numerada para tratar sobre nome do projeto (cronofobia, o medo do tempo passar).</p>
				<p>No fim das contas, é uma desculpa para produzir fora do que estou acostumado e fugir um pouco da ficção fantástica/científica. E é você quem financia essa merda.</p>
				<p>Pfv financie, é daora.</p>
				<h3>Mas pera, quem?</h3>
				<p>Meu nome é <em>Angelo Dias</em>. Sou criador e editor-chefe do jornal satírico de ficção científica <a href="http://www.temposfantasticos.com" target="_blank" rel="noopener noreferrer">Tempos Fantásticos</a>, roteirista do quadrinho Combo Breaker (ainda sem site) e participador de projetos alheios.</p>
				<p>De dia, sou desenvolvedor front-end na Folha de S.Paulo, fazendo altos sites mutcholocos (tipo esse). <a href="http://www.angelodias.com.br" target="_blank" rel="noopener noreferrer">Conheça meu trabalho aqui</a>.</p>
				<p>Tem perguntas sobre o projeto e não quer ser identificado? <a href="http://www.curiouscat.me/cronofobico" target="_blank" rel="noopener noreferrer">Mande aqui anonimamente</a>.</p>
			</div>
		);
	}
}

About.propTypes = {
	data: PropTypes.array.isRequired,
};
