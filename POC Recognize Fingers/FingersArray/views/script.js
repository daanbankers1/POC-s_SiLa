console.log('hoi');
console.log("LeapJS v" + Leap.version.full);
let handtype = "";
let videolink = "";
const socket = io.connect("http://localhost:8000");  

setInterval(sendFingers,1000)

let fingerextendarray = [];
var controller = new Leap.Controller({enableGestures: true});
controller.loop(function(frame) {
if(frame.hands.length > 0)
    
    {
        
        fingerextendarray = [];
       
        let hand = frame.hands[0];
        
        handtype = hand.type;
        
        for (let i = 0; i < hand.fingers.length; i++) {
            fingerextendarray.push(hand.fingers[i].extended)     
        }
        document.getElementById("data").innerHTML = fingerextendarray
        // sendFingers();
        
        
        
    }
    else{

        document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>No hand detected</h1>"
    }
});

function sendFingers(){
    console.log(fingerextendarray);
    socket.emit('fingerarray', fingerextendarray)
    socket.emit('handtype', handtype)
}

socket.on('SignName', function(data){
    console.log(data);
    document.getElementById('middlefingerdata').innerHTML = data;
})

socket.on('Associatie', function(data){
    document.getElementById('associatie').innerHTML = data;
})

socket.on('SignVideo', function(data){
    if(data == 'none'){
        document.getElementById('SignVideo').style.display = 'none';
    }
    else if(videolink != data){
        document.getElementById('SignVideo').style.display = 'block';
        videolink = data;
        document.getElementById('SignVideo').src = data;
        }
    
})