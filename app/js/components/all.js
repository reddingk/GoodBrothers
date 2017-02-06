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
