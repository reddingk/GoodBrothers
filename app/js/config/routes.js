GoodBrosSite.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: { 'content':{ component: 'home' }  }
      })
      .state('app.services', {
        url: "services",
        views: {
          'content@': { component: 'services' }
        }
      })
      .state('app.gallery', {
        url: "gallery",
        views: {
          'content@': { component: 'gallery' }
        }
      })
      .state('app.testimonies', {
        url: "testimonies",
        views: {
          'content@': { component: 'testimonies' }
        }
      })
      .state('app.aboutus', {
        url: "aboutus",
        views: {
          'content@': { component: 'aboutus' }
        }
      })
      .state('app.contactus', {
        url: "contactus",
        views: {
          'content@': { component: 'contactus' }
        }
      })
      .state('app.construction', {
        url: "underconstruction",
        views: {
          'content@': { component: 'test' }
        }
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }]);
