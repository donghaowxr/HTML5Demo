/**
 * Created by donghao on 2015-12-04.
 */

var box1Dive,box2Div,msgDiv,img1;
window.onload=function(){
    box1Dive=document.getElementById("boxDiv");
    box2Div=document.getElementById("box2Div");
    msgDiv=document.getElementById("msgDiv");
    img1=document.getElementById("img1");
    //box1Dive.ondragenter=function(e){
    //    shoObj(e);
    //}

    box1Dive.ondragover=function(e){
        e.preventDefault();//��ֹϵͳĬ���¼�����
    }

    box2Div.ondragover=function(e){
        e.preventDefault();
    }

    img1.ondragstart=function(e){
        e.dataTransfer.setData("imgId","img1");//��ʼ�϶�ͼƬ�ǻ�ȡͼƬ��Ϣ
    }

    box1Dive.ondrop=dropImgHandler;
    box2Div.ondrop=dropImgHandler;
}

function dropImgHandler(e){
    shoObj(e.dataTransfer);//�鿴��קʱ�ķ���
    e.preventDefault();
    var img=document.getElementById(e.dataTransfer.getData("imgId"));
    e.target.appendChild(img);
}

function shoObj(obj){
    var s="";
    for(var k in obj){
        s+=k+":"+obj[k]+"<br/>";
    }
    msgDiv.innerHTML=s;
}