/* 
Author: Rodrigo Borges
Date: 2013-02-14
Description: Answer Assignment 2C questions, PROG2700 - Client Side Programming course
*/

// IIFE
(() => {

    // Get card div

    let cardDiv = document.querySelector("#card");
    let bestHand = document.querySelector("#best");
    let htmlOutput = "";
    // let imgUrl = "";

    // declare function to write the logic of the higher hand
    const higherHand = (cardSuits, trueValues) => {

        let result = "";

    // IF statements to define the result (each if statement has the result showing the answer)
        if (cardSuits[0] === cardSuits[4]) {
            if (trueValues[0] === 10 && trueValues[1] === 11 && trueValues[2] === 12 && trueValues[3] === 13 && trueValues[4] === 14) {
                result = "Royal Flush";
            } 
            else if (trueValues[4] - trueValues[0] === 4 && new Set(trueValues).size === 5) {
                result = "Straight Flush";
            } 
            else {
                result = "Flush";
            }
        }
        else if (trueValues[0] === trueValues[3] || trueValues[1] === trueValues[4]) {
            result = "Four of a kind";
        }
        else if (trueValues[0] === trueValues[2] && trueValues[3] === trueValues[4] || trueValues[0] === trueValues[1] && trueValues[2] === trueValues[4]) {
            result = "Full House";
        }
        else if (trueValues[4] - trueValues[0] === 4 && new Set(trueValues).size === 5) {
            result = "Straight";
        }
        else if (trueValues[0] === trueValues[2] || trueValues[1] === trueValues[3] || trueValues[2] === trueValues[4]) {
            result = "Three of a kind";
        }
        else if (trueValues[0] === trueValues[1] && trueValues[2] === trueValues[3] || trueValues[0] === trueValues[1] && trueValues[3] === trueValues[4]
            || trueValues[1] === trueValues[2] && trueValues[3] === trueValues[4]) {
            result = "Two Pairs";
        }
        else if (trueValues[0] === trueValues[1] || trueValues[1] === trueValues[2] || trueValues[2] === trueValues[3] || trueValues[3] === trueValues[4]) {
            result = "One Pair";
        }
        else {
            result = "Higher Card";
        }
        return result;
    }

    // Shuffle Deck and get deck_id
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then((deckOfCards) => deckOfCards.json())
        .then((deckInfo) => {
            const deckId = deckInfo.deck_id;

            // Use deck_id to shuffle 5 cards
            fetch('https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=5')
                .then((handOfCards) => handOfCards.json())
                .then((shuffleCards) => {        

                    // declare arrays
                    let cardSuits = [];
                    let cardValues = [];

                    // forEach loop to get the 5 cards image and to push cards information to arrays
                    shuffleCards.cards.forEach(element => {
                        htmlOutput += "<img src='" + element.image + "'>";
                        cardSuits.push(element.suit);
                        cardValues.push(element.value);
                    }); // end of forEach (5 cards)

                    // display the 5 cards (and testing arrays to see if they are correct)
                    cardDiv.innerHTML = htmlOutput;
                    console.log(cardSuits); // testing
                    console.log(cardValues); // testing

                    // declare valuemap, array to get information from valuemap and variable to show the final result
                    let trueValues = [];
                    const valueMap = {
                        '2': 2,
                        '3': 3,
                        '4': 4,
                        '5': 5,
                        '6': 6,
                        '7': 7,
                        '8': 8,
                        '9': 9,
                        '10': 10,
                        'JACK': 11,
                        'QUEEN': 12,
                        'KING': 13,
                        'ACE': 14,
                    };

                    // for loop to call valuemap and parse to trueValues array
                    for (i = 0; i < cardValues.length; i++) {
                        trueValues[i] = valueMap[cardValues[i]];
                    };

                    // sort both arrays to make IF statements easier
                    trueValues.sort((a,b)=>a-b);
                    cardSuits.sort();

                    // testing sort function
                    console.log(trueValues);
                    console.log(cardSuits);

                    // print the final result
                    bestHand.innerHTML = higherHand(cardSuits, trueValues);
                    
                }); // end of Second fetch
        }); // end of First fetch
})(); // end of IIFE