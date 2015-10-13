// app/core/vendor.js

module.exports = function() {
	/* Styles Packages */
	require('normalize.css/normalize.css');

	/* JS Packages */
	require('angular');
	require('angular-ui-router');

	/* Styles */
	require('../assets/global.css');

	/* JS */
	require('../app.routes');
	require('../home/home');
	require('../home/homeController');
};