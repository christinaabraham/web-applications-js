setActiveCanvas("canvas");
setFillColor("rgba(0, 0, 0, 0.2)");
setStrokeColor("rgba(0, 0, 0, 0)");
var eventList = []; 

onEvent("canvas", "mousemove", function(event){
  if(event.shiftKey == true) {
    appendItem(eventList, event);
    circle(event.offsetX, event.offsetY, dotRadius(event.movementX, event.movementY));
  }
   // console.log(event);
});

onEvent("delete", "click", function(event) {
  clearCanvas();
  eventList = [];
});

onEvent("random", "click", function(event) {
  clearCanvas();
  for(var i = 0; i < eventList.length; i++) {
    circle(eventList[i].offsetX, eventList[i].offsetY, randomNumber(1,10));
  }
});

onEvent("original", "click", function() {
  clearCanvas();
  for(var i = 0; i < eventList.length; i++) {
    circle(eventList[i].offsetX, eventList[i].offsetY, dotRadius(eventList[i].movementX, eventList[i].movementY));
  }
});

onEvent("sprayPaint", "click", function() {
  clearCanvas();
  var index = 0;
  var colors = ["green", "red", "blue", "pink", "yellow", "orange", "purple"];
  for(var i = 0; i < eventList.length; i++) {
    for(var j = 0; j < 5; j++) {
      setStrokeColor(colors[randomNumber(0, 6)]);
      circle(eventList[i].offsetX + randomNumber(-3, 3), eventList[i].offsetY + randomNumber(-3, 3), 1);
    }
  }
  setStrokeColor("rgba(0, 0, 0, 0)");
  setFillColor("rgba(0, 0, 0, 0.2)");
});

onEvent("etch", "click", function(event) {
  clearCanvas();
  for(var i = 0; i < eventList.length - 10; i++) {
    setStrokeColor("black");
    line(eventList[i].offsetX, eventList[i].offsetY, eventList[i + 10].offsetX, eventList[i + 10].offsetY);
  }
});

function dotRadius(changeX, changeY) {
  var speed = Math.abs(changeX) + Math.abs(changeY);
  var output = 1 + 5/speed;
  return output;
}
