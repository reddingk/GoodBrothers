components.component('contactus', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.buildArray = function(num) {
        return new Array(num);
      }
   },
   templateUrl: 'views/contactus.html'
});
