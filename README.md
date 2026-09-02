# CodeAlpha_RandomQuoteGenerator

A minimal, distraction-free random quote generator built for the **CodeAlpha App Development Internship** (Task 2).

## Features

- Displays a random quote automatically when the page loads
- **New Quote** button generates a fresh quote on each click
- Never repeats the same quote twice in a row
- Displays quote text and author clearly, with a catalog-style counter
- **Copy** button to copy the current quote + author to clipboard
- Spacebar keyboard shortcut for a new quote
- Fully responsive, works on mobile and desktop
- Clean, minimal UI with accessible focus states and reduced-motion support
- No frameworks, no backend, no build step — pure HTML/CSS/JS

## Tech Stack

| Layer      | Tool                          |
|------------|-------------------------------|
| Structure  | HTML5                         |
| Styling    | CSS3 (custom properties, flexbox, media queries) |
| Logic      | Vanilla JavaScript (ES6)      |
| Fonts      | Google Fonts (Fraunces, Inter) |
| Hosting    | GitHub Pages / Netlify / Vercel (static site) |

## Project Structure

```
CodeAlpha_RandomQuoteGenerator/
├── index.html      # Markup
├── style.css        # Styling
├── script.js         # Quote data + logic
└── README.md
```

## Run Locally

No installation needed — it's a static site.

1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/CodeAlpha_RandomQuoteGenerator.git
   ```
2. Open `index.html` in any browser, or serve it locally:
   ```bash
   cd CodeAlpha_RandomQuoteGenerator
   npx serve .
   ```

## Deploy (optional, for a live demo link)

**GitHub Pages**
1. Push this repo to GitHub.
2. Go to Settings → Pages → set source to `main` branch, root folder.
3. Your live link will be `https://<your-username>.github.io/CodeAlpha_RandomQuoteGenerator/`

## Customizing Quotes

All quotes live in `script.js` in the `quotes` array. Each entry is:

```js
{ text: "Your quote here.", author: "Author Name" }
```

Add, remove, or edit entries freely — the UI adapts automatically.

## About

Built as part of the **CodeAlpha App Development Internship**.
🔗 [codealpha.tech](https://www.codealpha.tech)
