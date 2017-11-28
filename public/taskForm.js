(function(){
    var taskForm = {
        controller: "FormController",
        templateUrl: "Templates/outerTemplate.html"



        // <div class="container" ng-controller="FormController as test">
        //   <form>
        //     <h1>TODO List</h1>
        //     <p> A place to store the things you have to do!</p>
        //      <input type="text" placeholder="Filter your to-dos"  ng-model="taskFilter">
        //      <ol>
        //        <li ng-repeat="task in test.newTask | filter: taskFilter track by $index" list-directive> {{ task }}<i class="material-icons" ng-click="test.removeTask($index)">&#xE5CD;</i> </li>
        //      </ol>
        //      <input type="text" placeholder="Add your to-do"  ng-model="test.add"><br>
        //      <button ng-click="test.addTask(test.add)" button-directive>Add</button>
        //   </form>
        // </div>

    };

        angular
            .module("App")
            .component("taskForm", taskForm);

    })();
