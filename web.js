var express = require('express');
var fs = require('fs');
var Buffer = require('buffer');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var index_buffer = new Buffer();
    index_buffer = fs.readFileSync('index.html');
    response.send(Buffer.toString(index_buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
