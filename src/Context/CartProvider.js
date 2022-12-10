import { createContext, useState } from "react"

export const cartContext = createContext([]);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }

    const addToCart = (product, quantity) => {
        if(isInCart(product.id)){
            
        };
        setCart([...cart, {...product, quantity}])
    }

    
    // Funcion para borrar prod carrito.
    const clear = () => {
        setCart([]);
    };
    return(
        <cartContext.Provider value ={{cart, addToCart, clear}}>
            {children}
        </cartContext.Provider>
    )
};

export default CartProvider;