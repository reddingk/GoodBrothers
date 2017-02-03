components.component('aboutus', {
  bindings: {},
	controller: function ($scope, $timeout) {
      var ctrl = this;
      // variables
      ctrl.content = [
        {"icon":"fa-handshake-o", "title":"Our Promise", "img":"imgs/promise2.jpg","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"icon":"fa-map-marker", "title":"Where We Are Located", "img":"imgs/where1.jpg","content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},
        {"icon":"fa-id-card-o", "title":"JD + H", "img":"imgs/BC.jpg","content":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."}
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
   },
   templateUrl: 'views/aboutus.html'
});
