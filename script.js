//  -- DOM MANIPULATION  --
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

//  --  API  --
let apiQuotes = [];

// Show New quote
function newQuote() {
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
  quoteText.textContent = quote.text;
}

//  Get Quotes from API
async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch error here
  }
}

// -- TWITTER BUTTON --
// Tweet a Quote
function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterURL, "_blank");
}

// Add event listener on button
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// -- ON LOAD --
getQuotes();
// newQuote();
