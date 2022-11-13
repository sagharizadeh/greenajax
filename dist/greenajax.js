function greenajax(options, callback) {
	fetch(options.url, {
		method: options.method.toUpperCase(),
		body: JSON.stringify(options.body),
		headers: {
			'Content-Type' : 'application/json'
		}
	})
		.then(res => res.json())
		.then(callback)
		.catch(err => {
			throw err;
		});
};
