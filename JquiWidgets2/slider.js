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
    //        valuespan.text(slider.slider("option","value"));//�϶�֮��ı�
    //    }
    //});
    slider.slider({
        slide:function(event,ui){
            valuespan.text(slider.slider("option","value"));//�϶�ʱ�仯
        }
    });
});