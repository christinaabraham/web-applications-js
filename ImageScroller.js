var faveThings = ["https://blznav.akamaized.net/img/games/cards/card-overwatch-7eff92e1257149aa.jpg", "https://cdn.bringatrailer.com/wp-content/uploads/2018/02/5a91e1312a838_114249-940x527.jpg", "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg"];
var index = 0;

update();

onEvent("screen", "keydown", function(event){
 if(event.key == "Left") {
    checkLast();
 }
 
 if(event.key == "Right") {
   checkNext();
 }
});

onEvent("next", "click", function(event) {
  checkNext();
});

onEvent("last", "click", function(event) {
  checkLast();
});

onEvent("add", "click", function(event) {
  insertItem(faveThings, index, getText("input"));
  checkEmpty();
});

onEvent("append", "click", function(event) {
  appendItem(faveThings, getText("input"));
  checkEmpty();
});

onEvent("remove", "click", function(event) {
  removeItem(faveThings, index);
  update();
});

function update() {
  if(index >= 0 && index <= faveThings.length) {
    setImageURL("image_area", faveThings[index]);
    setText("screen_count", (index + 1) + " of " + (faveThings.length));
  }
}

function checkEmpty() {
  if(getText("input") != "") {
    setText("input", "");
    update();
  }
}

function checkNext() {
  if(index >= 0 && index <= faveThings.length) {
    index++;
  }
  playSound("https://studio.code.org/v3/assets/R3xt1BXO0VuQve0HdwClFg/cartoonButton.mp3");
  update();
}

function checkLast() {
  if(index >= 0 && index <= faveThings.length) {
    index--;
    
  }
  playSound("https://studio.code.org/v3/assets/13v2AdelOqxDhJ32C1fnAw/DownSound.mp3");
  update();
}
