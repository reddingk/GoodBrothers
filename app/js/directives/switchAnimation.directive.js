directives.directive('switchAnimation', ['$animate', '$timeout', function($animate, $timeout) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      $scope.$watch(attrs.switchAnimation, function(val, oldVal) {
          if(val === oldVal) return; // Skip inital call
          
          $animate.addClass(element,attrs.sin).then(function() {
            $timeout(function() {$animate.removeClass(element,attrs.sin)});
          });
        });
    }
  }
}]);
