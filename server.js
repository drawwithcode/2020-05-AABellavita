console.log("node is running");

let express = require("express");

let socket = require("socket.io");

let app = express();

let port = process.env.PORT || 3000

let server = app.listen(port);

app.use(express.static("public"));

let io = socket(server);

io.on("connection", newConnection);

function newConnection(socket) {
	console.log("new connection: " + socket.client.id);

	let clientColor = getRandomColor();

	socket.emit("color", clientColor);

	socket.on("mouse", mouseMessage);

	function mouseMessage(dataReceived) {
		console.log(socket.client.id, dataReceived);
		socket.broadcast.emit("mouseBroadcast", dataReceived);
	}

}

function getRandomColor() {
  var listOfColors = ['#5372A6','#0D2953','#A371A6','#DF4D72','#782741','#6AC6E0','#F2F3B7'];
  var color = '';
  color = listOfColors[Math.floor(Math.random() * Math.floor(7))];
  return color;
}
