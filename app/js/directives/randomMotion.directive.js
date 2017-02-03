directives.directive('randomMotion', ['$timeout', function($timeout) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      console.log("Start Motion");
          var parentContainer = element[0].offsetParent;

          // Randomly Set Postion & Velocity
          var maxVelocity = 100;
          var posX = (Math.random() * parentContainer.clientWidth);
          var posY = (Math.random() * parentContainer.clientHeight);
          var velX = (Math.random() * maxVelocity);
          var velY = (Math.random() * maxVelocity);
          var timestamp = null;

          // Move Object
          (function tick() {
            var now = new Date().getTime();
            var borderX = element[0].clientWidth + 5;
            var borderY = element[0].clientHeight + 5;

            var maxX = parentContainer.clientWidth - borderX;
            var maxY = parentContainer.clientHeight - borderY;

            var elapsed = (timestamp || now) - now;
            timestamp = now;
            posX += elapsed * velX / 1000;
            posY += elapsed * velY / 1000;

            if (posX > maxX) {
                posX = 2 * maxX - posX;
                velX *= -1;
            }
            if (posX < 0) {
                posX = 0;
                velX *= -1;
            }
            if (posY > maxY) {
                posY = 2 * maxY - posY;
                velY *= -1;
            }
            if (posY < 0) {
                posY = 0;
                velY *= -1;
            }
            element.css({ "top": posY, "left": posX });
            // Set Position to $element top and left
            // Loop to Move object
            $timeout(tick, 30);
          })();
    }
  }
}]);
