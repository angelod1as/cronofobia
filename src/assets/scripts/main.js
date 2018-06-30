import React from 'react';
import jsonp from 'jsonp';
import { render } from 'react-dom';
import '../style/main.styl';
import App from './app';

// Started > june 29th 10am
// Finished > ??
// author: Angelo Dias

jsonp(
	'./json/data.json',
	{
		name: 'data',
		timeout: 1000,
	},
	(err, data) => {
		if (err) {
			throw err;
		} else {
			render(<App data={data} />, document.getElementById('app'));
		}
	},
);
