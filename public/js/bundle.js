'use strict';

var routes = angular.module('routes', ['ui.router']);
var directives = angular.module('directives', []);
var components = angular.module('components', ['ui.bootstrap', 'ngAnimate', 'ngSanitize', 'duScroll']);
var services = angular.module('services',[]);

var GoodBrosSite = angular.module('GoodBrosSite', ['ngMaterial', 'ngAnimate', 'anim-in-out','duScroll', 'ui.router', 'directives', 'components',	'services', 'routes']);

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

components.component('aboutus', {
  bindings: {},
	controller: function ($scope, $timeout,$document) {
      var ctrl = this;
      // variables
      ctrl.content = [
        {"icon":"fa-handshake-o", "title":"Our Promise", "img":"imgs/promise2.jpg","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"icon":"fa-map-marker", "title":"Where We Are Located", "img":"imgs/where1.jpg","content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},
        {"icon":"fa-id-card-o", "title":"JD + H", "img":"imgs/BC.jpg","content":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."}
      ];

      ctrl.selected = ctrl.content[0];
      $scope.selectedItem = ctrl.selected;
      $scope.visible = true;

      ctrl.changeSelected = function(item){
        ctrl.selected = item;
        $scope.selectedItem = item;
      }
      ctrl.isActive = function(item){
        return (ctrl.selected == item);
      }
      ctrl.buildArray = function(num) {
        return new Array(num);
      }
      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }
   },
   templateUrl: 'views/aboutus.html'
});

// root component: all other components will be under this component
// objects: view - this will store the state and other high level objects
components.component('all', {
  bindings: {},
	controller: function ($scope, $rootScope) {
    var ctrl = this;

    $rootScope.$on('animStart', function() {
      //console.log('animStart');
    });

    $rootScope.$on('animEnd', function() {
      //console.log('animEnd');
    });

   },
   templateUrl: 'views/all.html'
});

components.component('contactus', {
  bindings: {},
	controller: function ($document) {
      var ctrl = this;
      // variables
      ctrl.buildArray = function(num) {
        return new Array(num);
      }
      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }
   },
   templateUrl: 'views/contactus.html'
});

components.component('cover', {
  bindings: {},
	controller: function ($document) {
      var ctrl = this;
      // variables
      ctrl.title = "Good Brothers Mobile Detailing";
      ctrl.img = "imgs/dirty2.png"
      ctrl.subtitle = "it's easier when we do it";
      ctrl.contacts = {"phone":"302-566-5960", "email":"goodbrothersmobiledetailing@gmail.com"};

      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }
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

components.component('gallery', {
  bindings: {},
	controller: function ($scope, $timeout, $mdDialog, $document) {
      var ctrl = this;
      // variables
      ctrl.images = [ "imgs/gallery/img1.jpg", "imgs/gallery/img2.jpg", "imgs/gallery/img3.jpg", "imgs/gallery/demo/d1.jpg", "imgs/gallery/demo/d2.jpg", "imgs/gallery/demo/d3.jpg", "imgs/gallery/demo/d4.png" ];
      var selectedImg = "";
      ctrl.truckFile = "views/svgs/_truck.html";
      // Functions
      ctrl.clientCtrl = function(direction) {
        var objectWidth = ($('.gallery-item')[0].offsetWidth + 20);

        if(direction == "left"){
          // Move Left to Right
          $('.gallery-list-container').animate({ scrollLeft: "-="+objectWidth+"px"}, "slow");
        }
        else if(direction == "right"){
          // Move Right to Left
          $('.gallery-list-container').animate({ scrollLeft: "+="+objectWidth+"px"}, "slow");
        }
      }
      ctrl.buildArray = function(num) {
        return new Array(num);
      }
      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }

      ctrl.openImg = function(img, ev){
        selectedImg = img;
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/_galleryPop.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: true
        });
      }

      /**/
      function DialogController($scope, $mdDialog) {
        $scope.img = selectedImg;
        $scope.hide = function() {
          $mdDialog.hide();
        };

        $scope.cancel = function() {
          $mdDialog.cancel();
        };
      }



   },
   templateUrl: 'views/gallery.html'
});

components.component('gbHeader', {
  bindings: {},
	require: {
      parent: '^all'
  },
	controller: function ($scope, $location, $document) {
    var ctrl = this;

    ctrl.scroll = function(eID){
      var scrollElement = angular.element(document.getElementById(eID));
      $document.scrollToElementAnimated(scrollElement);
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


      ctrl.mainOptions = {
        anchors: ['home', 'services', 'galleries', 'testimonies', 'aboutus', 'contactus'],
			  menu: '#gb-inside-nav',

        //Accessibility
        keyboardScrolling: true,
        recordHistory: true
      }
   },
   templateUrl: 'views/home.html'
});

components.component('services', {
  bindings: {},
	controller: function ($document) {
      var ctrl = this;
      // variables
      ctrl.services = [
        {
          "section":"Hand Wash",
          "icon":"fa-hand-paper-o",
          "packages":[
            {"title":"Hand Wash Package 1", "price":"20", "details":["detail 1", "detail 2", "detail 3"]},
            {"title":"Hand Wash Package 2", "price":"40", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]},
            {"title":"Hand Wash Package 3", "price":"60", "details":["detail 1", "detail 2", "detail 3 with more text", "detail 4", "detail 5", "detail 6", "detail 7 with more text", "detail 8"]}
          ]
        },
        {
          "section":"Wash & Wax",
          "icon":"fa-shower",
          "packages":[
            {"title":"Wash & Wax Package 1", "price":"70", "details":["detail 1", "detail 2", "detail 3"]},
            {"title":"Wash & Wax Package 2", "price":"80", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]},
            {"title":"Wash & Wax Package 3", "price":"90", "details":["detail 1", "detail 2", "detail 3 with more text", "detail 4", "detail 5", "detail 6", "detail 7 with more text", "detail 8"]},
            {"title":"Wash & Wax Package 4", "price":"100", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]}
          ]
        },
        {
          "section":"Interior",
          "icon":"fa-tachometer",
          "packages":[
            {"title":"Interior Package 1", "price":"70", "details":["detail 1", "detail 2", "detail 3"]},
            {"title":"Interior Package 2", "price":"80", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]}
          ]
        },
        {
          "section":"Combo",
          "icon":"fa-plus",
          "packages":[
            {"title":"Combo Package 1", "price":"70", "details":["detail 1", "detail 2", "detail 3"]},
            {"title":"Combo Package 2", "price":"80", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]},
            {"title":"Combo Package 3", "price":"60", "details":["detail 1", "detail 2", "detail 3 with more text", "detail 4", "detail 5", "detail 6", "detail 7 with more text", "detail 8"]}
          ]
        }
      ];
      ctrl.selectedService = ctrl.services[0];
      // functions
      ctrl.buildArray = function(num) {
        return new Array(num);
      }
      ctrl.changeSelected = function(item){
        ctrl.selectedService = item;
      }
      ctrl.isSelected = function(item){
        return ctrl.selectedService == item;
      }

      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }
   },
   templateUrl: 'views/services.html'
});

components.component('gbSidenav', {
  bindings: {},
	require: {
      parent: '^all'
  },
	controller: function ($scope, $window) {
    var ctrl = this;
    ctrl.pages = [{"name":"services", "location":"app.services"}, {"name":"galleries", "location":"app.gallery"},{"name":"testimonies", "location":"app.testimonies"},{"name":"about us", "location":"app.aboutus"},{"name":"contact us", "location":"app.contactus"}];

    ctrl.isActive = function(id){
      return ($window.location.hash == '#'+id);
    }
   },
   templateUrl: 'views/_sidenav.html'
});

components.component('testimonies', {
  bindings: {},
	controller: function ($scope, $timeout,$document) {
      var ctrl = this;
      // variables
      ctrl.allItems = [
        {"id":0, "name":"Test 0", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"id":1, "name":"Test 1", "content":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {"id":2, "name":"Test 2", "content":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"id":3, "name":"Test 3", "content":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {"id":4, "name":"Test 4", "content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
        {"id":5, "name":"Test 5", "content":"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},
        {"id":6, "name":"Test 6", "content":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."},
      ];
      ctrl.currentId = -1;
      /*ctrl.displayItems = [
        {"class":"before", "status":"inactive", "name":"", "content":""},
        {"class":"selected", "status":"active", "id":-1,"name":"", "content":""},
        {"class":"after", "status":"inactive", "name":"", "content":""}
      ];*/
      $scope.direction = {"direction":"", "id":-1};

      ctrl.displayItems2 = {
        "before":{"class":"before", "status":"inactive", "name":"", "content":""},
        "current":{"class":"selected", "status":"active", "id":-1,"name":"", "content":""},
        "after":{"class":"after", "status":"inactive", "name":"", "content":""}
      };

      ctrl.bounceFile = "views/svgs/_bounce.html";

      ctrl.setDisplay = function(before, current, next){
        var before_obj = {"class":"before", "status":"inactive", "name":"", "content":""};
        var next_obj = {"class":"after", "status":"inactive", "name":"", "content":""};
        var current_obj = {"class":"selected", "status":"active", "id":-1,"name":"", "content":""};

        // Set Before Item
        before_obj.name = (before != null ? before.name : "");
        before_obj.content = (before != null ? before.content : "");

        // Set Next Item
        next_obj.name = (next != null ? next.name : "");
        next_obj.content = (next != null ? next.content : "");

        // Set Current Item
        current_obj.name = (current != null ? current.name : "");
        current_obj.content = (current != null ? current.content : "");
        current_obj.id = (current != null ? current.id : -1);

        // Set Special Current Id
        ctrl.currentId = (current != null ? current.id : -1);

        // Set Displays
        //ctrl.displayItems = [before_obj, current_obj, next_obj];
        ctrl.displayItems2.before = before_obj;
        ctrl.displayItems2.current = current_obj;
        ctrl.displayItems2.after = next_obj;
      }

      ctrl.adjustDisplay = function(type, location){
        var currentId = ctrl.currentId;
        if(type == "next"){
          var nextId = currentId+1;
          if(nextId < ctrl.allItems.length){
            var prev = $.grep(ctrl.allItems, function(e) { return e.id == currentId; });
            var newCur = $.grep(ctrl.allItems, function(e) { return e.id == nextId; });
            var next = (nextId+1 < ctrl.allItems.length ? $.grep(ctrl.allItems, function(e) { return e.id == (nextId+1); }) : null);

            // Set New Display
            ctrl.setDisplay((prev != null && prev.length > 0 ? prev[0] : null), (newCur != null && newCur.length > 0 ? newCur[0] : null), (next != null && next.length > 0 ? next[0] : null));
            $scope.direction = {"direction":"right", "id":nextId};
          }
        }
        else if(type == "prev"){
          var prevId = currentId-1;
          if(prevId >= 0){
            var prev = (prevId-1 >= 0 ? $.grep(ctrl.allItems, function(e) { return e.id == (prevId-1); }) : null);
            var newCur = $.grep(ctrl.allItems, function(e) { return e.id == prevId; });
            var next = $.grep(ctrl.allItems, function(e) { return e.id == currentId; });

            // Set New Display
            ctrl.setDisplay((prev != null && prev.length > 0 ? prev[0] : null), (newCur != null && newCur.length > 0 ? newCur[0] : null), (next != null && next.length > 0 ? next[0] : null));
            $scope.direction = {"direction":"left", "id":prevId};
          }
        }
        else if(type == "id"){
          if(location >= 0 && location < ctrl.allItems.length && location != currentId){
            var prev = (location-1 >= 0 ? $.grep(ctrl.allItems, function(e) { return e.id == (location-1); }) : null);
            var newCur = $.grep(ctrl.allItems, function(e) { return e.id == location; });
            var next = (location+1 < ctrl.allItems.length ? $.grep(ctrl.allItems, function(e) { return e.id == (location+1); }) : null);

            // Set New Display
            ctrl.setDisplay((prev != null && prev.length > 0 ? prev[0] : null), (newCur != null && newCur.length > 0 ? newCur[0] : null), (next != null && next.length > 0 ? next[0] : null));
            if(location > currentId) {
              $scope.direction = {"direction":"down", "id":location};
            }
            else {
              $scope.direction = {"direction":"down", "id":location};
            }
          }
        }
        else { /*Nothing*/}
      }

      ctrl.checkCtrlStatus = function(direction){
        if(direction == "prev"){
          return (ctrl.currentId == 0);
        }
        else if(direction = "next"){
          return (ctrl.currentId == (ctrl.allItems.length -1));
        }
      }

      ctrl.checkCtrlSelected = function(id){
        return (ctrl.currentId == id);
      }

      ctrl.buildArray = function(num) {
        return new Array(num);
      }
      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }
      // Set Initial Display
      ctrl.setDisplay(null, (ctrl.allItems.length > 0 ? ctrl.allItems[0] : null), (ctrl.allItems.length > 1 ? ctrl.allItems[1] : null) );
   },
   templateUrl: 'views/testimonies.html'
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

directives.directive('isVisible', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {

      // get element position
      var elementPos = (attrs.voffset == undefined ? 0 : parseInt(attrs.voffset,10 ));
      var el = element[0];
      /*while(el.offsetParent){
        el = el.offsetParent;
        elementPos += el.offsetTop;
      }*/
      elementPos += el.offsetTop;
      angular.element($window).bind("scroll", function() {
        var windowp = angular.element($window)[0];

        if((windowp.pageYOffset >= elementPos) && !element.hasClass("screenVisible")){
          element.addClass("screenVisible");
        }
        else {
          if(element.hasClass("screenVisible")){
            //element.removeClass("screenVisible");
          }
        }
      });

    }
  }
}]);

directives.directive('navPass', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {

      var passName = attrs.name;
      angular.element($window).bind("scroll", function() {

          var topSection = angular.element(document.getElementsByClassName(passName))[0];
          var windowp = angular.element($window)[0];
          var topThreshhold = topSection.offsetTop;

          if(windowp.pageYOffset >= topThreshhold){
            if(!element.hasClass("screenPass")){
              element.addClass("screenPass");
            }
          }
          else {
            if(element.hasClass("screenPass")){
              element.removeClass("screenPass");
            }
          }

        });

    }
  }
}]);

directives.directive('randomMotion', ['$timeout', function($timeout) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      console.log("Start Motion");
          var parentContainer = element[0].offsetParent;

          // Randomly Set Postion & Velocity
          var maxVelocity = 100;
          var posX = (Math.random() * parentContainer.clientWidth);
          var posY = (Math.random() * parentContainer.clientHeight);
          var velX = (Math.random() * maxVelocity);
          var velY = (Math.random() * maxVelocity);
          var timestamp = null;

          var borderX = element[0].clientWidth + 5;
          var borderY = element[0].clientHeight + 5;
          
          // Move Object
          (function tick() {
            var now = new Date().getTime();

            var maxX = parentContainer.clientWidth - borderX;
            var maxY = parentContainer.clientHeight - borderY;

            var elapsed = (timestamp || now) - now;
            timestamp = now;
            posX += elapsed * velX / 1000;
            posY += elapsed * velY / 1000;

            if (posX > maxX) {
                posX = 2 * maxX - posX;
                velX *= -1;
            }
            if (posX < 0) {
                posX = 0;
                velX *= -1;
            }
            if (posY > maxY) {
                posY = 2 * maxY - posY;
                velY *= -1;
            }
            if (posY < 0) {
                posY = 0;
                velY *= -1;
            }
            element.css({ "top": posY, "left": posX });
            // Set Position to $element top and left
            // Loop to Move object
            $timeout(tick, 30);
          })();
    }
  }
}]);

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

directives.directive('switchAnimation', ['$animate', '$timeout', function($animate, $timeout) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      $scope.$watch(attrs.switchAnimation, function(val, oldVal) {
          if(val === oldVal) return; // Skip inital call

          var animation = attrs.sin;
          if(val.direction != undefined){
            animation += val.direction;
          }
          $animate.addClass(element,animation).then(function() {
            $timeout(function() {$animate.removeClass(element,animation)});
          });
        });
    }
  }
}]);
