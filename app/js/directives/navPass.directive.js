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
