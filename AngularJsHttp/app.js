/**
 * Created by donghao on 2015-12-28.
 */
angular.module('app',[])
    .config(function($httpProvider){

    })
.controller("MyCtrl",function($scope,$http){
    $http.post('http://127.0.0.1:80/user/getUsers',{name:$scope.name})//链接地址和参数
        .success(function(resp){//回调函数
            console.log(resp);
        })
})