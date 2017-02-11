var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
    title:'article one|tanmai gopal',
    heading:'Article one',
    date:'9th feb',
    content:'<p>This text will appear in blue color.</p>'
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

app.get('/articleName',function(req,res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
