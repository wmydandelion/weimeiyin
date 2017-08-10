
angular.module("myApp",[])
.controller("ctrl01",function ($scope, $rootScope) {
   $scope.uname = "xiaogao";
   $rootScope.uname = "laogao";
})
    .controller("ctrl02",function ($scope, $rootScope) {
        $scope.phone = "12343546";
    });