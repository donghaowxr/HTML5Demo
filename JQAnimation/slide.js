/**
 * Created by donghao on 2015-12-24.
 */
$(function(){
   $("#flipshow").on("click",function(){
      $("#content").slideDown(1000);
   });
    $("#fliphide").on("click",function(){
        $("#content").slideUp(1000);
    });
    $("#fliptoggle").on("click",function(){
        $("#content").slideToggle(1000);
    });
});