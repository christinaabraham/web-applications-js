//var text = returnText("enter_txt_input");
//var shifts = returnShifts();
//var cipher = completeCipher(text, shifts);

var alphabet = "abcdefghijklmnopqrstuvwxyz ";
var inputCaesarEnc = "";
var inputCaesarDec = "";
var shiftsCaesarEnc = 0;



function chooseTool() {
  
}

onEvent("switch", "click", function() {
  setScreen("caesar_dec_screen");
});

onEvent("enter_txt_input", "change", function(event) {
 inputCaesarEnc = getText("enter_txt_input") 
 console.log("Caesar enc input: " + inputCaesarEnc);
});

onEvent("text_input1", "change", function(event) {
 inputCaesarDec = getText("text_input1") 
 console.log("Caesar dec input: " + inputCaesarDec);
});


onEvent("num_shifts_input", "change", function(event) {
  temp = getNumber("num_shifts_input");
  if(temp > 26) {
    temp = temp % 26;
  }
  shiftsCaesarEnc = temp;
  console.log("Caesar enc shifts: " + shiftsCaesarEnc);
});


onEvent("caesar_enc_btn", "click", function() {
  encryptCaesar(inputCaesarEnc, shiftsCaesarEnc);
});

onEvent("button1", "click", function () {
  decryptCaesar(inputCaesarDec);
});

function encryptCaesar(text, shifts) {
  var cipher = "";
  var index, location = 0;
        
  for(var k = 0; k < text.length; k++) {
    if(text.substring(k, k+1) == " ") {
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
  setText("caesar_enc_text_area", cipher);
  setScreen("caesar_enc_result_screen");
} 

function decryptCaesar(text) {
  console.log(text);
  var shifts, location, index = 0;
  var input = text;
  var output = "";

          for(var j = 0; j < 26; j++) {
            shifts = j;
            
            if(shifts < 9) {
                output += " " + (shifts + 1) + ". ";
            } else {
                output += (shifts + 1) + ". ";
            }

            for(var i = 0; i < input.length; i++) {
                if(input.substring(i, i+1) == " ") {
                    output += " ";
                    i++;
                }
                
                index = alphabet.indexOf(input.toLowerCase().substring(i, i+1));
                location = index + shifts;

                if(location > 25) {
                    output += alphabet.substring(location - 26, location - 25);
                } else {
                    output += alphabet.substring(location, location + 1);
                }
            }
            output += "\n";
        }
  //setText("caesar_enc_text_area", cipher);
  //setScreen("caesar_enc_result_screen");
  setText("text_area1", output);
  setScreen("screen2");
  console.log(output);
}


onEvent("label5", "click", function(event) {
  console.log("label5 clicked!");
});
