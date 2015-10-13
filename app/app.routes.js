// app/app.routes.js
require('./app.module');

module.exports = angular
	.module('app')
	.config(configure);

configure.$inject =
	['$stateProvider', '$urlRouterProvider'];

function configure($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "home/homeView.html",
			controller: "HomeController"
		});
}