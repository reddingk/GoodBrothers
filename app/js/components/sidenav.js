components.component('gbSidenav', {
  bindings: {},
	require: {
      parent: '^all'
  },
	controller: function ($scope, $window) {
    var ctrl = this;
    ctrl.pages = [{"name":"services", "location":"app.services"}, {"name":"galleries", "location":"app.gallery"},{"name":"testimonies", "location":"app.testimonies"},{"name":"about us", "location":"app.aboutus"},{"name":"contact us", "location":"app.contactus"}];

    ctrl.isActive = function(id){
      return ($window.location.hash == '#'+id);
    }
   },
   templateUrl: 'views/_sidenav.html'
});
