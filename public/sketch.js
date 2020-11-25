let socket = io();
let myColor = "white";
let slider;
socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);

function preload(){
	myStitch = loadImage("assets/Stitch.png");
	myStitchC = loadImage("assets/StitchColor.png");
}

function setColor(assignedColor) {
	myColor = assignedColor;
}

function newConnection() {
	console.log("your id: " + socket.id);
}

function drawOtherMouse(data) {
	push();
	fill(data.color);
	noStroke();
	ellipse(data.x, data.y, data.weight);
	pop();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("white");
	imageMode(CENTER);
	image(myStitch, width / 2, height / 2, 582, 800);
	image(myStitchC, width / 2+550, height / 2, 291, 400);

	slider = createSlider(0, 50, 15, 2);
	slider.style('width', '170px');
   slider.position(width / 2-550-86, height / 2-76);

}

function draw() {
	myWeight = slider.value();

	push();
	strokeWeight(4);
	fill('#5372A6');
	rectMode(CENTER);
	rect(width / 2-550, height / 2, 250, 400, 35);
	fill('#FFFFFF');
	rect(width / 2-550, height / 2-65, 185, 35, 35);
	pop();

	push();
	fill('white');
	textFont('Quicksand');
	textAlign(CENTER);
	textSize(20);
	text("Pick colors below.\nUse the slider to\nchange weight.", width/2-550, height/2-155);
	pop();

	push();
	strokeWeight(4);
	fill('#6AC6E0');
	if (myColor == '#6AC6E0') {
		stroke(255);
	} else {
		stroke(0);
	}
	ellipse(width / 2-550-75, height / 2, 35);
	fill('#5372A6');
	if (myColor == '#5372A6') {
		stroke(255);
	} else {
		stroke(0);
	}
	ellipse(width / 2-550, height / 2, 35);
	fill('#0D2953');
	if (myColor == '#0D2953') {
		stroke(255);
	} else {
		stroke(0);
	}
	ellipse(width / 2-550+75, height / 2, 35);
	fill('#A371A6');
	if (myColor == '#A371A6') {
		stroke(255);
	} else {
		stroke(0);
	}
	ellipse(width / 2-550-75, height / 2+75, 35);
	fill('#DF4D72');
	if (myColor == '#DF4D72') {
		stroke(255);
	} else {
		stroke(0);
	}
	ellipse(width / 2-550, height / 2+75, 35);
	fill('#782741');
	if (myColor == '#782741') {
		stroke(255);
	} else {
		stroke(0);
	}
	ellipse(width / 2-550+75, height / 2+75, 35);
	fill('#F2F3B7');
	if (myColor == '#F2F3B7') {
		stroke(255);
	} else {
		stroke(0);
	}
	ellipse(width / 2-550-75, height / 2+150, 35);
	fill('#FFFFFF');
	if (myColor == '#FFFFFF') {
		stroke(255);
	} else {
		stroke(0);
	}
	ellipse(width / 2-550, height / 2+150, 35);
	fill('#000000');
	if (myColor == '#000000') {
		stroke(255);
	} else {
		stroke(0);
	}
	ellipse(width / 2-550+75, height / 2+150, 35);
	pop();

	if (mouseIsPressed == true) {
		if (mouseX > width/2-550-17-75 && mouseX < width/2-550+17-75 && mouseY > height/2-17 && mouseY < height/2+17) {
			console.log('siamo qui')
			myColor = '#6AC6E0';
		} else if (mouseX > width/2-550-17 && mouseX < width/2-550+17 && mouseY > height/2-17 && mouseY < height/2+17) {
			myColor = '#5372A6';
		} else if (mouseX > width/2-550-17+75 && mouseX < width/2-550+17+75 && mouseY > height/2-17 && mouseY < height/2+17) {
			myColor = '#0D2953';
		} else if (mouseX > width/2-550-17-75 && mouseX < width/2-550+17-75 && mouseY > height/2-17+75 && mouseY < height/2+17+75) {
			myColor = '#A371A6';
		} else if (mouseX > width/2-550-17 && mouseX < width/2-550+17 && mouseY > height/2-17+75 && mouseY < height/2+17+75) {
			myColor = '#DF4D72';
		} else if (mouseX > width/2-550-17+75 && mouseX < width/2-550+17+75 && mouseY > height/2-17+75 && mouseY < height/2+17+75) {
			myColor = '#782741';
		} else if (mouseX > width/2-550-17-75 && mouseX < width/2-550+17-75 && mouseY > height/2-17+150 && mouseY < height/2+17+150) {
			myColor = '#F2F3B7';
		} else if (mouseX > width/2-550-17 && mouseX < width/2-550+17 && mouseY > height/2-17+150 && mouseY < height/2+17+150) {
			myColor = '#FFFFFF';
		} else if (mouseX > width/2-550-17+75 && mouseX < width/2-550+17+75 && mouseY > height/2-17+150 && mouseY < height/2+17+150) {
			myColor = '#000000';
		}
	}
}

function mouseDragged() {582, 800
	if (mouseX > width/2 - 291 && mouseX < width/2 + 291 && mouseY > height/2 - 400 && mouseY < height/2 + 400) {
		push();
		fill(myColor);
		noStroke();
		ellipse(mouseX, mouseY, myWeight);
		pop();
		let message = {
			x: mouseX,
			y: mouseY,
			color: myColor,
			weight: myWeight,
		};
		socket.emit("mouse", message);
	}
}
