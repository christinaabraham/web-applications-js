var text = returnText();
var shifts = returnShifts();
var cipher = completeCipher(text, shifts);


function chooseTool() {
  
}


function returnText() {
  var text = getText("enter_txt_input");
  return text;
}

function returnShifts() {
  var shifts = getNumber("num_shifts_input");
  if(shifts > 26) {
    shifts = shifts % 26;
  }
  return shifts;
}


onEvent("caesar_enc_btn", "click", function() {
  console.log(text);
  console.log(shifts);
  console.log(cipher);
  setScreen("caesar_enc_result_screen");
  setText("caesar_enc_text_area", cipher);
});


function completeCipher(text, shifts) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var cipher = "";
  var index, location = 0;
        
  for(var k = 0; k < text.length; k++) {
    if(text.substring(k, k+1).equals(" ")) {
        cipher += " ";
        k++;
    }
            
    index = alphabet.indexOf(text.toLowerCase().substring(k, k+1));
    location = index + shifts; // Possible indeces: 0 - 25
                  
    if(location > 25) {
      cipher += alphabet.substring(location - 26, location - 25);
    } else {
      cipher += alphabet.substring(location, location + 1);
    }  
  }
} 


