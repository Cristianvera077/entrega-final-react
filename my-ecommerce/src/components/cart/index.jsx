import React from "react";
import {getFirestore} from 'firebase/firestore'
import {link} from 'react-router-dom'
import { useCartContext } from "../../CartContext/CartContext";
import ItemCart from "../Itemcart";
const cart = () => {
    const {cart, totalPrice} = useCartContext ();
    const order = {
        buyer:{
            name:'crisitan',
            email:'cristianvera077@hotmail.com',
            phone:'1234',
            address:'addsas'
},
    items: cart.map(product =>({id: product.id, title: product.title, price:product.price, quantity: product.quantity})) ,
total: totalPrice(),
}
const handleClick= () =>{
    const db = getFirestore();
    const ordersCollection = collection (db, 'orders');
    addDoc (ordersCollection,order)
    .then (({id}) => console.log(id))

}
    }
    if (cart.lenght ===0){
        return (
            <>
            <p> No hay elementos seleccionados</p>
            <link to='/'> hacer compras</link>
            </>
        );
    }

    return (
    <>{
    cart.map(product => <ItemCart key={product.id} product={product} />)
}
<p>
    total: {totalPrice()}
</p>
<button onclick={handleClick}>procesando compra</button>
    </>

       
    )
    
export default cart