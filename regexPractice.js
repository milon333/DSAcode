// match whole string exactly
let k = "hello".match(/hello/);

// match any single character
"cat".match(/c.t/);  // cat, c@t, c t, cot, c?t

// matches any digit \d ; + is to get all the digits not only first
"hello123!".match(/\d+/)[0];

// matches 1 continuous word character : letters, digits, underscore
//  prints hello_123 - stops at !
"hello_123!Bye?".match(/\w+/);

// space, tab, newline : prints - hello_123 Bye
"hello_123 Bye!".match(/\w+\s\w+/);

// Capital letters means NOT - \D \W \S
"hello_123? Bye!".match(/\S+\s\S+/);
// prints - hello_123? Bye!


/* Quantifiers : How many times
    * = 0 or more
    + = 1 or more
    ? = 0 or 1 time (optional)
    {n} = exactly n times
    {n,} = n or more
    {n,m} = between n & m
*/
"hellllo".match(/hel+o/);
// matches with helo, hello, hellllllllo
"colorr".match(/colou?r/);
// matches : color, colour, above case prints - color [ ignores final r]
const x = "12345".match(/\d{3}/);
// prints - 123


/* Character Sets :
*/
"cat".match(/[cb]at/) // matches cat or bat
"hello!123".match(/[0-9]+/);
// matches all digits - 123

"Hello!123".match(/[a-z]+/); // prints ello

"Hello bro".match(/[a-zA-Z]+/);
// prints Hello : stops at digits or spaces

// Negation - match anything except : ^ inside the brackets
"hello!123".match(/[^a-z]+/); // prints !123
"hello!123".match(/[^0-9]+/); // prints hello!

/* Flags : added after closing /
    g - global, find all matches
    i -  case insesitive
    m - multiline
*/
"Hello hello".match(/hello/gi);
// prints : [ 'Hello', 'hello' ]


// email validation
let a = "abc.123@stream.com"
a.match(/\w+.?\w+@\w+.\w+/);
// proper email validation - universal for all type of emails
a.match(/[\w\.\-\+]+@[\w\.\-]+\.[a-zA-Z]{2,}/);



