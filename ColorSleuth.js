var randButtonId;
var currentPlayer = 1;
var p1Score = 0;
var p2Score = 0;
  
if(p1Score >= 10) {
  setScreen("gameOver_screen");
  showElement("player1Win_label");
}

if(p2Score >= 10) {
  setScreen("gameOver_screen");
  showElement("player2Win_label");
}
  onEvent("button1", "click", function(){
      checkCorrect("button1");
  });
  
    onEvent("button2", "click", function(){
      checkCorrect("button2");
  });
  
    onEvent("button3", "click", function(){
      checkCorrect("button3");
  });
  
    onEvent("button4", "click", function(){
      checkCorrect("button4");
  });


 
 function switchPlayer() {
     if(currentPlayer ==1 ){
         currentPlayer = 2;
         hideElement("player1_highlight");
         showElement("player2_highlight");
     } else {
         currentPlayer = 1;
         hideElement("player2_highlight");
         showElement("player1_highlight");
     }
     console.log("Current player is: "+ currentPlayer);
 }
 
function checkCorrect(buttonId) {
    setBoard();
  
    console.log("Checking: " + buttonId);
  
     if( buttonId == randButtonId ) {
        console.log("You got it right!");
        updateScoreBy(1);
    } else {
        console.log("WRONG, correct one is: " + randButtonId);
        updateScoreBy(-3);
    }
    
  switchPlayer();
}
 function updateScoreBy(amount){
     if(currentPlayer == 1){
         p1Score += amount;
        setText("score1_label", p1Score);

     } else {
         p2Score += amount;
          setText("score2_label", p2Score);

     }
     console.log("P1 score: " + p1Score);
     console.log("P2 score: " + p2Score);
 }
 
function setBoard() {
  var r = randomNumber(0, 235);
  var g = randomNumber(0, 235);
  var b = randomNumber(0, 235);
  var a = 100;
  var color = rgb(r, g, b, a);

  setProperty("button1", "background-color", color);
  setProperty("button2", "background-color", color);
  setProperty("button3", "background-color", color);
  setProperty("button4", "background-color", color);
  
  var diffColor = rgb(r + 20, g + 20, b + 20, a);
  randButtonId = "button" + randomNumber(1,4);   // create a random button Id
  setProperty(randButtonId, "background-color", diffColor);  // set its color to diffColor
  
}
