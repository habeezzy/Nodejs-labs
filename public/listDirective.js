(function() {
function listDirective() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs){
      $element.on("mouseenter", function() {
       $element.css("background-color", "#bbb");
      });
      $element.on("mouseleave", function() {
        $element.css("background-color", "#eee");
      });
      $element.on("mouseenter", function(){
       var icon = $element[0].lastElementChild;
       icon.style.color = "#FF0000";
      });
      $element.on("mouseleave", function(){
       var icon = $element[0].lastElementChild;
       icon.style.color = "";
      });


     }
    };
  }






angular
  .module("App")
  .directive("listDirective", listDirective);
})();
