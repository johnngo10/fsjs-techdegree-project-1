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
    year: 2013,
    tag: "humor"
  },
  {
    quote: "That's what she said.",
    source: "Michael Scott",
    citation: "the office",
    year: 2013,
    tag: "humor"
  },
  {
    quote: "Oh, it is on, like a prawn who yawns at dawn.",
    source: "Andy Bernard",
    citation: "the office",
    year: 2013,
    tag: "humor"
  },
  {
    quote: "I am running away from my responsibilities and it feels good.",
    source: "Michael Scott",
    citation: "the office",
    year: 2013,
    tag: "humor"
  },
  {
    quote:
      "I wish there was a way to know you're in the good old days before you've actually left them.",
    source: "Andy Bernard",
    citation: "the office",
    year: 2013,
    tag: "inspirational"
  },
  {
    quote: "I’m not superstitious, but I am a little stitious.",
    source: "Michael Scott",
    citation: "the office",
    year: 2013,
    tag: "humor"
  },
  {
    quote:
      "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    source: "Michael Scott",
    citation: "the office",
    year: 2013,
    tag: "inspirational"
  },
  {
    quote:
      "In the Schrute family, the youngest child raises the others. I’ve been raising children since I was a baby.",
    source: "Dwight Schrute",
    citation: "the office",
    year: 2013,
    tag: "humor"
  },
  {
    quote:
      "I’m not usually the butt of the joke. I’m usually the face of the joke.",
    source: "Michael Scott",
    citation: "the office",
    year: 2013,
    tag: "humor"
  },
  {
    quote: "The eyes are the groin of the face.",
    source: "Dwight Schrute",
    citation: "the office",
    year: 2013,
    tag: "humor"
  },
  {
    quote:
      "I feel like all my kids grew up, and then they married each other. It’s every parent’s dream.",
    source: "Michael Scott",
    citation: "the office",
    year: 2013,
    tag: "humor"
  }
];

/***
 * `colors` array
 ***/
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "grey",
  "purple",
  "gold",
  "coral"
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote(e) {
  let randomNum = Math.floor(Math.random() * Math.floor(11));
  return e[randomNum];
}

/***
 * `changeBgColor` function
 ***/

function changeBgColor(e) {
  let randomNum = Math.floor(Math.random() * Math.floor(10));
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

  if (quote.tag !== undefined) {
    htmlString += `
    <span class="tag">${quote.tag}</span>
    `;
  }

  htmlString += `</p>`;

  // random bg color everytime quote prints
  const body = document.getElementById("body");
  let randomColors = changeBgColor(colors);
  body.style.background = randomColors;
  //

  document.getElementById("quote-box").innerHTML = htmlString;

  return htmlString;
}

/***
 * timing function
 ***/

window.setInterval(printQuote, 3000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
