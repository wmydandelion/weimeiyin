angular.module("myApp",[])
.value("a","xixi")
.controller("ctrl01",function ($scope,a) {
    $scope.name = a;

});