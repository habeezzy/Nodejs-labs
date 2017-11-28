(function(){
    var taskList = {
        controller: "FormController",
          templateUrl: "Templates/innerTemplate.html"

    };

        angular
            .module("App")
            .component("taskList", taskList);
    })();
