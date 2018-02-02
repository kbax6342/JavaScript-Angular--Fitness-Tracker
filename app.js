var fitnessTracker = angular.module('fitnessTracker', []);


fitnessTracker.controller('mainController', function($scope) {

    $scope.message = 'Welcome to the Fitness Tracker';

    $scope.header = "Login";

    $scope.second= "Fitness Tracker";

    $scope.message2 = 'This is the second title';


});

