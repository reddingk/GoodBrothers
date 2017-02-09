components.component('home', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.title = "Home";
      ctrl.spaceImgs = ["imgs/full1.jpg","imgs/full2.jpg","imgs/full3.jpg"];


   },
   templateUrl: 'views/home.html'
});
