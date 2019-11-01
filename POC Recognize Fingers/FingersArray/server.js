const {ObjectId} = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/SignLanguage";
var http = require('http');
var express = require('express'),
  app = module.exports.app = express();
var server = http.createServer(app);

let dataArray = [];

server.listen(8000);
app.use(express.static('views'))
var io = require('socket.io').listen(server); 

let SignName = "";
let handtype = "";


setInterval(checkinDB, 1000);
setInterval(checkAssociation,1000);

app.get('/', function(req,res){
    res.render('index.ejs');
})

var listener = io.listen(server);

    listener.sockets.on('connection', function(socket){
      
        socket.on('fingerarray', function(data){
            // console.log(data);
            dataArray = data;
            
        });

        socket.on('handtype', function(data){
          handtype = data;
        })

       
        
 })

    io.on('connection', function(socket){
        console.log('a user connected');
      });


function checkinDB(){
        console.log(dataArray);
        MongoClient.connect(url, function(err, db) {
            //error handling
            if (err) throw err;
            //Database aanroepen
            var dbo = db.db("SignLanguage");
            //Dingen ophalen uit de database tabel
            dbo.collection("Signs").find({extended : dataArray}).toArray(function(err, TheSign) {
            //error handling
              if (err) throw err;
            //Ideeën weergeven ter controle
             if(TheSign != ""){
                 console.log(TheSign[0].name);
                 SignName = TheSign[0].name;
                 io.emit('SignName', TheSign[0].name)
                                   
                
             }   
             else{
              io.emit('SignName', 'none')
              SignName = "";
             }
             //Idee renderen  
             
             
        })
        
        
})
}

function checkAssociation(){
  MongoClient.connect(url, function(err, db) {
    //error handling
    if (err) throw err;
    //Database aanroepen
  var dbo = db.db("SignLanguage");
  //GebaarSuggestie

  dbo.collection("GebaarAssociatie").find({ handvorm: [SignName, handtype] }).toArray(function(err, Association) {
    //error handling
      if (err) throw err;
    //Ideeën weergeven ter controle

     if(Association != ''){
         io.emit('Associatie', Association[0].Gebaar)
      console.log(Association[0].Gebaar)
      io.emit('SignVideo', Association[0].video); 
     }   
     else{
       console.log('none');
      io.emit('Associatie', 'none')
      io.emit('SignVideo', 'none'); 
     }
    //  Idee renderen  
     
     
})
  })
}