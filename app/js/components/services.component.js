components.component('services', {
  bindings: {},
	controller: function ($document) {
      var ctrl = this;
      // variables
      ctrl.services = [
        {
          "section": "full detail",
          "items":[{"type":"car", "price":"75"},{"type":"suv", "price":"150"},{"type":"truck", "price":"150"} ],
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "details":["detail 1", "detail 2", "detail 3", "detail 4", "detail 5", "detail 6"]
        },
        {
          "section": "exterior only",
          "items":[{"type":"wash & wax", "price":"20"}],
          "description":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          "details":["detail 1", "detail 2", "detail 3", "detail 4"]
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
