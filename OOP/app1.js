/**
 * Created by donghao on 2015-12-23.
 */
(function(){
    var n="bbb";
    function People(name){
        this._name=name;
    }
    People.prototype.say=function(){
        alert("hello"+this._name+n);
    }
    window.People=People;
}());

(function(){
    function Student(name){
        this._name=name;
    }
    Student.prototype=new People();
    var superSay=Student.prototype.say;
    Student.prototype.say=function(){
        superSay.call(this);//���ø����е�say
        alert("stu-Hello"+this._name);
    }
    window.Student=Student;
}());

var s=new Student("aaa");
s.say();