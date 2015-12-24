/**
 * Created by donghao on 2015-12-24.
 */
$(function(){
    $("body").text("加载中...");
   $("body").load("box.htm",function(a,status,complete){
       console.log(status);
       if(status=="error"){
           $("body").text("加载失败");
       }
   });

    $.getScript("hellojs.js").complete(function(){
       sayhello();
    });
});