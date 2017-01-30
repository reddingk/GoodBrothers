'use strict';

var routes = angular.module('routes', ['ui.router']);
var directives = angular.module('directives', []);
var components = angular.module('components', ['ui.bootstrap', 'ngAnimate', 'ngSanitize']);
var services = angular.module('services',[]);

var GoodBrosSite = angular.module('GoodBrosSite', ['ngMaterial', 'ngAnimate', 'ui.router', 'directives', 'components',	'services', 'routes']);

GoodBrosSite.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: { 'content':{ component: 'home' }  }
      })
      .state('app.construction', {
        url: "underconstruction",
        views: {
          'content@': { component: 'construction' }
        }
      });

      $urlRouterProvider.otherwise('/');
      //$locationProvider.html5Mode(true);
    }]);

// root component: all other components will be under this component
// objects: view - this will store the state and other high level objects
components.component('all', {
  bindings: {},
	controller: function ($scope) {
    var ctrl = this;
   },
   templateUrl: 'views/all.html'
});

components.component('gbFooter', {
   bindings: {},
	require: {
      parent: '^all'
    },
	controller: function () {
      var ctrl = this;
   },
   templateUrl: 'views/_footer.html'
});

components.component('gbHeader', {
  bindings: {},
	require: {
      parent: '^all'
  },
	controller: function ($scope) {
    var ctrl = this;


   },
   templateUrl: 'views/_header.html'
});

components.component('home', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.title = "Home";
   },
   templateUrl: 'views/home.html'
});
