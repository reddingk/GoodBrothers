components.component('home', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.title = "Home";


      ctrl.mainOptions = {
        anchors: ['home', 'services', 'galleries', 'testimonies', 'aboutus', 'contactus'],
			  menu: '#gb-inside-nav',

        //Accessibility
        keyboardScrolling: true,
        recordHistory: true
      }
   },
   templateUrl: 'views/home.html'
});
