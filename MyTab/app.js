/**
 * Created by donghao on 2015-12-25.
 */
$(function(){
   $("#tabfirst li").each(function(index){
      var liNode=$(this);
       liNode.mousemove(function(){
          timeoutid=setTimeout(function(){
              $("div.content").removeClass("content");
              $("#tabfirst li.tabin").removeClass("tabin");
              $("div").eq(index).addClass("content");
              liNode.addClass("tabin");
          },300);
      }).mouseout(function(){

      });
   });

    $("#realcontent").load("myTab.html");
    $("#tabsecond li").each(function(index){
        $(this).on("click",function(){
            $("#tabsecond li.tabin").removeClass("tabin");
            $(this).addClass("tabin");
           if(index==0){
               $("#realcontent").load("myTab.html");
           }
            else if(index==1){
               $("#realcontent").load("myTab.html");
           }
            else if(index==2){
               $("#realcontent").load("myTab.html");
           }
        });
    })
});