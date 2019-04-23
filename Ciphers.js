// Global variables
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabet = "abcdefghijklmnopqrstuvwxyz ";
var inputCaesarEnc = "";
var inputCaesarDec = "";
var shiftsCaesarEnc = 0;
var inputVigenereEnc = "";

// Resets screen elements
function clearScreen() {
  inputCaesarEnc = "";
  setText("enter_txt_input", "");
  
  inputCaesarDec = "";
  setText("text_input6", "");

  shiftsCaesarEnc = 0;
  setText("num_shifts_input", "");
  
  inputVigenereEnc = "";
  setText("text_input2", "");

  updateCaesar();
  updateVigenere();
  setText("caesar_dec_area", "");
}


// Caesar Cipher Encryption - Functions
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
} 

// Updates & refreshes text areas
function updateCaesar() {
  encryptCaesar(inputCaesarEnc, shiftsCaesarEnc);
  decryptCaesar(inputCaesarDec);
}


// Caesar Cipher Encryption - Events
onEvent("return_caesar", "click", function() {
  setScreen("caesar_menu");
  clearScreen();
});

onEvent("refresh", "click", function() {
  updateCaesar();
});

onEvent("enter_txt_input", "change", function(event) {
 inputCaesarEnc = getText("enter_txt_input"); 
 updateCaesar();
});

onEvent("num_shifts_input", "change", function(event) {
  temp = getNumber("num_shifts_input");
  if(temp > 26) {
    temp = temp % 26;
  }
  shiftsCaesarEnc = temp;
  updateCaesar();
});

onEvent("button6", "click", function(event) {
  setScreen("caesar_menu");
  clearScreen();
});

onEvent("label3", "click", function(event) {
  setScreen("caesar_menu");
  clearScreen();
});

onEvent("button23", "click", function(event) {
  setScreen("caesar_enc_screen");
  clearScreen();
});

onEvent("button25", "click", function(event) {
  setScreen("caesar_dec_screen");
  clearScreen();
});

onEvent("button29", "click", function(event) {
  setScreen("main_menu");
  clearScreen();
});

// Caesar Cipher Decryption - Functions
function decryptCaesar(text) {
  var shifts, location, index = 0;
  var input = text;
  var output = "";

  for(var j = 0; j < 26; j++) {
    shifts = j;
    
    // Organizes output numerically
    if(shifts < 9) {
        output += " " + (shifts + 1) + ". ";
    } else {
        output += (shifts + 1) + ". ";
    }
    
    for(var i = 0; i < input.length; i++) {
      // Skips spaces
      if(input.substring(i, i+1) == " ") {
          output += " ";
          i++;
      }
        
      // Shifts alphabet
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
  setText("caesar_dec_area", output);
}


// Caesar Cipher Decryption - Events
onEvent("text_input6", "change", function(event) {
 inputCaesarDec = getText("text_input6") 
 updateCaesar();
});

onEvent("button21", "click", function(event) {
  setScreen("caesar_menu");
});


// Vigenere Cipher Encryption - Functions
function updateVigenere() {
  encryptVigenere(inputVigenereEnc);
}

function encryptVigenere(text){
  var outputArr = [];
  var index = 0;
  var count = 0;
  var check = "";
  var output = "";
  var old = "";
  var anew = "";
  var verify = "";

  for(var j = 0; j < text.length; j++) {
    // Skipes spaces
    if(text.substring(j, j+1) == " ") {
      appendItem(outputArr, " ");
      j++;
    } 
    // Begins creating array
      appendItem(outputArr, text.substring(j, j+1).toLowerCase());
  }

  for(var i = 0; i < text.length; i++) {
    if(text.substring(i, i+1) != " ") {
      index = randomNumber(0, 25 - count);
    
      while(check.includes(alpha[index])){ //
        index = randomNumber(0, 25 - count);
      }
      
      anew = alpha[index];
      console.log("Alpha length: " + alpha.length);
      console.log("Index: " + index);
  
      old = text.substring(i, i+1);
      check += anew;
      //console.log(check);
  
      for(var k = 0; k < text.length; k++) {
        if(outputArr[k] == old && !verify.includes(k)) {
          outputArr[k] = anew;
          verify += k + "_";
        }
      }
      removeItem(alpha, index);
      count++;
    }
  }
  
  //console.log(alpha);
  //console.log(outputArr);
  //console.log("Check: " + check);
  
  for(var a = 0; a < text.length; a++) {
    output += outputArr[a];
  }
  
  console.log(output);
  setText("text_area2", output);
  return output;
}


// Vignere Cipher Encryption - Events
onEvent("text_input2", "change", function(event) {
  inputVigenereEnc = getText("text_input2"); 
  updateVigenere();
});

onEvent("label9", "click", function(event) {
  setScreen("vigenere_enc_screen");
});

onEvent("button8", "click", function(event) {
  setScreen("vigenere_enc_screen");
});

onEvent("button14", "click", function(event) {
  setScreen("main_menu");
});
