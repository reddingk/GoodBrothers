components.component('aboutus', {
  bindings: {},
	controller: function ($scope, $timeout,$document) {
      var ctrl = this;
      // variables
      ctrl.content = [
        {"icon":"fa-handshake-o", "title":"Our Promise", "img":"imgs/promise2.jpg","content":"At Good Brothers Mobile Detailing we offer a signature detailing service that help's us stand by our statement 'Its Better When We Do It'.  From Interior to Exterior services we take full care of your vehicle to have it looking good as new."},
        {"icon":"fa-map-marker", "title":"Where We Are Located", "img":"imgs/where1.jpg","content":"Based out of the northern Delaware area we cover a radius that includes parts of Delaware, Maryland, & Pennsylvania.  For inquiries/information on our services or to set up an appointment feel free to contact us at 302-566-5960."},
        {"icon":"fa-id-card-o", "title":"JD + H", "img":"imgs/BC.jpg","content":"We are here to make sure you receive the best possible service and exceed your expectations.  We wish to create lasting relationships with every customer so we make sure the job is done right, every time."}
      ];

      ctrl.selected = ctrl.content[0];
      $scope.selectedItem = ctrl.selected;
      $scope.visible = true;

      ctrl.changeSelected = function(item){
        ctrl.selected = item;
        $scope.selectedItem = item;
      }
      ctrl.isActive = function(item){
        return (ctrl.selected == item);
      }
      ctrl.buildArray = function(num) {
        return new Array(num);
      }
      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }
   },
   templateUrl: 'views/aboutus.html'
});
