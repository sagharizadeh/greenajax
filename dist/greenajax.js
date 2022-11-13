function greenajax(options, callback) {
	options.method = options.method.toUpperCase();
	if (options.method === 'GET' || options.method === 'DELETE' || options.method === 'HEAD') {
		if (!options.method || !options.url) throw new Error('the values of the url and method options are required');
	} else {
		if (!options.method || !options.url || !options.body) throw new Error('the values of the url, method and body options are required');
	}
	fetch(options.url, {
		method: options.method,
		body: JSON.stringify(options.body),
		mode: options.mode || 'cors',
		credentials: options.credentials || 'same-origin',
		catch: options.catch || 'default',
		redirect: options.redirect || 'follow',
		referrer: options.referrer || 'about:client',
		referrerPolicy: options.referrerPolicy || 'no-referrer',
		headers: options.headers || { 'Content-Type' : 'application/json' }
	})
		.then(res => res.json())
		.then(callback)
		.catch(err => {
			throw err;
		});
};