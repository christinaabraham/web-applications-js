onEvent("begin", "click", function(event){
  setScreen("screen");
});

onEvent("wumpuz", "click", function(event){
  setPosition("wumpuz", randomNumber(0, 320), randomNumber(0, 450));
});

onEvent("background", "click", function(event) {
  console.log("Screen clicked!");
  setScreen("lose");
});

onEvent("startOver", "click", function(event) {
  setScreen("screen");
});
