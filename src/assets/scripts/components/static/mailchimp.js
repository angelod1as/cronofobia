import React, { Component } from 'react';

export default class Mailchimp extends Component {
	render() {
		return (
			<div id="mailchimp">
				{ /* Begin MailChimp Signup Form */ }
				<form action="https://cronofobia.us18.list-manage.com/subscribe/post?u=7f7f7bf590f89ed09718581fc&id=a751d85ac9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
					<div id="mc_embed_signup_scroll">
						<h2>Inscreva-se para receber novidades</h2>
						<input type="email" placeholder="Email" name="EMAIL" className="required email" id="mce-EMAIL" />
						<input type="text" placeholder="Nome" name="FNAME" id="mce-FNAME" />
						<input type="text" placeholder="Sobrenome" name="LNAME" id="mce-LNAME" />
						{/* <div className="mc-field-group size1of2">
							<div className="datefield">
								<span className="subfield dayfield">
									<input className="birthday " type="text" pattern="[0-9]*" placeholder="dia" size={2} maxLength={2} name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" />
								</span> &nbsp;/&nbsp;
								<span className="subfield monthfield">
									<input className="birthday " type="text" pattern="[0-9]*" placeholder="mês" size={2} maxLength={2} name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" />
								</span>
							</div>
						</div> */}
						<p className="oldnews">
							<a href="https://us18.campaign-archive.com/home/?u=7f7f7bf590f89ed09718581fc&id=a751d85ac9" title="View previous campaigns">Ver newsletters antigas</a>
						</p>
						<div id="mce-responses" className="clear">
							<div className="response" id="mce-error-response" style={{ display: 'none' }} />
							<div className="response" id="mce-success-response" style={{ display: 'none' }} />
						</div>
						{ /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */ }
						<div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
							<input type="text" name="b_7f7f7bf590f89ed09718581fc_a751d85ac9" tabIndex={-1} defaultValue />
						</div>
						<input type="submit" defaultValue="Inscrever-se" name="subscribe" id="mc-embedded-subscribe" className="button" />
					</div>
				</form>
				{ /* End mc_embed_signup */ }
			</div>
		);
	}
}
