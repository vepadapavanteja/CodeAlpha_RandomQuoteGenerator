// Quote data
const quotes = [
  { text: "The unexamined life is not worth living.", author: "Socrates" },
  { text: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca" },
  { text: "The obstacle is the way.", author: "Marcus Aurelius" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "You have power over your mind, not outside events.", author: "Marcus Aurelius" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin" },
  { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Nothing is impossible; the word itself says I'm possible.", author: "Audrey Hepburn" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { text: "The best way out is always through.", author: "Robert Frost" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Out of difficulties grow miracles.", author: "Jean de La Bruyère" },
  { text: "Curiosity is the engine of achievement.", author: "Ken Robinson" },
  { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Wherever you go, go with all your heart.", author: "Confucius" },
  { text: "Try not to become a person of success, but rather try to become a person of value.", author: "Albert Einstein" },
  { text: "Freedom is what you do with what's been done to you.", author: "Jean-Paul Sartre" }
];

// DOM references
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const authorRow = document.getElementById('authorRow');
const indexLabel = document.getElementById('index');
const totalLabel = document.getElementById('total');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');

totalLabel.textContent = quotes.length;
let lastIndex = -1;

function pad(n) {
  return n.toString().padStart(2, '0');
}

// Picks a new random quote (never repeats the current one back-to-back)
// and fades the card out/in while swapping the content.
function showQuote() {
  let i;
  do {
    i = Math.floor(Math.random() * quotes.length);
  } while (i === lastIndex && quotes.length > 1);
  lastIndex = i;

  quoteText.classList.add('fading');
  authorRow.classList.add('fading');

  setTimeout(() => {
    quoteText.textContent = quotes[i].text;
    quoteAuthor.textContent = quotes[i].author;
    indexLabel.textContent = pad(i + 1);
    quoteText.classList.remove('fading');
    authorRow.classList.remove('fading');
  }, 220);
}

newQuoteBtn.addEventListener('click', showQuote);

copyBtn.addEventListener('click', () => {
  const full = `"${quoteText.textContent}" — ${quoteAuthor.textContent}`;
  navigator.clipboard.writeText(full).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Copied';
    setTimeout(() => { copyBtn.textContent = original; }, 1200);
  });
});

// Spacebar shortcut for a new quote (only when focus isn't on a button/input)
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && e.target === document.body) {
    e.preventDefault();
    showQuote();
  }
});

// Show an initial quote on page load (no fade, so it's instant)
(function init() {
  const first = Math.floor(Math.random() * quotes.length);
  lastIndex = first;
  quoteText.textContent = quotes[first].text;
  quoteAuthor.textContent = quotes[first].author;
  indexLabel.textContent = pad(first + 1);
})();
