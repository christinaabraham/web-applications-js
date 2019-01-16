var count = 0;
var lives = 3;

onEvent("start_button" || "playAgain", "click", function() {
  setScreen("game_screen");
});
onEvent("nemo", "click", function() {
  setPosition("nemo", randomNumber(50,280), randomNumber(50, 350));
  count++;
  setText("total_score", count);
  
  if(count == 10) {
    setScreen("win_screen");
    setText("score_win", count);
    
  }
});
onEvent("background", "click", function() {
  lives -= 1;
  setText("number_lives", lives);
  
  if(lives === 0) {
    setScreen("lose_screen");
    setText("score_lose", count);
  }
});
onEvent("playAgain", "click", function() {
  setScreen("welcome_screen");
  lives = 0; 
  setText("number_lives", lives);
  count = 0; 
  setText("total_score", count);
});

onEvent("tryAgain_button", "click", function() {
  setScreen("welcome_screen");
  lives = 0; 
  setText("number_lives", lives);
  count = 0; 
  setText("total_score", count);
});
