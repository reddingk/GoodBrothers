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
