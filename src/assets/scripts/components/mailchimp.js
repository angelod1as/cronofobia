import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Mailchimp extends Component {
	render() {
		return (
		  {/* FORM */}
			{/* Begin MailChimp Signup Form */}
			<div id="mc_embed_signup">
				<form action="https://cronofobia.us18.list-manage.com/subscribe/post?u=7f7f7bf590f89ed09718581fc&id=a751d85ac9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
					<div id="mc_embed_signup_scroll">
						<h2>Inscreva-se já</h2>
						<div className="indicates-required">
							<span className="asterisk">*</span> Obrigatório</div>
						<div className="mc-field-group">
							<label htmlFor="mce-EMAIL">Endereço de email
								<span className="asterisk">*</span>
							</label>
							<input type="email" defaultValue name="EMAIL" className="required email" id="mce-EMAIL" />
						</div>
						<div className="mc-field-group">
							<label htmlFor="mce-FNAME">Primeiro nome </label>
							<input type="text" defaultValue name="FNAME" className id="mce-FNAME" />
						</div>
						<div className="mc-field-group">
							<label htmlFor="mce-LNAME">Sobrenome </label>
							<input type="text" defaultValue name="LNAME" className id="mce-LNAME" />
						</div>
						<div className="mc-field-group size1of2">
							<label htmlFor="mce-BIRTHDAY-month">Aniversário </label>
							<div className="datefield">
								<span className="subfield monthfield">
									<input className="birthday " type="text" pattern="[0-9]*" defaultValue placeholder="MM" size={2} maxLength={2} name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" />
								</span> /
								<span className="subfield dayfield">
									<input className="birthday " type="text" pattern="[0-9]*" defaultValue placeholder="DD" size={2} maxLength={2} name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" />
								</span>
								<span className="small-meta nowrap">( mm / dd )</span>
							</div>
						</div>
						<div id="mce-responses" className="clear">
							<div className="response" id="mce-error-response" style={{display: 'none'}} />
							<div className="response" id="mce-success-response" style={{display: 'none'}} />
						</div>
						{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
						<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
							<input type="text" name="b_7f7f7bf590f89ed09718581fc_a751d85ac9" tabIndex={-1} defaultValue />
						</div>
						<div className="clear">
							<input type="submit" defaultValue="Inscreva-se" name="subscribe" id="mc-embedded-subscribe" className="button" />
						</div>
					</div>
				</form>
			</div>

		);
	}
}
