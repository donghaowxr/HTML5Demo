/**
 * Created by donghao on 15/12/27.
 */
angular.module('app',[])
    .factory('Data',function(){
        return{
            msg:'我来自factory'
        }
    })
.controller('FCtrl',function($scope,Data){
        $scope.data=Data;
    })
.controller('SCtrl',function($scope,Data){
        $scope.data=Data;
    })