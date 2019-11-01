const {ObjectId} = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/SignLanguage";
var http = require('http');
var express = require('express'),
  app = module.exports.app = express();
var server = http.createServer(app);

server.listen(8000);
app.use(express.static('views'))
var io = require('socket.io').listen(server); 


let dataArray = [];
setInterval(test,1000);

app.get('/', function(req,res){
    res.render('index.ejs');
})

var listener = io.listen(server);

    listener.sockets.on('connection', function(socket){
      
        socket.on('fingerarray', function(data){
            // dataArray.push = data;
            console.log(data);
        });
        
 })

 function test(){
    //  console.log(dataArray);
 }