var express = require('express');
var app = express();

// Define root in parent directory.
var root = require('path').resolve(__dirname + '/..');

app.use('/static', express.static(root + '/public'));

app.set('views', root + '/views');
app.engine('.html', require('ejs').renderFile)

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(3000, function () {
  console.log('Serving on port 3000...');
});
