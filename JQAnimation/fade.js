/**
 * Created by donghao on 2015-12-24.
 */
$(function(){
   $("#in").on("click",function(){
      $("#div1").fadeIn(1000);
       $("#div2").fadeIn(1000);
       $("#div3").fadeIn(1000);
   });

    $("#out").on("click",function(){
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    });
    $("#toggle").on("click",function(){
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
    });

    $("#to").on("click",function(){
        $("#div1").fadeTo(1000,0.5);
        $("#div2").fadeTo(1000,0.7);
        $("#div3").fadeTo(1000,0.3);
    });
});