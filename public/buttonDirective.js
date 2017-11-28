(function() {
function buttonDirective() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs){
      $element.on("mouseenter", function() {
       $element.css("background-color", "deeppink");
      });
      $element.on("mouseleave", function() {
        $element.css("background-color", "lightpink");
      });

      }
    };
  }






angular
  .module("App")
  .directive("buttonDirective", buttonDirective);
})();
