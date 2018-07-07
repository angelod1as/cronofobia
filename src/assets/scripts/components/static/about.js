import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Mailchimp from './mailchimp';

export default class About extends Component {
	render() {
		const about = this.props.data[0];
		// OBRIGADO POR COMPRAR
		if (this.props.query === 'compra') {
			return (
				<div className="about">
					<h2>Obrigado!</h2>
					<p>São pessoas como você que fazem esse mundinho da publicação independente crescer.</p>
					<p>MUITO OBRIGADO.</p>
					<p><em>MESMO.</em></p>
					<p>Toma aí um GIF de agradecimento.</p>
					<img src="https://media.giphy.com/media/o3JilXQkQegko/giphy.gif" alt="" />
					<p>(o que acha de aproveitar e assinar nossa newsletter abaixo?</p>
					<Mailchimp />
				</div>
			);
		}
		// ABOUT
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
				<h3>Colophon</h3>
				<p>Esse site foi desenhado e desenvolvido completamente por Angelo Dias no Visual Studio Code.</p>
				<p>Ele foi escrito em React. O HTML que não é JSX foi feito em Pug. O CSS é Stylus do começo ao fim. Um belo boilerplate com webpack fez sua magia e cuspiu o que você vê na sua tela agora.</p>
				<p>Agradeço Pilker, Rubens Fernandes, Thiago Almeida e Lucas Golino pelo boilerplate, feedbacks e (principalmente) pela enorme paciência.</p>
			</div>
		);
	}
}

About.propTypes = {
	data: PropTypes.array.isRequired,
	query: PropTypes.string.isRequired,
};
