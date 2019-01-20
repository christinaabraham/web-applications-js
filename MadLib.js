onEvent("next", "click", function(){
  setScreen("screen2");

  var w1 = getText("noun_in");
  w1 = w1.toLowerCase();
  var w2 = getText("nounPlural_in");
  w2 = w2.toLowerCase();
  var w3 = getText("noun2_in");
  w3 = w3.toLowerCase();
  var w4 = getText("nounPlural_in");
  w4 = w4.toLowerCase();
  var w5 = getText("place_in");
  w5 = w5.toLowerCase();
  var w6 = getText("adj_in");
  w6 = w6.toUpperCase();
  var w7 = getText("noun3_in");
  w7 = w7.toLowerCase();
  
  var li1 = "Be kind to your " + (w1) + "-footed " + (w2) + "\n";
  var li2 = "For a duck may be somebody's " + (w3) + "\n";
  var li3 = "Be kind to your " + (w4) + " in the " + (w5) + "\n\n";
  var li4 = "Where the weather is always " + (w6) + "\n";
  
  var li5 = "You may think that this is the " + (w7) + "\n";
  var li6 = "Well it is.";
  
  var output = li1 + li2 + li3 + li4 + li5 + li6;
  setText("text_area", output);

});

onEvent("playAgain", "click", function() {
  setScreen("screen1");
  
  setText("noun_in", "");
  setText("nounPlural_in", "");
  setText("noun2_in", "");
  setText("adj_in", "");
  setText("place_in", "");
  setText("noun3_in", "");

});
