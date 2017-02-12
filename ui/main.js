console.log('Loaded!');
//adding onclick image property
var img=document.getElementById("dino");

 var marginLeft=0;
 
function moveright(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
var interval=setInterval(moveright,50);
};