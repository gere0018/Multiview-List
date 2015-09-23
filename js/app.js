//This app has the modules ngRoute and ListControllers as required dependencies for it to function correctly.
var myApp = angular.module("gere0018-multiview-list", ["ngRoute"]);
// $routeProvider is used or injected in the config function. $routeProvider.when() method defines routes for the multiviews in the app.
    myApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/lists/first', {
        templateUrl: 'templates/first-list.html',
        controller: 'ListController'
      }).
     when('/lists/second', {
        templateUrl: 'templates/second-list.html',
        controller: 'ListController'
      }).
     when('/lists/third', {
        templateUrl: 'templates/third-list.html',
        controller: 'ListController'
      }).
      otherwise({
        redirectTo: '/lists/first'
      });
  }]);


myApp.controller('ListController', ['$scope', function($scope) {
  $scope.list = ["Finish Assignments", "Wash clothes", "Plan weekly meny"];
  $scope.text="";
  $scope.addText= function(){
      if($scope.text){
          $scope.list.push(this.text);
          $scope.text="";
          console.log("pushed text in array");
      }

  };
    $scope.deleteItem= function(index){
        $scope.list.splice(index,1);
        console.log("inside delete item");

};

}]);
