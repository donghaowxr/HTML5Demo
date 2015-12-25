/**
 * Created by donghao on 2015-12-25.
 */
$(function(){
    $("#Rec1").draggable();
    $("#Rec2").droppable();
    $("#Rec2").on("drop",function(event,ui){
       $("#Rec2").text("drop事件")
    });
});