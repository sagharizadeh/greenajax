# GreenAjax

![logo](logo.png)

## About

This is a low volume library that makes your work easy in ajax.
Note: This is just for front-end!

## Installation

```
npm install greenajax
```

Or from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/greenajax@1.0.1/dist/greenajax.min.js"></script>
```

## Usage

### GET request
```js
greenajax({
	method: 'GET',
	url: 'http://localhost:3000/api'
}, json => {
	console.log(json);
});
```

### POST request
```js
greenajax({
	method: 'POST',
	url: 'http://localhost:3000/api',
	body: {
		id: 101,
		title: 'foo',
		body: 'bar',
		user: 1
	}
}, json => {
	console.log(json);
});
```

### PUT request
```js
greenajax({
	method: 'PUT',
	url: 'http://localhost:3000/api',
	body: {
		id: 1,
		title: 'foo',
		body: 'bar',
		user: 1
	}
}, json => {
	console.log(json);
});
```

### PATCH request
```js
greenajax({
	method: 'PATCH',
	url: 'http://localhost:3000/api',
	body: {
		title: 'foo'
	}
}, json => {
	console.log(json);
});
```

### DELETE request
```js
greenajax({
	method: 'DELETE',
	url: 'http://localhost:3000/api'
}, json => {
	console.log(json);
});
```

### HEAD request
```js
greenajax({
	method: 'HEAD',
	url: 'http://localhost:3000/api'
}, json => {
	console.log(json);
});
```

## History

[Releases](https://github.com/sagharizadeh/greenajax/releases)

## License

[MIT License](https://github.com/sagharizadeh/greenajax/blob/main/LICENSE) © Muhammad Hussain Saghari Zadeh