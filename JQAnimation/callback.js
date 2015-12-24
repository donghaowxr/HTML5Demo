/**
 * Created by donghao on 2015-12-24.
 */
$(function(){
   $("button").on("click",function(){
      //$("p").hide(1000,function(){
      //   alert("动画结束，回调方法");
      //});

       $("p").css("color","red").slideUp(1000).slideDown(1000);
   });
});