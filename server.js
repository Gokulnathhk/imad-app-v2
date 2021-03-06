var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
    title:'article one|gokulnath',
    heading:'Article one',
    date:'9th feb',
    content:'<p>This text appear in blue color.</p>'
},
 'article-two':{
    title:'article two|gokulnath',
    heading:'article two',
    date:'9th feb',
    content:'<p>this is article two about the concept of artificial intelligence</p>'
},
 'article-three':{
    article:'article three|gokulnath',
    heading:'article 3',
    date:'feb 14th',
    content:'<p>this is thrid rticle </p>'
}
};
function createTemplate(data){
  var title=data.title;
  var heading=data.heading;
  var date=data.date;
  var content=data.content;
  var htmlTemplate=`<html>
 <head>
    <title>
      ${title} 
    </title>
    <meta name="viewport" content="width-device-width,initial scale=1"/>
    <link href="ui/style.css" rel="stylesheet"/>
 </head>
 <body>
    <div><a href='/'>home</a></div> 
<div class=container>
    <div>
       <h2>${heading}</h2>
    </div>
    <hr/>
    <div>
       ${date}
    </div>
    <div>
       ${content}
    </div>
 </div>
 </body>
 </html>`;
 return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names=[];
app.get('/submit-name',function(req,res){//URL:/submit-name?name=XXXX
    //get the name from the request
    var name=req.query.name;
    names.push(name);
    
    //JSON:java script object notation
    res.send(JSON.stringify(names));//TODO
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

 
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/style.css',function(req,res){
    res.sendFile(path.join(__dirname,'ui','style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
