/**
 * Created by donghao on 2015-12-28.
 */
var app=angular.module('app',[]);
app.directive("hello",function(){
    return{
        //restrict:'E',//element元素
        //restrict:'C',//class
        restrict:'A',//attribute属性,不写默认为A
        //replace:true,//替换掉自定义的directive的标签
        //template:'<div>hello angularJs</div>'
        link:function(){
            alert("我在这里");
        }
    }
})