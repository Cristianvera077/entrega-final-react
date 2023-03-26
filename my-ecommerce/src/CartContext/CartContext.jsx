import react, { useContext, useState } from "react";
const  CartContext  = React.createContext([]);
export const useCartContext = () => useContext(cartContext);

const CartProvider = ({Children}) =>{
    const [cart, setcart] = useState([]);
    const addProduct = (item, newQuantity) 
    const newCart = cart.filter(prod => prod.id !== item.id); 
    newCart.push({ ...item, quantity: newQuantity });
    setcart(newCart)

setCart(newCart)
const totalPrice = () => {
return cart.reduce ((prev,act) => prev  + act.quantity * act.price,0)
}
const totalProducts = () => cart.reduce ((acumulador,productoActual) => acumulador  + productoActual.quantity,0);
    const clearCart = () => setcart([])
    const isinCart = (id) => cart.find(product => product.id === id) ? true : false;
    const removeProduct = (id) => setcart(cart.filter(product => product.id !== id));
    
    return(
        <cartContext.provider value={{
            clearCart,
            isinCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart

        }}>
        {Children}
        </cartContext.provider>
    )
}
export default CartContext