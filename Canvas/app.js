/**
 * Created by donghao on 2015-12-04.
 */
var CANVAS_WIDTH=600,CANVAS_HEIGHT=700;
var myCanvas,context;
window.onload=function(){
    createCanvas();
    //createRect();
    //drawImage();
}

function createCanvas(){
    document.body.innerHTML="<canvas id='myCanvas' width='"+CANVAS_WIDTH+"px' height='"+CANVAS_HEIGHT+"px'>"
    myCanvas=document.getElementById("myCanvas");
    context=myCanvas.getContext('2d');
    //draw("myCanvas");
    //movetoandlineto();
    bezier();
}

//±´Èû¶ûÇúÏß
function bezier(){
    context.fillStyle="#eeeeef";
    context.fillRect(0,0,300,400);
    var dx=150;
    var dy=150;
    var s=100;
    context.beginPath();
    context.fillStyle="rgb(100,255,100)";
    context.strokeStyle="rgb(0,0,100)";
    //var x=Math.sin(0);
    //var y=Math.cos(0);
    var dig=Math.PI/15*11;
    context.moveTo(dx,dy);
    for(var i=0;i<30;i++){
        var x=Math.sin(i*dig);
        var y=Math.cos(i*dig);
        context.bezierCurveTo(dx+x*s,dy+y*s-100,dx+x*s+100,dy+y*s,dx+x*s,dy+y*s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}

function movetoandlineto(){
    context.fillStyle="#eeeeef";
    context.fillRect(0,0,300,400);
    var dx=150;
    var dy=150;
    var s=100;
    context.beginPath();
    context.fillStyle="rgb(100,255,100)";
    context.strokeStyle="reg(0,0,100)";
    //var x=Math.sin(0);
    //var y=Math.cos(0);
    var dig=Math.PI/15*11;
    for(var i=0;i<30;i++){
        var x=Math.sin(i*dig);
        var y=Math.cos(i*dig);
        context.lineTo(dx+x*s,dy+y*s);
    }
    context.closePath();
    context.fill();
    context.stroke();
}

function draw(id){
    context.fillStyle="#eeeeef";
    context.fillRect(0,0,600,700);
    for(var i=0;i<=10;i++){
        context.beginPath();
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fillStyle="rgba(255,0,0,0.25)";
        context.fill();
    }
}

function createRect(){
    context.fillStyle="red";
    //context.rotate(45);//Ðý×ª
    //context.translate(200,200);//ÒÆ¶¯
    context.scale(2,0.5);//Ëõ·Å
    context.fillRect(0,0,200,200);
}

function drawImage(){
    var img=new Image();
    img.onload=function(){
        context.drawImage(img,0,0);
    }
    img.src="1.jpg";
}