function setup() {
	createCanvas(480,270);
}

function draw() {
	background(155, 155, 155);
	ellipseMode(CENTER);
	rectMode(CENTER);

	//Body
	fill(255, 0, 0)
	rect(240, 145, 20, 100);

	//Head
	fill(0, 0, 255);
	ellipse(240,115,60,60);

	//Eyes
	fill(0, 255, 0);
	ellipse(221, 115, 16, 32);
	ellipse(251, 115, 16, 32);

	//Arms
	line(230, 155, 220, 150);
	line(250, 155, 260, 150);
	//Legs
	line(230, 195, 220, 205);
	line(250, 195, 260, 205);
}
