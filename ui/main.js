//counter code
var button=document.getElementById('counter');

button.onClick=function(){
    //create the request
    var request=new XMLHttpRequest();
   
   //capture the response 
   request.onreadystatechange= function(){
       if(request.readystate==XMLHttpRequest.DONE){
          //take some actions
           if(request.status==200){
               var counter=request.responseText;
               var span=document.getElementById('count');
               span.innerHTML=counter;
           }
           //else do nothing.
       }  
   };
   
   //render the request
   request.open('GET','http://gokulnathhk.imad.hasura-app.io/counter',true);
   request.send(null);
   
   
};
