"use strict"

const CARDS_BASE_URL = 'http://deckofcardsapi.com/api/deck';

// async function oneCardFromNewDeck() {
//     const response = await axios.get(`${CARDS_BASE_URL}/new/draw`);

//     let card = response.data.cards[0];

//     console.log(card.value + " of " + card.suit);
// }

// async function twoCardsFromSameDeck() {
//     const response1 = await axios.get(`${CARDS_BASE_URL}/new/draw`);

//     const deckId = response1.data.deckId;

//     const response2 = await axios.get(`${CARDS_BASE_URL}/${deckId}/draw`);

//     const card1 = response1.data.cards[0];
//     const card2 = response2.data.cards[0];

//     console.log(`${card1.value} of ${card1.suit}, ${card2.value} of ${card2.suit}`)
// }


const $cardStack = $("#card-stack");
const $cardButton = $("#card-button");
const $document = $(document)

let deckId;
let zIndex = 0;

// Gets new deck from API and sets deckId
async function getNewDeck() {
    const response = await axios.get(`${CARDS_BASE_URL}/new/shuffle`);

    deckId = response.data.deck_id;
}

// Gets 1 card from deck of deckId
async function dealCard() {
    const response = await axios.get(`${CARDS_BASE_URL}/${deckId}/draw`);

    let card = response.data.cards[0];

    showCard(card);
}

// Appends image of card to DOM
function showCard(card) {
    let degrees = Math.random() * 360;
    let $card = $(`<img src=${card.image} style='z-index: ${zIndex}; position: absolute; transform: rotate(${degrees}deg)'>`);
    $cardStack.append($card);
    zIndex++
}


$document.ready(getNewDeck);

$cardButton.on("click", dealCard)