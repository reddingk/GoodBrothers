components.component('services', {
  bindings: {},
	controller: function ($document) {
      var ctrl = this;
      // variables
      ctrl.services = [
        {
          "section":"Hand Wash",
          "icon":"fa-hand-paper-o",
          "packages":[
            {"title":"Hand Wash Package 1", "price":"20", "details":["detail 1", "detail 2", "detail 3"]},
            {"title":"Hand Wash Package 2", "price":"40", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]},
            {"title":"Hand Wash Package 3", "price":"60", "details":["detail 1", "detail 2", "detail 3 with more text", "detail 4", "detail 5", "detail 6", "detail 7 with more text", "detail 8"]}
          ]
        },
        {
          "section":"Wash & Wax",
          "icon":"fa-shower",
          "packages":[
            {"title":"Wash & Wax Package 1", "price":"70", "details":["detail 1", "detail 2", "detail 3"]},
            {"title":"Wash & Wax Package 2", "price":"80", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]},
            {"title":"Wash & Wax Package 3", "price":"90", "details":["detail 1", "detail 2", "detail 3 with more text", "detail 4", "detail 5", "detail 6", "detail 7 with more text", "detail 8"]},
            {"title":"Wash & Wax Package 4", "price":"100", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]}
          ]
        },
        {
          "section":"Interior",
          "icon":"fa-tachometer",
          "packages":[
            {"title":"Interior Package 1", "price":"70", "details":["detail 1", "detail 2", "detail 3"]},
            {"title":"Interior Package 2", "price":"80", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]}
          ]
        },
        {
          "section":"Combo",
          "icon":"fa-plus",
          "packages":[
            {"title":"Combo Package 1", "price":"70", "details":["detail 1", "detail 2", "detail 3"]},
            {"title":"Combo Package 2", "price":"80", "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]},
            {"title":"Combo Package 3", "price":"60", "details":["detail 1", "detail 2", "detail 3 with more text", "detail 4", "detail 5", "detail 6", "detail 7 with more text", "detail 8"]}
          ]
        }
      ];
      ctrl.selectedService = ctrl.services[0];
      // functions
      ctrl.buildArray = function(num) {
        return new Array(num);
      }
      ctrl.changeSelected = function(item){
        ctrl.selectedService = item;
      }
      ctrl.isSelected = function(item){
        return ctrl.selectedService == item;
      }

      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }
   },
   templateUrl: 'views/services.html'
});
