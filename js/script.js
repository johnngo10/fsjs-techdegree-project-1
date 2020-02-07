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
let quotes = [
  {
    quote:
      "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way",
    source: "Michael Scott"
  },
  {
    quote: "I am Beyonce always.",
    source: "Michael Scott"
  },
  {
    quote: "Oh, it is on, like a prawn who yawns at dawn.",
    source: "Andy Bernard"
  },
  {
    quote: "I am running away from my responsibilities and it feels good.",
    source: "Michael Scott"
  },
  {
    quote:
      "I wish there was a way to know you're in the good old days before you've actually left them.",
    source: "Andy Bernard"
  }
];

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
