import "./item.css";
import React  from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext, CartContext } from "../../CartContext";
const item =() => {
    const Item =([info]) => {
        const nombre = useContext(cartContext);
        console.log ('item:', nombre);
    }
    return (
        <Link to={"/detalle/${info.id}"} className="film">
        <img src={info.image} alt=""/>
        <p>[info.tittle]</p>
        </Link>
        );

    }
    export default item;
