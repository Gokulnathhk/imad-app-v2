//counter code
var counter=0;
var button=document.getElementById("counter");

button.onClick=function(){
    //create the request
   
   //capture the response 
   
   //render the request
   counter=counter+1;
   var span=document.getElementById("count");
   span.innerHTML=counter.toString();
   
};
