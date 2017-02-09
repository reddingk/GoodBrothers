components.component('contactus', {
  bindings: {},
	controller: function ($document) {
      var ctrl = this;
      ctrl.contacts = {"phone":"302-566-5960", "email":"goodbrothersmobiledetailing@gmail.com"};
      ctrl.follow = [
        {"title":"facebook", "icon":"fa-facebook","url":"https://www.facebook.com/profile.php?id=100011333514973"},
        {"title":"instagram", "icon":"fa-instagram","url":"https://www.instagram.com/goodbrothers_mobiledetailing"}
      ];
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
