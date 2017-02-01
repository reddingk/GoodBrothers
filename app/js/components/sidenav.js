components.component('gbSidenav', {
  bindings: {},
	require: {
      parent: '^all'
  },
	controller: function ($scope, $window) {
    var ctrl = this;
    ctrl.pages = [{"name":"home", "location":"home"},{"name":"services", "location":"services"}, {"name":"galleries", "location":"galleries"},{"name":"testimonies", "location":"testimonies"},{"name":"about us", "location":"aboutus"},{"name":"contact us", "location":"contactus"}];

    ctrl.isActive = function(id){
      return ($window.location.hash == '#'+id);
    }
   },
   templateUrl: 'views/_sidenav.html'
});
