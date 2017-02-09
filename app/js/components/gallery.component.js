components.component('gallery', {
  bindings: {},
	controller: function ($scope, $timeout, $mdDialog, $document) {
      var ctrl = this;
      // variables
      ctrl.images = [ "imgs/gallery/img1.jpg", "imgs/gallery/img2.jpg", "imgs/gallery/img3.jpg", "imgs/gallery/img4.jpg", "imgs/gallery/img5.jpg", "imgs/gallery/img6.jpg", "imgs/gallery/img7.jpg", "imgs/gallery/img8.jpg", "imgs/gallery/img9.jpg","imgs/gallery/img10.jpg", "imgs/gallery/img11.jpg"];
      var selectedImg = "";
      ctrl.truckFile = "views/svgs/_truck.html";
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
      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
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
