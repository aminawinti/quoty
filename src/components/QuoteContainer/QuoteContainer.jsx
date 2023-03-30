import React from 'react';
import QuoteItem from '../QuoteItem/QuoteItem';
import Error from '../Error/Error';
import icon from '/icon.svg';
import { BsTwitter } from 'react-icons/bs';

import './QuoteContainer.css';

const QuoteContainer = ({ quote, onNewQuote, isLoading, isError }) => (
  <div className="quote-container">
    <div className="quote-container-content">
      {isError && <Error />}
      <div className={isLoading || isError ? 'hide-quote' : ''}>
        <QuoteItem quote={quote} />
      </div>
    </div>
    <div className="quote-controls">
      <a
        href={`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsTwitter
          className={
            Object.values(quote).every((x) => x === '')
              ? 'hidden'
              : 'icon twitter'
          }
        />
      </a>
      <button type="button" onClick={onNewQuote} disabled={isLoading}>
        <img src={icon} alt="quote" className="icon" />
        {isLoading ? 'Creating...' : 'New Quote'}
      </button>
    </div>
  </div>
);

export default QuoteContainer;
