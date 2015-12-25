/**
 * Created by donghao on 2015-12-25.
 */
var pb;
var max=100;
var current=0;
$(function(){
    pb=$("#pb");
    pb.progressbar({max:100})
    setInterval(changepb,100);
});

function changepb(){
    current++;
    if(current>100){
        current=0;
    }
    pb.progressbar("option","value",current);
}