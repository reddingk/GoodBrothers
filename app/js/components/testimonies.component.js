components.component('testimonies', {
  bindings: {},
	controller: function ($scope, $timeout,$document) {
      var ctrl = this;
      // variables
      ctrl.allItems = [
        {"id":0, "name":"S. Morris", "content":"S/O to my cuzzo jay Jay Douglas Goodbrothers Mobiledetailing for doing such an amazing job on my car today!!!! ☺️"},
        {"id":1, "name":"H. Boogie", "content":"Goodbrothers Mobiledetailing they are the cheapest around with the best work! "},
        {"id":2, "name":"V. Willams", "content":"Thanks Goodbrothers, you guys had my car ready for the summer."},
        {"id":3, "name":"T. Evans", "content":"It was alot easier to have them detail my car and they had it like new."}
      ];
      ctrl.currentId = -1;
      /*ctrl.displayItems = [
        {"class":"before", "status":"inactive", "name":"", "content":""},
        {"class":"selected", "status":"active", "id":-1,"name":"", "content":""},
        {"class":"after", "status":"inactive", "name":"", "content":""}
      ];*/
      $scope.direction = {"direction":"", "id":-1};

      ctrl.displayItems2 = {
        "before":{"class":"before", "status":"inactive", "name":"", "content":""},
        "current":{"class":"selected", "status":"active", "id":-1,"name":"", "content":""},
        "after":{"class":"after", "status":"inactive", "name":"", "content":""}
      };

      ctrl.bounceFile = "views/svgs/_bounce.html";

      ctrl.setDisplay = function(before, current, next){
        var before_obj = {"class":"before", "status":"inactive", "name":"", "content":""};
        var next_obj = {"class":"after", "status":"inactive", "name":"", "content":""};
        var current_obj = {"class":"selected", "status":"active", "id":-1,"name":"", "content":""};

        // Set Before Item
        before_obj.name = (before != null ? before.name : "");
        before_obj.content = (before != null ? before.content : "");

        // Set Next Item
        next_obj.name = (next != null ? next.name : "");
        next_obj.content = (next != null ? next.content : "");

        // Set Current Item
        current_obj.name = (current != null ? current.name : "");
        current_obj.content = (current != null ? current.content : "");
        current_obj.id = (current != null ? current.id : -1);

        // Set Special Current Id
        ctrl.currentId = (current != null ? current.id : -1);

        // Set Displays
        //ctrl.displayItems = [before_obj, current_obj, next_obj];
        ctrl.displayItems2.before = before_obj;
        ctrl.displayItems2.current = current_obj;
        ctrl.displayItems2.after = next_obj;
      }

      ctrl.adjustDisplay = function(type, location){
        var currentId = ctrl.currentId;
        if(type == "next"){
          var nextId = currentId+1;
          if(nextId < ctrl.allItems.length){
            var prev = $.grep(ctrl.allItems, function(e) { return e.id == currentId; });
            var newCur = $.grep(ctrl.allItems, function(e) { return e.id == nextId; });
            var next = (nextId+1 < ctrl.allItems.length ? $.grep(ctrl.allItems, function(e) { return e.id == (nextId+1); }) : null);

            // Set New Display
            ctrl.setDisplay((prev != null && prev.length > 0 ? prev[0] : null), (newCur != null && newCur.length > 0 ? newCur[0] : null), (next != null && next.length > 0 ? next[0] : null));
            $scope.direction = {"direction":"right", "id":nextId};
          }
        }
        else if(type == "prev"){
          var prevId = currentId-1;
          if(prevId >= 0){
            var prev = (prevId-1 >= 0 ? $.grep(ctrl.allItems, function(e) { return e.id == (prevId-1); }) : null);
            var newCur = $.grep(ctrl.allItems, function(e) { return e.id == prevId; });
            var next = $.grep(ctrl.allItems, function(e) { return e.id == currentId; });

            // Set New Display
            ctrl.setDisplay((prev != null && prev.length > 0 ? prev[0] : null), (newCur != null && newCur.length > 0 ? newCur[0] : null), (next != null && next.length > 0 ? next[0] : null));
            $scope.direction = {"direction":"left", "id":prevId};
          }
        }
        else if(type == "id"){
          if(location >= 0 && location < ctrl.allItems.length && location != currentId){
            var prev = (location-1 >= 0 ? $.grep(ctrl.allItems, function(e) { return e.id == (location-1); }) : null);
            var newCur = $.grep(ctrl.allItems, function(e) { return e.id == location; });
            var next = (location+1 < ctrl.allItems.length ? $.grep(ctrl.allItems, function(e) { return e.id == (location+1); }) : null);

            // Set New Display
            ctrl.setDisplay((prev != null && prev.length > 0 ? prev[0] : null), (newCur != null && newCur.length > 0 ? newCur[0] : null), (next != null && next.length > 0 ? next[0] : null));
            if(location > currentId) {
              $scope.direction = {"direction":"down", "id":location};
            }
            else {
              $scope.direction = {"direction":"down", "id":location};
            }
          }
        }
        else { /*Nothing*/}
      }

      ctrl.checkCtrlStatus = function(direction){
        if(direction == "prev"){
          return (ctrl.currentId == 0);
        }
        else if(direction = "next"){
          return (ctrl.currentId == (ctrl.allItems.length -1));
        }
      }

      ctrl.checkCtrlSelected = function(id){
        return (ctrl.currentId == id);
      }

      ctrl.buildArray = function(num) {
        return new Array(num);
      }
      ctrl.scrollToSection = function(section){
        var sectionScroll = angular.element(document.getElementById(section));
        $document.scrollToElement(sectionScroll, 0, 1000);
      }
      // Set Initial Display
      ctrl.setDisplay(null, (ctrl.allItems.length > 0 ? ctrl.allItems[0] : null), (ctrl.allItems.length > 1 ? ctrl.allItems[1] : null) );
   },
   templateUrl: 'views/testimonies.html'
});
