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

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit');
submit.onClick=function(){
  //make a request to the server amnd the current entered name
 
  
  //capture a list of names and render the names
  var names=['name1','name2','name3'];
  var list='';
  for(var i=0;i<.names.length;i++){
      list+=<li>+names[i]+</li>;
  }
  var ul=document.getElementById('nameslist');
  ul.innerHTML=list;
};
