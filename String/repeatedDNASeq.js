const dna = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";


/**
 * @param {string} s
 * @return {string[]}
 */
const repeatedDNASequences = function(s) {
    if (s.length < 10) return [];
    
    const seen = new Set();
    const repeated = new Set();
    
    // Extract all 10-character sequences
    for (let i = 0; i <= s.length - 10; i++) {
        const sequence = s.substring(i, i + 10);
        
        if (seen.has(sequence)) {
            repeated.add(sequence);
        } else {
            seen.add(sequence);
        }
    }
    
    return Array.from(repeated);
    // can also use [...repeated] to convert set to array
}

const answer = repeatedDNASequences(dna);
console.log("answer: " + answer);
