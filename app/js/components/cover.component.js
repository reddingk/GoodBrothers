components.component('cover', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.title = "Good Brothers Mobile Detailing";
      ctrl.img = "imgs/dirty2.png"
      ctrl.subtitle = "it's easier when we do it";
      ctrl.contacts = {"phone":"302-566-5960", "email":"goodbrothersmobiledetailing@gmail.com"};
   },
   templateUrl: 'views/cover.html'
});
