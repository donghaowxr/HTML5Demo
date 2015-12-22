/**
 * Created by donghao on 2015-12-04.
 */
var CANVAS_WIDTH=500,CANVAS_HEIGHT=500;
var canvas,context;
var i;
window.onload=function(){
    createCanvas();
}

function createCanvas(){
    document.body.innerHTML="<canvas id='myCanvas' width='"+CANVAS_WIDTH+"' height='"+CANVAS_HEIGHT+"'>";
    canvas=document.getElementById("myCanvas");
    if(canvas==null){
        return false;
    }
    context=canvas.getContext("2d");
    //globalDraw();
    shadowDraw();
}

function shadowDraw(){
    context.fillStyle="#eeeeef";
    context.fillRect(0,0,500,500);
    context.shadowOffsetX=10;
    context.shadowOffsetY=10;
    context.shadowColor="rgba(100,100,100,0.5)";
    context.shadowBlur=7.5;
    context.translate(0,0);
    for(var i=0;i<3;i++){
        context.translate(100,100);
        create5Star();
        context.fill();
    }
}

function create5Star(){
    var dx=100;
    var dy=100;
    var s=50;
    context.beginPath();
    context.fillStyle="rgba(255,0,0,0.5)";
    var dig=Math.PI/5*4;
    for(var i=0;i<5;i++){
        var x=Math.sin(i*dig);
        var y=Math.cos(i*dig);
        context.lineTo(dx+x*s,dy+y*s);
    }
    context.closePath();
}

//Í¼ÐÎ×éºÏ
function globalDraw(){
    var options=new Array(
        "source-atop",
        "source-in",
        "source-out",
        "source-over",
        "destination-atop",
        "destination-in",
        "destination-out",
        "destination-over",
        "lighter",
        "copy",
        "xor"
    );
    i=8;
    context.fillStyle="blue";
    context.fillRect(10,10,60,60);
    context.globalCompositeOperation=options[i];
    context.beginPath();
    context.fillStyle="red";
    context.arc(60,60,30,Math.PI*2,false);
    context.closePath();
    context.fill();
}