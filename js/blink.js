angular.module('ng-blink', []).
  directive('blink', function($timeout) {
    return {
      restrict: 'E',
      transclude: true,
      template:
        '<div ng-transclude class="ng-blink">' +
          '</div>',
      replace: true ,
      controller: function($scope, $element) {

        // IE 6/7/8 don't support CSS animations, so fall back to Javascript
        if ( navigator.userAgent &&  navigator.userAgent.match(/MSIE [6-8]/i)) {
          setInterval(function () {
            $element.addClass("hidden");
            $timeout(function () {
              $element.removeClass("hidden");
            }, 250);
          }, 750);
        }
      }
    };
  });
