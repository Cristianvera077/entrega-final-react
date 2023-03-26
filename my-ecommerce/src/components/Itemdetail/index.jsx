import React from 'react';
import itemCount from "../ItemCount";
import {LInk} from 'react-router-dom;'
import react, {useState} from 'react';
import { useCartContext } from '../../CartContext/CartContext';
export const ItemDetail= ({data}) => {
    const [goToCart,setGoToCart] = useState(false);
    const {addProduct}=useCartContext(); 
    const onAdd = (quantity) => {
       setGoToCart(true)
       addProduct (data,quantity);
        
            }

    return (
    
    <div className="container">
    <div className="detail">
    <img className='detail__image' src={gata.image} alt="" /> 
    <div className="content"> <h1>{data.title}</h1>
{
    goToCart
    ? <LInk to="/cart">Terminar compra</LInk>
    : <itemCount initial ={3} stock={5} onAdd={onAdd}/>
}
    </div>
    </div>
    </div>
    
    );
}
    
export default ItemDetail;