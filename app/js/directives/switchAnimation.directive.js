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
