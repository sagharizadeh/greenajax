function greenajax(options, callback) {
	fetch(options.url, {
		method: options.method.toUpperCase(),
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