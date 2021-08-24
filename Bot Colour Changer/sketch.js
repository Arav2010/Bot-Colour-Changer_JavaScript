function setup()
{
	createCanvas(900, 900);
	noStroke();
	colorMode(HSL, 1);
}


function draw()
{
	if (frameCount % 50 === 0) {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				var start_x = i * 300;
				var start_y = j* 300;
	
				// background
				fill(random(), random(), .5)
				rect(start_x, start_y, 300, 300);
	
				//head
				fill(random(), random(0, 0.7), .8);
				rect(start_x + 40, start_y + 50, 218, 202, 100, 100, 80, 80);
				
				fill(random(), random(0, 0.7), .1);
				rect(start_x + 44, start_y + 100, 210, 150, 70, 70, 100, 100);
				
				fill(random(), 1, .55);
        // should it have a funny face?
				if (round(random() * 2) % 2 === 0) {
					textFont("Courier");
					textSize(80);
					text("ᵔᴥᵔ", start_x + 83, start_y + 200);   
				} else {
					ellipse(start_x + 115, start_y + 164, 30, 70);
					ellipse(start_x + 185, start_y + 164, 30, 70);    
				}
	
			}
		}
	}
}