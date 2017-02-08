'use strict';

var routes = angular.module('routes', ['ui.router']);
var directives = angular.module('directives', []);
var components = angular.module('components', ['ui.bootstrap', 'ngAnimate', 'ngSanitize', 'duScroll']);
var services = angular.module('services',[]);

var GoodBrosSite = angular.module('GoodBrosSite', ['ngMaterial', 'ngAnimate', 'anim-in-out','duScroll', 'ui.router', 'directives', 'components',	'services', 'routes']);
