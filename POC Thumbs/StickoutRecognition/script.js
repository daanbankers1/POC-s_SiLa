console.log('hoi');
console.log("LeapJS v" + Leap.version.full);
        
        let openclose
        var controller = new Leap.Controller({enableGestures: true});
      controller.loop(function(frame) {
        if(frame.hands.length > 0)

            {
                
                let hand = frame.hands[0];
               
                document.getElementById("thumb").innerHTML = hand.thumb.direction[0]
               
                if(hand.grabStrength == 1 && hand.thumb.direction[0] > 0.75){
                    document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>Thumb Out</h1>"
                }
                else if(hand.grabStrength == 0){
                    document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>Hand is Open</h1>"
                }
                else if(hand.grabStrength == 1 && hand.thumb.direction[1] < 0.75){
                    document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>Thumb in</h1>"
                }

            }
            else{
                document.getElementById("data").innerHTML = "<h1 style='font-size:80px;'>No hand detected</h1>"
            }
        });
