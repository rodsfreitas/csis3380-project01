/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
    {
        quote: 'Talent hits a target no one else can hit; Genius hits a target no one else can see.',
        source: 'Arthur Schopenhauer',
    },
    {
        quote: 'There are two different types of people in the world, those who want to know, and those who want to believe.',
        source: 'Friedrich Nietzsche'
    },
    {
        quote: 'I can always choose, but I ought to know that if I do not choose, I\n' +
            'am still choosing.',
        source: 'Jean-Paul Sartre',
        year: 2012,
        citation: 'The Philosophy of Existentialism: Selected Essays'
    },
    {
        quote: 'I can calculate the motion of heavenly bodies, but not the madness of people.',
        source: 'Isaac Newton',
        year: 2011,
        citation: 'Proust Was a Neuroscientist'
    },
    {
        quote: 'Plato is my friend, Aristotle is my friend, but my greatest friend is truth.',
        source: 'Isaac Newton',
        year: 1664,
        citation: 'Certain Philosophical Questions'
    }
]
/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
    const index = Math.floor(Math.random() * (quotes.length));
    return quotes[index];
}

/***
 * `printQuote` function
***/
const printQuote = () => {
    const quote = getRandomQuote()
    const elements = `
        <p class="quote">${quote.quote}</p>
        <p class="source">
            ${quote.source}
            ${quote.citation ? `<span class="citation">${quote.citation}</span>` : ""}
            ${quote.year ? `<span class="year">${quote.year}</span>` : ""}
        </p>
    `

    const quoteBox = document.getElementById('quote-box');
    quoteBox.innerHTML = elements;

    // logs the quote and elements, as requested
    console.log('quote ->', quote);
    console.log('elements ->', elements);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);