function demoDrawLine() {
    var canvas = document.getElementById('game_canvas');
    var ctx = canvas.getContext('2d');
    
    var demo_iterations = 10000, demo_delay = 20;
    var demo_x = 30, demo_y = 30, demo_v = 4, demo_ang = 45;
  	
  	var demo_bool_right_key = false;
  	var demo_bool_left_key = false;
  
    document.addEventListener("keydown", function(event) {
      var rot = 0;
      if(event.keyCode == 39) {
        demo_bool_right_key = true;
      }
      if(event.keyCode == 37) {
        demo_bool_left_key = true;
      }
    });
      
    document.addEventListener("keyup", function(event) {
      if(event.keyCode == 39) {
        demo_bool_right_key = false;
      }
      if(event.keyCode == 37) {
        demo_bool_left_key = false;
      }
    });
  	
  
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    
    function demoIteration() {
    	if(demo_iterations-- > 0) {
        var rot = 0;
        if(demo_bool_right_key) {
          rot = (Math.PI/30);
        }
        if(demo_bool_left_key) {
         	rot = -(Math.PI/30); 
        }
        demo_ang += rot;
      	demo_ang %= (2*Math.PI);
    		ctx.moveTo(demo_x,demo_y);
        demo_x += demo_v * Math.cos(demo_ang);
        demo_y += demo_v * Math.sin(demo_ang);
       	ctx.lineTo(demo_x,demo_y); 
        ctx.stroke();
        setTimeout(demoIteration, demo_delay);
      }
    };
    demoIteration();
}
  