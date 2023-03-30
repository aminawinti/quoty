import React from 'react';
import { BsChatLeftQuote } from 'react-icons/bs';

const Quote = ({ quote }) => {
  const checkIsEmpty = Object.values(quote).every((x) => x === '');

  let quoteContent;

  if (checkIsEmpty) {
    quoteContent = (
      <div className="quote-message">
        <h3>Welcome to QUOTY!</h3>
        <p>Click the button below to get your first quote</p>
      </div>
    );
  } else {
    quoteContent = (
      <div className="quote-content">
        <p id="text">{quote.text}</p>
        <p id="author">{quote.author}</p>
      </div>
    );
  }
  return (
    <div className="quote-wrapper">
      <BsChatLeftQuote className="quote-icon" />
      {quoteContent}
    </div>
  );
};

export default Quote;
