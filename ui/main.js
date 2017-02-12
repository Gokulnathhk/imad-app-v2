console.log('Loaded!');
//alert box
alert("hi! i'm gokulnath");

//adding onclick image property
var img=document.getElementById("dino");
var marginleft=0;

function moveright(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function(){
var interval=setInterval(moveright,100);
};