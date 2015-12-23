/**
 * Created by donghao on 2015-12-23.
 */
(function(){
    var n="bbb"
    function Person(name){
        var _this={}
        _this.name=name;
        _this.sayHello=function(){
            alert("Hello"+_this.name+n);
        }
        return _this;
    }
    window.Person=Person;
}());

(function(){
    function teacher(name){
        var _this=Person(name);
        var surperSay=_this.sayHello;
        _this.sayHello=function(){
            surperSay.call(_this);
            alert("t-hello"+_this.name);
        }
        return _this;
    }
    window.teacher=teacher;
}());

var t=teacher("aaa");
t.sayHello();