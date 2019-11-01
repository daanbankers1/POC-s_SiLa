console.log('hoi');
console.log("LeapJS v" + Leap.version.full);
let tipPosition = "";
let pipPosition = "";
let mcpPosition = "";
let direction = "";
let dipPosition ="";
let carpPosition = "";  

setInterval(update, 1000);

let openclose
var controller = new Leap.Controller({enableGestures: true});
controller.loop(function(frame) {
if(frame.hands.length > 0)

    {
        
        let hand = frame.hands[0];
        console.log(hand);
        tipPosition = hand.fingers[1].tipPosition
        pipPosition = hand.fingers[1].pipPosition
        mcpPosition = hand.fingers[1].mcpPosition
        direction = hand.fingers[1].direction;
        dipPosition = hand.fingers[1].dipPosition
        carpPosition = hand.fingers[1].carpPosition
        
        document.getElementById('data').innerHTML = "<h2>Wijsvinger: " +hand.pointables[1].extended+"<br> Middelvinger: "+hand.pointables[2].extended+"<br>Ringvinger: "+hand.pointables[3].extended+"<br>Pink: "+hand.pointables[4].extended+"</h2>";
    }
    else{
        document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>No hand detected</h1>"
    }
});


function update(){
    document.getElementById('handdata').innerHTML = "tipPosition:<br>"+tipPosition+"<br>pipPosition:<br>"+pipPosition+"<br>mcpPosition<br>"+mcpPosition+"<br>Direction:<br>"+direction+"<br>dipPosition:<br>"+dipPosition+"<br>carPosition<br>"+carpPosition;

}