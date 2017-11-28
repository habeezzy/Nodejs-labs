(function() {
function FormController() {
  var vm = this;
  vm.newTask = [ "Grocery Shop", "Laundry", "Get Gas"];
    vm.removeTask = function(task) {
     vm.newTask.splice(task, 1);

   };
   vm.addTask = function(add) {
     vm.newTask.push(add);
   };
}
   angular
     .module("App")
     .controller("FormController", FormController);

  })();
