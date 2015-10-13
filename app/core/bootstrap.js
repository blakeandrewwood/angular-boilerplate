// app/core/bootstrap.js

'use strict';
require('./vendor')();

var appModule = require('../app.module');

angular.element(document).ready(function() {
	angular.bootstrap(document, [appModule.name], {
		//
	});
});