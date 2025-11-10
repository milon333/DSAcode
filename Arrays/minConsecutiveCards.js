const cardsInput = [3,4,2,3,4,7]

/** 
 * @param {number[]} : cards
 * @return {number}
 */
const minimumConsecutiveCards = function(cards) {

    if ( cards.length < 2) return -1;

    let minLength = Infinity;
    const cardMap = new Map();

    for (let right = 0; right < cards.length; right++) {
        const card = cards[right];

        if (cardMap.has(card)) {
            minLength = Math.min(minLength, (right-cardMap.get(card)) + 1);
        }

        cardMap.set(card, right);
    }

    return minLength === Infinity ? -1 : minLength;
}

const answer = minimumConsecutiveCards(cardsInput);
console.log(answer);

/* Important :
   when calculating min length, left pointer not required
   1.  each distance calculation is independent
   2. just tracking the last occurrence and measuring gaps
   3. no window maintenace required
   4. similar logic even if largest distance between 2 duplicates [Math.max]
*/
