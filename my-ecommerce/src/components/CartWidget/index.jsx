import React, { useContext } from "react";
import { useCartContext } from "../../CartContext/CartContext";


export const CartWidget = () => {
    const {totaProducts} = useCartContext ();
    
    
    return (
    <><i className="bi bi-cart2"></i>)
    </>
    )
}
export default CartWidget;