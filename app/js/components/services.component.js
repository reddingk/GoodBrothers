components.component('services', {
  bindings: {},
	controller: function ($document) {
      var ctrl = this;
      // variables
      ctrl.services = [
        {
          "section": "full detail",
          "items":[{"type":"car", "price":"75"},{"type":"suv", "price":"150"},{"type":"truck", "price":"150"} ],
          "description":"Our full detail package will cover every detailing task from interior to exterior to ensure that we have your vehicle looking good as new.",
          "details":["Full Interior Vacuum", "Carpet Shampoo/Steam Clean", "Clean/Protect Dashboard & All Interior Surfaces", "Full Exterior Body Wash","Rim Cleaning", "Tire Shine", "Detail Logos & Trims"]
        },
        {
          "section": "exterior only",
          "items":[{"type":"wash & wax", "price":"35"}],
          "description":"Our select exterior pacakage will give your car that spot free shine.",
          "details":["Full Exterior Body Wash","Rim Cleaning", "Tire Shine", "Detail Logos & Trims"]
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
