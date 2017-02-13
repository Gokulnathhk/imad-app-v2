//counter code

//gonna call the counter variable

//i'm gonna rock at it

var counter=0;
var button=document.getElementById("counter");
button.onClick=function(){
    //request for counter end point.
    //store it correct span variable 
    //render the variable
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
    
};
