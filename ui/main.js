console.log('Loaded!');
//alert box
alert("hi! i'm gokulnath");

//adding onclick image property
var img=document.getElementById("dino");


function moveright(){
    var marginLeft=0;
    marginLeft=marginleft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
var interval=setInterval(moveright,100);
};