import { useState,useEffect } from 'react';
import QuoteBox from './Quotebox/QuoteBox';
import quotes from "./assets/quotes.json";
import "../src/App.css";


const getRandomQuote = () =>{
  return quotes[Math.floor(Math.random() * quotes.length)];

};

const colors = [
  "#16a085", "#27ae60", "#2c3e50", "#f39c12",
  "#e74c3c", "#9b59b6", "#FB6964", "#342224",
  "#472E32", "#BDBB99", "#77B1A9", "#73A857"
];


function App() {
    const [quote,setQuote] = useState(getRandomQuote());

    const changeQuote = () =>{
      const newQuote = getRandomQuote();
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      setQuote(newQuote);
      setColor(newColor);
    };

    const [color,setColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

    useEffect(() => {
      document.body.style.backgroundColor = color;
      document.body.style.transition = "background-color 0.5s ease";
      }, [color]);

    return(
      <div className="background">
        <QuoteBox quote={quote.quote} author={quote.author} onChangeQuote={changeQuote} color={color} />
      </div>
      

    );
}

export default App
