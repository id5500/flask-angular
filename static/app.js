/**
 * Created by tkessoku on 15/02/27.
 */
console.log("hoge")
var MyController = function($scope){
    $scope.message = 'Hello, Angular';
    console.log("hello");
    $scope.action = function(){
        $scope.message = 'Change Angular';
        console.log('bye');

    };
};
var appModule = angular.module('app',[]);

appModule.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

appModule.controller('myController',MyController);
