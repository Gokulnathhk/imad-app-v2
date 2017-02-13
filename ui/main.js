//counter code

var button=document.getElementById("counter");

button.onClick=function(){
    //create the request
     var request=new XMLHttpRequest();
     
     //capture the response
     request.onreadystatechange=function(){
         if(request.readystate==XMLHttprequest.DONE){
            //take some actions
            if(request.status==200){
            counter=request.responseText;
            var span=document.getElementById("counter");
            span.innerHTML=count.toString();
            }
     
            }
            //not done yet
         };
   
    //make the request
    request.open(GET,"http://gokulnathhk.imad.hasura-app.io",true);
    request.send(null);
};
