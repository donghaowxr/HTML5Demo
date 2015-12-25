/**
 * Created by donghao on 2015-12-25.
 */
$(function(){
    $(".main>a").on("click",function(){
        var ulNode=$(this).next("ul");
        //if(ulNode.css("display")=="none"){
        //    ulNode.css("display","block");
        //}
        //else{
        //    ulNode.css("display","none");
        //}
        //ulNode.toggle("normal");//数字，slow,normal,fast
        ulNode.slideToggle();
    });

    $(".hmain").hover(function(){
        $(this).children("ul").slideDown();
    },function(){
        $(this).children("ul").slideUp();
    });
});