/**
 * Created by donghao on 2015-12-25.
 */
var valuespan,slider
$(function(){
   //$("#slider").slider();
    slider=$("#slider");
    valuespan=$("#span");
    //slider.slider({
    //    change:function(event,ui){
    //        valuespan.text(slider.slider("option","value"));//拖动之后改变
    //    }
    //});
    slider.slider({
        slide:function(event,ui){
            valuespan.text(slider.slider("option","value"));//拖动时变化
        }
    });
});