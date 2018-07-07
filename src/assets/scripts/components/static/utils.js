const utils = {
	numberify: (a, fixed) => {
		if (a === undefined) {
			return null;
		}
		let num = a;
		let split = [];

		// se tiver float, insere
		num = fixed ? parseFloat(num).toFixed(fixed) : num;

		// tira vírgulas e pontos
		num = num.toString()
			.replace(',', '')
			.replace('.', ',');

		split = num.split(',');

		// coloca ponto em milhar
		if (split[0].length > 3) {
			const point = split[0]
				.split('')
				.reverse();
			point.splice(3, 0, '.');
			num = point.reverse().join('');
		}
		return num;
	},
	slugfy: (word) => {
		const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·_/-,:;"';
		const to = 'aaaaaeeeeeiiiiooooouuuunc----';
		let w = word.toLowerCase()
			.replace(' - ', '-')
			.replace('. ', '-')
			.replace(/^\s+|\s+$/g, '-')
			.replace(/\s+/g, '-')
			.replace('.', '-')
			.replace(/'/g, '-')
			.replace(/\(/g, '-')
			.replace(/\)/g, '-')
			.replace(/\[/g, '-')
			.replace(/]/g, '-')
			.replace(/\*/g, '')
			.replace(/–/g, '-')
			.replace(/\$/g, 's')
			.replace(/(\d)%/g, '$1-por-cento')
			.replace(/%/g, 'porcentagem');
		for (let i = 0, l = from.length; i < l; i += 1) {
			w = w.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
		}
		return w;
	},
};

export default utils;
