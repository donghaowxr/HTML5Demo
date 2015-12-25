/**
 * Created by donghao on 2015-12-25.
 */
$(function(){
    $("#btn").button();
    $("#select").selectable();
    $("#btn").on("click",function(){
       if($("#right").hasClass("ui-selected")){
           alert("答对了");
       }
    });
});