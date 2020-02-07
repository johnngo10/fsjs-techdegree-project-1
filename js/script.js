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
    quote:
      "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way",
    source: "Michael Scott",
    citation: "the office",
    year: 2013
  },
  {
    quote: "That's what she said.",
    source: "Michael Scott",
    citation: "the office",
    year: 2013
  },
  {
    quote: "Oh, it is on, like a prawn who yawns at dawn.",
    source: "Andy Bernard",
    citation: "the office",
    year: 2013
  },
  {
    quote: "I am running away from my responsibilities and it feels good.",
    source: "Michael Scott",
    citation: "the office",
    year: 2013
  },
  {
    quote:
      "I wish there was a way to know you're in the good old days before you've actually left them.",
    source: "Andy Bernard",
    citation: "the office",
    year: 2013
  }
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(e) {
  let randomNum = Math.floor(Math.random() * Math.floor(5));
  return e[randomNum];
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  let quote = getRandomQuote(quotes);
  let htmlString = `
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}
  `;

  if (quote.citation !== undefined) {
    htmlString += `
    <span class="citation">${quote.citation}</span>
    `;
  }

  if (quote.year !== undefined) {
    htmlString += `
    <span class="year">${quote.year}</span>
    `;
  }

  htmlString += `</p>`;

  document.getElementById("quote-box").innerHTML = htmlString;

  console.log(htmlString);

  return htmlString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
