import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import QuoteContainer from './components/QuoteContainer/QuoteContainer';
// import quotesList from './data/quotes.json';
import './index.css';

function App() {
  // Method #1: fetch dummy data
  // let randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
  let randomQuote = {};

  const [quote, setQuote] = useState({ text: '', author: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState('light');
  const ThemeContext = createContext(null);

  const toggleTheme = () =>
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));

  const getNewQuote = async (e) => {
    setIsLoading(true);
    setError(false);

    try {
      // Method #2: consume remote api
      const res = await fetch('https://type.fit/api/quotes');
      const data = await res.json();

      randomQuote = data[Math.floor(Math.random() * data.length)];
      const { text: quoteText, author: quoteAuthor } = randomQuote;
      const quote = {
        text: quoteText,
        author: quoteAuthor || 'Unknown',
      };

      if (!quoteText || quoteText.length === 0) setError(true);

      setIsLoading(false);
      setQuote(quote);
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <div className="theme" id={theme}>
        <Header change={toggleTheme} checked={theme === 'dark'} />
        <div className="container">
          <QuoteContainer
            quote={quote}
            onNewQuote={getNewQuote}
            isLoading={isLoading}
            isError={error}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
