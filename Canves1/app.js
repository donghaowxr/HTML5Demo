/**
 * Created by donghao on 2015-12-04.
 */
var CANVAS_WIDTH=500,CANVAS_HEIGHT=500;
var canvas,context;
window.onload=function(){
    createCanvas();
}

function createCanvas(){
    document.body.innerHTML="<canvas id='myCanvas' width='"+CANVAS_WIDTH+"' height='"+CANVAS_HEIGHT+"'>"
    canvas=document.getElementById("myCanvas");
    context=canvas.getContext("2d");
    //Lineardraw();
    //Radiadraw();
    BianxingTuxin();
}

//变形图形
function BianxingTuxin(){
    context.fillStyle="#eeeeef";
    context.fillRect(0,0,500,500);
    context.translate(200,50);
    context.fillStyle="rgba(255,0,0,0.25)";
    for(var i=0;i<50;i++){
        context.translate(25,25);
        context.scale(0.95,0.95);
        context.rotate(Math.PI/10);
        context.fillRect(0,0,100,50);
    }
}

//径向渐变
function Radiadraw(){
    var g1=context.createRadialGradient(400,50,50,400,50,400);
    g1.addColorStop(0.1,"rgb(255,255,0)");
    g1.addColorStop(0.5,"rgb(255,0,255)");
    g1.addColorStop(1,"rgb(0,255,255)");
    context.fillStyle=g1;
    context.fillRect(0,0,500,500);
}

//线性渐变
function Lineardraw(){
    var g1=context.createLinearGradient(0,0,0,300);
    g1.addColorStop(0,"rgb(255,255,0)");
    g1.addColorStop(1,"rgb(0,255,255)");
    context.fillStyle=g1;
    context.fillRect(0,0,500,500);
    var g2=context.createLinearGradient(0,0,300,0);
    g2.addColorStop(0,"rgba(0,0,255,0.5)");
    g2.addColorStop(1,"rgba(255,0,0,0.5)");
    for(var i= 0;i<=10;i++){
        context.beginPath();
        context.fillStyle=g2;
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fill();
    }
}