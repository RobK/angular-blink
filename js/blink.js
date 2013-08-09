angular.module('components', []).
  directive('blink', function() {
    return {
      restrict: 'E',
      transclude: true,
      template:
        '<div ng-transclude class="ng-blink">' +
          '</div>',
      replace: true
    };
  });
