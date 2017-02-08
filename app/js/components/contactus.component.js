components.component('contactus', {
  bindings: {},
	controller: function ($document) {
      var ctrl = this;
      // variables
      ctrl.buildArray = function(num) {
        return new Array(num);
      }
      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }
   },
   templateUrl: 'views/contactus.html'
});
