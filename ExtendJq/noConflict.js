/**
 * Created by donghao on 2015-12-24.
 */
var myjq=$.noConflict();//防止$符号被代替掉
myjq(function(){
    myjq("#btn").on("click",function(){
        myjq("div").text("new hello");
   });
});