components.component('gallery', {
  bindings: {},
	controller: function ($scope, $timeout, $mdDialog) {
      var ctrl = this;
      // variables
      ctrl.images = [ "imgs/gallery/img1.jpg", "imgs/gallery/img2.jpg", "imgs/gallery/img3.jpg", "imgs/gallery/demo/d1.jpg", "imgs/gallery/demo/d2.jpg", "imgs/gallery/demo/d3.jpg", "imgs/gallery/demo/d4.png" ];
      var selectedImg = "";
      ctrl.truckFile = "views/_truck.html";
      // Functions
      ctrl.clientCtrl = function(direction) {
        var objectWidth = ($('.gallery-item')[0].offsetWidth + 20);

        if(direction == "left"){
          // Move Left to Right
          $('.gallery-list-container').animate({ scrollLeft: "-="+objectWidth+"px"}, "slow");
        }
        else if(direction == "right"){
          // Move Right to Left
          $('.gallery-list-container').animate({ scrollLeft: "+="+objectWidth+"px"}, "slow");
        }
      }
      ctrl.buildArray = function(num) {
        return new Array(num);
      }

      ctrl.openImg = function(img, ev){
        selectedImg = img;
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/_galleryPop.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: true
        });
      }

      /**/
      function DialogController($scope, $mdDialog) {
        $scope.img = selectedImg;
        $scope.hide = function() {
          $mdDialog.hide();
        };

        $scope.cancel = function() {
          $mdDialog.cancel();
        };
      }



   },
   templateUrl: 'views/gallery.html'
});
