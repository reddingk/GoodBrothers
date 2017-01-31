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

components.component('cover', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.title = "Good Brothers Mobile Detailing";
      ctrl.img = "imgs/dirty2.png"
      ctrl.subtitle = "it's easier when we do it";
      ctrl.contacts = {"phone":"302-566-5960", "email":"goodbrothersmobiledetailing@gmail.com"};
   },
   templateUrl: 'views/cover.html'
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
	controller: function ($scope, $location) {
    var ctrl = this;
    ctrl.pageAnchor = function(location){      
      $location.hash(location);
    }

   },
   templateUrl: 'views/_header.html'
});

components.component('home', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.title = "Home";

      $.scrollify({
        section : ".page-section",
        sectionName : "section-name"/*,
        before:function(i,panels) {
          var ref = panels[i].attr("data-section-name");
          $(".page-section .active").removeClass("active");
          $(".page-section").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function() {
          var pagination = "<div class=\"side-container\">";
          var activeClass = "";
          $(".page-section").each(function(i) {
            activeClass = "";
            if(i===0) {
              activeClass = "active";
            }
            //pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            pagination += "<a class=\"side-item\"  class=\""+ activeClass+ "\" href=\"#" +$(this).attr("data-section-name") + "\"><div class=\"text\">"+$(this).attr("data-section-name")+"</div> <div class=\"icon\"></div></a>"
          });

          pagination += "</div>";

          $(".sidenav").append(pagination);
        }*/
      });

      //$(".page-section a").on("click",$.scrollify.move);
   },
   templateUrl: 'views/home.html'
});

components.component('gbSidenav', {
  bindings: {},
	require: {
      parent: '^all'
  },
	controller: function ($scope, $window) {
    var ctrl = this;
    ctrl.pages = [{"name":"home", "location":"!/"},{"name":"services", "location":"services"}, {"name":"galleries", "location":"galleries"},{"name":"testimonies", "location":"testimonies"},{"name":"about us", "location":"aboutus"},{"name":"contact us", "location":"contactus"}];

    ctrl.isActive = function(id){
      return ($window.location.hash == '#'+id);
    }
   },
   templateUrl: 'views/_sidenav.html'
});

components.component('test', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.title = "Test";
   },
   templateUrl: 'views/tst.html'
});

directives.directive('sideCtrl', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {

      angular.element($window).bind("scroll", function() {
        var location = attrs.loc;
        if($window.location.hash == '#'+location){
          if(!element.hasClass("active")){
            element.addClass("active");
          }
        }
        else {
          if(element.hasClass("active")){
            element.removeClass("active");
          }
        }
      });
    }
  }
}]);
