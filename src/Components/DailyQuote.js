import React, { useEffect, useState } from 'react';
import quotes from '../quotes';
import './DailyQuote.css'

function DailyQuote() {
  const [dailyQuote, setDailyQuote] = useState('');
  

  function upd(){
    setDailyQuote(quotes[Math.floor(Math.random()*(quotes.length))]);
  }

 
  return (
    <div className="daily-quote">
      <p>{dailyQuote}</p>
      <img className='refresh-icon' src='refresh-logo.png' onClick={upd} alt='refresh'/>
      
    </div>
  );
}

export default DailyQuote;
