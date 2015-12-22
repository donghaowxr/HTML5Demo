/**
 * Created by donghao on 2015-12-04.
 */
var imgDiv,msgDiv;
window.onload=function(){
    imgDiv=document.getElementById("imgDiv");
    msgDiv=document.getElementById("msg");
    imgDiv.ondragover=function(e){
        e.preventDefault();
    }

    imgDiv.ondrop=function(e){
        e.preventDefault();
        var f= e.dataTransfer.files[0];
        var fileReader=new FileReader();
        fileReader.readAsDataURL(f);
        fileReader.onload=function(e){
            showObj(e.target);
            imgDiv.innerHTML="<img src='"+fileReader.result+"'>";
        }
    }
}

function showObj(obj){
    var s="";
    for(var k in obj){
        s+=k+":"+obj[k]+"<br/>";
    }
    msgDiv.innerHTML=s;
}