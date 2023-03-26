import './itemCount.css';
import React, {useEffect, useState} from 'react';
export const itemCount = (initial,stock,onAdd) => {
    const [count, setCount] = useState(initial);
    const decrease = () => {
       
        setCount(count-1);
    }
        const increase = () => {
       
            setCount(count+1);
        }
        useEffect (() =>
        setCount(parseInt(initial)));
    }
    return( <div className= 'counter'>
    <button disable={count <= 1} onclick={decrease}>-</button>
    <span>2</span>
    <button disable={count >=stock} onclick={increase}>+</button>
    <div>
        <button disable={stock <= 0} onclick={() => onAdd (count)}>Agregar al carro</button>
    </div>
    </div>


    );

export default itemCount