angular.module("myApp",[])
    .controller('ctrl01',function ($scope,$rootScope) {
        var users = [
            {id:11,name:"11111",phone:"123"},
            {id:21,name:"22221",phone:"123"},
            {id:31,name:"33331",phone:"123"},
            {id:41,name:"44441",phone:"123"},
            {id:51,name:"55551",phone:"123"}
            ];
        $scope.users = users;
        $scope.delUser = function (index) {
            $scope.users.splice(index,1);
        }
    });