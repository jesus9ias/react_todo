var express = require('express');
var app = express();


var html_dir = 'dist/dev';

var options = {
  root: __dirname + '/dist/dev/',
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};

app.use(express.static('dist/dev/'));

app.get('*', function (req, res) {
  res.sendFile('index.html', options);
});

app.listen(3030, function () {
  console.log('TODO APP running on port 3000!');
});
