console.log("LeapJS v" + Leap.version.full);
        
        let openclose
        var controller = new Leap.Controller({enableGestures: true});
      controller.loop(function(frame) {
        if(frame.hands.length > 0)
            {
                var hand = frame.hands[0];
                var hand2 = frame.hands[1];
                if(hand2 != undefined){
                if(hand.grabStrength == 0 && hand2.grabStrength == 0){
                    document.getElementById('main').innerHTML = "<h1>" +hand.type+ ": Opened</h1>";

                    if(hand2 != undefined){
                    document.getElementById('main').innerHTML += "<h1>" +hand2.type+ ": Opened</h1>";

                    }
                }
                else if(hand.grabStrength == 1 && hand2.grabStrength == 1){
                    document.getElementById('main').innerHTML = "<h1>" +hand.type+ ": Closed</h1>";
                if(hand2 != undefined){
                    document.getElementById('main').innerHTML += "<h1>" +hand2.type+ ": Closed</h1>";

                    }
                }

                else if(hand.grabStrength == 0 && hand2.grabStrength == 1){
                    document.getElementById('main').innerHTML = "<h1>" +hand.type+ ": Opened</h1>";

                    if(hand2 != undefined){
                    document.getElementById('main').innerHTML += "<h1>" +hand2.type+ ": Closed</h1>";

                    }
                }

                else if(hand.grabStrength == 1 && hand2.grabStrength == 0){
                    document.getElementById('main').innerHTML = "<h1>" +hand.type+ ": Closed</h1>";

                    if(hand2 != undefined){
                    document.getElementById('main').innerHTML += "<h1>" +hand2.type+ ": Opened</h1>";

                    }
                }
            }
            }
      });
