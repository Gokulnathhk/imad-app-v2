var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
    title:'article one|tanmai gopal',
    heading:'Article-one',
    date:'9th feb',
    content:`
            <p>This text will appear in blue color.This text will appear in blue color.This text will appear in blue color.This text will appear in blue color.This text will appear in blue color.This text will appear in blue color.This text will appear in blue color.This text will appear in blue color.</p>
            <p>This text will appear in green color.This text will appear in green color.This text will appear in green color.This text will appear in green color.This text will appear in green color.This text will appear in green color.This text will appear in green color.This text will appear in green color.</p>
            <p>This text will appear in red color.This text will appear in red color.This text will appear in red color.This text will appear in red color.This text will appear in red color.This text will appear in red color.This text will appear in red color.This text will/p>
    `
};
function createTemplate(data){
  var title=data.title;
  var heading=data.heading;
  var date=data.date;
  var content=data.content;
  var htmlTemplate=`<html>
 <head>
    <title>${title}</title>
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

app.get('/article-one',function(req,res){
   res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
    res.send('articles two files served here');
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
