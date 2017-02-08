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
