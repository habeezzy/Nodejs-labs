var express = require("express");
var app = express();
var tasks = require("./taskInfo.js");
var routes = require("./routes.js");

app.use("/", routes);

app.use(express.static(__dirname + "/public"));


var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("server is up and running");
  console.log(tasks);
});

// console.log(tasks.info[1]);
// app.createServer(onRequest).listen(3000);
//
// function onRequest (request, response) {
//         response.writeHead(200, {"Content-type": "text/plain"});
//         response.write(tasks.info[Math.floor(Math.random() * tasks.info.length)]);
//         response.end();
// }
