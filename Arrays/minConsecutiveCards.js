const cardsInput = [3,4,2,3,4,7]

/** 
 * @param {number[]} : cards
 * @return {number}
 */
const minimumConsecutiveCards = function(cards) {

    if ( cards.length < 2) return -1;

    let minLength = cards.length;
    const cardMap = new Map();

    for (let right = 0; right < cards.length; right++) {
        const card = cards[right];

        if (cardMap.has(card)) {
            minLength = Math.min(minLength, (right-cardMap.get(card)) + 1);
        }

        cardMap.set(card, right);
    }

    return minLength === cards.length ? -1 : minLength;
}

const answer = minimumConsecutiveCards(cardsInput);
console.log(answer);

/* Important :
   when calculating min length, left pointer not required
*/
