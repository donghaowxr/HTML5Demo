/**
 * Created by donghao on 2015-12-07.
 */
var num=0;
var nspan;
var btn;
window.onload=function(){
    nspan=document.getElementById("num");
    btn=document.getElementById("btn");
    if(sessionStorage.num){
        num=sessionStorage.num;
    }
    else{
        num=0;
    }
    btn.onclick=function(){
        num++;
        sessionStorage.num=num;
        add(num);
    }
}

function add(count){
    nspan.innerHTML=count;
}