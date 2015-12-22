/**
 * Created by donghao on 2015-12-07.
 */
var ta;
var btn;
window.onload=function(){
    ta=document.getElementById("ta");
    btn=document.getElementById("btn");
    if(localStorage.text){
        ta.value=localStorage.text;
    }
    btn.onclick=function(){
        alert(ta.value);
        localStorage.text=ta.value;
    }
}