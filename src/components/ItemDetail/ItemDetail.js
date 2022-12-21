import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { cartContext } from "../../Context/CartProvider";
import ItemCount from '../ItemCount/ItemCount';
import "./styles.css";


const ItemDetail = ({productSelected}) => {

  const [count, setCount] = useState(1);

  const {cart, addToCart, clear} = useContext(cartContext);

    return (
      <div className="contenedor">
        {/* <h1>cantidad de prod en el carrito {cart.length}</h1> */}
        <img src={`/images/${productSelected.imageId}`} alt={productSelected.title} style={{width:'500px'}}></img>
        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">{productSelected.title}</h1>
        {/* <h2>{productSelected.category}</h2> */}
        <p className="mt-6 text-lg text-4xl  text-base font-semibold leading-7 text-black sm:text-center">${productSelected.price}</p>
        <h2>{count}</h2>
      <ItemCount setCount={setCount}/>
      
      <div className="contenedor-contador">
      <button onClick={() => addToCart(productSelected, count)} className="inline-block rounded-lg bg-black px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-900 hover:bg-green-800 hover:ring-black">Agregar al Carrito</button>
      <button onClick={clear} className="inline-block rounded-lg bg-black px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-900 hover:bg-red-800 hover:ring-black">Vaciar Carrito</button>
      
  
      </div>
      <Link to ='/cart'>
        <h3 className="inline-block rounded-lg bg-black px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ">Terminar mi compra</h3>
      </Link>
     
  
      </div>
    )
  }
  
  export default ItemDetail



// function TypesExample() {
//   return (
//     <>
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </>
//   );
// }

// export default TypesExample;
  