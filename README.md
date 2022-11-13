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
<script src="https://cdn.jsdelivr.net/npm/greenajax@1.0.3/dist/greenajax.min.js"></script>
```

## Usage

### GET request
```js
greenajax({
	method: 'get',
	url: 'http://localhost:3000/api'
}, json => {
	console.log(json);
});
```

### POST request
```js
greenajax({
	method: 'post',
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
	method: 'put',
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
	method: 'patch',
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
	method: 'delete',
	url: 'http://localhost:3000/api'
}, json => {
	console.log(json);
});
```

### HEAD request
```js
greenajax({
	method: 'head',
	url: 'http://localhost:3000/api'
}, json => {
	console.log(json);
});
```

You can also edit the header option:

```js
greenajax({
	method: 'get',
	url: 'http://localhost:3000/api',
	headers: {
		'Content-Type' : 'application/json'
	}
}, json => {
	console.log(json);
});
```

## History

[Releases](https://github.com/sagharizadeh/greenajax/releases)

## License

[MIT License](https://github.com/sagharizadeh/greenajax/blob/main/LICENSE) © Muhammad Hussain Saghari Zadeh