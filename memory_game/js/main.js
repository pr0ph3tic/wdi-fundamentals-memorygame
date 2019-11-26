console.log("Up and running!");



var cards = [ {rank:"queen", suit:"hearts", cardImage:"images/queen-of-hearts.png"},{rank:"queen", suit:"diamonds", cardImage:"images/queen-of-diamonds.png"},{rank:"king", suit:"hearts", cardImage:"images/king-of-hearts.png"},{rank:"king", suit:"diamonds", cardImage:"images/king-of-diamonds.png"}];


var cardsInPlay =[];

function checkforMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
}
}

function flipCard() {

var cardId = this.getAttribute('data-id')

  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {

  if (cardsInPlay[0] === cardsInPlay[1])
    {alert("You found a match!")}

   else if(cardsInPlay[0] !== cardsInPlay[1])
    {alert("Sorry, try again.")}
  return flipCard;
}



 console.log("User flipped " + cards[cardId].rank)
  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suit)

  checkforMatch();
 //cards[cardId] references the entire  object in the cards array
 //cards[cardId].ranks checks within the obj.rank
}


function createBoard() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }
}

function pageReset() {
  document.getElementById('reset-button');
}



createBoard();

pageReset();
