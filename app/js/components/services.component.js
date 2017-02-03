components.component('services', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.buildArray = function(num) {
        return new Array(num);
      }
   },
   templateUrl: 'views/services.html'
});
