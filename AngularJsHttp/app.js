/**
 * Created by donghao on 2015-12-28.
 */
angular.module('app',[])
    .config(function($httpProvider){

    })
.controller("MyCtrl",function($scope,$http){
    $http.post('http://127.0.0.1:80/user/getUsers',{name:$scope.name})//���ӵ�ַ�Ͳ���
        .success(function(resp){//�ص�����
            console.log(resp);
        })
})