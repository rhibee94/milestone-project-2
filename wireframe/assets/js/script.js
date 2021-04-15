document.getElementById("game").style.visibility = "hidden"; 
$(".start-game").click(function(){
    let input = "<form><input placeholder='Enter your name'/><form>"
    let nameField = document.getElementById("enter-name")
    nameField.appendChild(input)
})

let card = document.getElementsByClassName("card");
let cards = [...card];
for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", displayCard);
};
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const deck = document.querySelector(".deck");
function startGame(){
   var shuffledCards = shuffle(cards);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
   }
}