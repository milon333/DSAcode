// find the sum of all the numbers to the left and self
const input = [3.2, 5.3, 6.1, 5.2];

function sum(numbers) {

    let sum = 0;
    let result = [];

    for (let num of numbers) {
        sum += num;
        result.push(sum);
    }

    return result;
}

const answer = sum(input);
console.log("answer :", answer)
