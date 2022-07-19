//  -- DOM MANIPULATION  --
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

//  -- LOADER --
// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//  --  API  --
let apiQuotes = [];

// Show New quote
function newQuote() {
  loading();
  //  Pick a random quote from apiQuotes array or localQuotes and comment out the rest of the file
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if author field is blank and repalce it with 'unknown'
  if (!quote.author) {
    author.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = quote.author;
  }

  // Check Quote lenght to determine styling
  if (quote.text.length > 80) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //   Set Quote, Hide loader
  quoteText.textContent = quote.text;
  complete();
}

//  Get Quotes from API
async function getQuotes() {
  loading();
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch error here
  }
}

// -- BUTTONS --
// Tweet a Quote
function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterURL, "_blank");
}

// Add event listener on buttons
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// -- ON LOAD --
getQuotes();
// newQuote();
