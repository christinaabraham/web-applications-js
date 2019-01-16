var count = 0;

onEvent("clickHere", "click", function(event){
  setScreen("game");
});

onEvent("wumpuz", "click", function(event){
  setPosition("wumpuz", randomNumber(24, 295), randomNumber(24, 416));
  count = count + 1;
  playSound("sound://category_digital/jump_2.mp3", false);
  
});

onEvent("background", "click", function(event) {
  console.log("Screen clicked!");
  setScreen("lose");
});

onEvent("startOver", "click", function(event) {
  setScreen("game");
});

onEvent("mainMenu", "click", function(event) {
  setScreen("default");
});

onEvent("return", "click", function(event) {
  setScreen("default");
});

if(count > 10) {
  setScreen("s2");
  console.print(count);
}
