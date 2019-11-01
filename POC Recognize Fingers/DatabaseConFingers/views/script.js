console.log('hoi');
console.log("LeapJS v" + Leap.version.full);
const socket = io.connect("http://localhost:8000");  

// setInterval(sendFingers,1000)

let fingerextendarray = [];
var controller = new Leap.Controller({enableGestures: true});
controller.loop(function(frame) {
if(frame.hands.length > 0)
    
    {

       
        let hand = frame.hands[0];
        

        
        for (let i = 0; i < hand.fingers.length; i++) {
            fingerextendarray.push(hand.fingers[i].extended)     
        }
        document.getElementById("data").innerHTML = fingerextendarray
        sendFingers();
        fingerextendarray = [];
        
        
    }
    else{

        document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>No hand detected</h1>"
    }
});

function sendFingers(){
    console.log(fingerextendarray);
    socket.emit('fingerarray', fingerextendarray)
}
