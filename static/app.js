/**
 * Created by tkessoku on 15/02/27.
 */
var MyController = function ($scope, $http, $templateCache) {

    $scope.method = 'GET';
    $scope.url = 'hello.txt';

    $scope.message = 'Flask と Angular で非同期通信';

    $scope.fetch = function()
    {
        $scope.message = 'Change Angular';

        $scope.code = null;
        $scope.response = null;
        $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
            success(function (data, status) {
                $scope.status = status;
                $scope.data = data;
            }).
            error(function (data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
            });
    };

    $scope.updateModel = function (method, url) {
        $scope.method = method;
        $scope.url = url;
    };

    //$http.get('/').success(function getHome(){
    //    console.log('get=======')
    //});
    $scope.posting = function () {
        url = '/add?q=' + $scope.userText;
        $http.post(url).success(function (data, status, headers, config) {
                $scope.status = status;
                $scope.data = '入力されたデータ >>> '+$scope.userText;
        });
    };


};

var appModule = angular.module('app', []);

appModule.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

appModule.controller('myController', MyController);
