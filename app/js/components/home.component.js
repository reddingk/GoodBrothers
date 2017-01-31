components.component('home', {
  bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.title = "Home";

      $.scrollify({
        section : ".page-section",
        sectionName : "section-name"/*,
        before:function(i,panels) {
          var ref = panels[i].attr("data-section-name");
          $(".page-section .active").removeClass("active");
          $(".page-section").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function() {
          var pagination = "<div class=\"side-container\">";
          var activeClass = "";
          $(".page-section").each(function(i) {
            activeClass = "";
            if(i===0) {
              activeClass = "active";
            }
            //pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            pagination += "<a class=\"side-item\"  class=\""+ activeClass+ "\" href=\"#" +$(this).attr("data-section-name") + "\"><div class=\"text\">"+$(this).attr("data-section-name")+"</div> <div class=\"icon\"></div></a>"
          });

          pagination += "</div>";

          $(".sidenav").append(pagination);
        }*/
      });

      //$(".page-section a").on("click",$.scrollify.move);
   },
   templateUrl: 'views/home.html'
});
