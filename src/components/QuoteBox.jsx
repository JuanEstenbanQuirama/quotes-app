import React, { useState } from 'react';
import quotes from '../quotes.json'

const colors = ['#845EC2','#D65DB1', '#FF6F91', '#FF9671', '#FFC75F' ]

const QuoteBox = () => {

    const random = Math.floor(Math.random() * quotes.length) // generar un numero aleatorio

    const [ index, setIndex] = useState(random) // usamos el numero aleatorio para setearlo cada que se actualice al pag

    const changeQuotes = () => {
        const random = Math.floor(Math.random() * quotes.length) // usamos el numero aleatorio para que se haga un render cada cez que clickeamos el boton
        setIndex(random)
    }

    const randomColorIndex = Math.floor(Math.random() * colors.length) // generamos un color aleatorio
    const color = colors[randomColorIndex]

    document.body.style =`background: ${color}`
    return (
        <div className='quote' style={{color: color}}>
            <p> <i className="fa-solid fa-quote-left"></i>{quotes[index].quote}</p>
            <p className='author'>{quotes[index].author} <i className="fa-solid fa-quote-right"></i></p>
            <button onClick={changeQuotes}><i className="fa-solid fa-angles-right"></i></button>
        </div>
    );
};

export default QuoteBox;
