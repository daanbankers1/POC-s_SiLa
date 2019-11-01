console.log('hoi');
console.log("LeapJS v" + Leap.version.full);
     

let openclose
var controller = new Leap.Controller({enableGestures: true});
controller.loop(function(frame) {
if(frame.hands.length > 0)

    {
        
        let hand = frame.hands[0];
        console.log(hand);
        document.getElementById('middlefingerdata').innerHTML = hand.fingers[2].direction[0]
        if(!hand.fingers[0].extended && !hand.fingers[1].extended &&hand.fingers[2].direction[0] < 0 && !hand.fingers[3].extended && !hand.fingers[4].extended){
            document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>Fuck You</h1>"
        }
        else if(!hand.fingers[0].extended && hand.fingers[1].extended && hand.fingers[2].extended && !hand.fingers[3].extended && !hand.fingers[4].extended){
            document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>Dikke Vette Peace</h1>"
        }
        else if(hand.fingers[0].extended && !hand.fingers[1].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && !hand.fingers[4].extended){
            document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>Ik vind ghelemal moi</h1>"
        }
        else{
            document.getElementById("data").innerHTML = ""
            for (let i = 0; i < hand.fingers.length; i++) {
                document.getElementById("data").innerHTML += hand.fingers[i].extended + "<br>"
            }
            
        }
    }
    else{
        document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>No hand detected</h1>"
    }
});
