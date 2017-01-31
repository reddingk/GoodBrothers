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
