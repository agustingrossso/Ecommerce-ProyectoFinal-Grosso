import logo from '../../assets/carrito-de-compras.png'
import "./style.css";
import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../../Context/CartProvider';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment  from 'moment/moment';

const Cart = () => {
  const {cart, clear} = useContext(cartContext);

  

  const [total, setTotal] = useState(0);

  const [formValues, setFormValues] = useState({
    name:'',
    phone:'',
    email:''
  })
 
  const getTotalPrice = () => {
     setTotal(cart.reduce((acc, product) => acc + product.price * product.quantity, 0))
  };

  const createOrder = () => {
    const db = getFirestore();
    const query = collection(db, 'Order');
    const newOrder = {
      buyer: {
        name: formValues.name,
        phone: formValues.phone,
        email: formValues.email
      },
      date: moment().format('DD/MM/YYYY'),
      items: cart,
      total: total
    };
    addDoc(query, newOrder)
    .then((response) => {
      alert(`Su compra ha sido realizada le informaremos en su email cuando este para despachar`<br>`ID: ${response.id})
      return(response)
    })
    .then((res) => {
      cart.forEach((product) => {
        const query = doc(db, 'items', product.id);
        updateDoc(query, {
          stock: product.stock - product.quantity
        });
      });
      const orderDoc = doc(db, 'items', res.id);
    })
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTotalPrice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name] : event.target.value 
    })
  };

  return (
    <div style={{margin: '100px', display: 'flex', flexDirection: 'row', width: '100%', justifyContent:'space-around'}}>
      {/* <img className='menu-navbar-img' src={logo} alt='cart widget'/> */}
      {cart.map((product) => (
        <div key={product.id} style={{marginTop: '20px', padding: '40px'}}>
          <img alt={product.title} src={`/images/${product.imageId}`} width={'300px'} />
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-2xl">{product.title}</h1>
          <p className="mt-6 text-lg text-2xl  text-base font-semibold leading-7 text-black sm:text-center">${product.price}</p>
          <p className="mt-6 text-lg text-2xl  text-base font-semibold leading-7 text-black sm:text-center">{product.quantity}</p>
        </div>
      ))}
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-2xl">Total: $ {total}</h1>
       
        
        <div>
          
          <input name='name' placeholder='Nombre' type="text" value={formValues.name} onChange={handleInputChange} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
          <input name='phone' placeholder='Telefono' type="text" value={formValues.phone} onChange={handleInputChange} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
          <input name='email' placeholder='Email' type="text" value={formValues.email} onChange={handleInputChange} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-black focus:outline-none focus:ring-indigo-500 sm:text-sm"/>


        </div>
        <button onClick={createOrder} className="relative block w-full appearance-none bg-black text-white rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm hover:bg-green-800 hover:ring-black">Crear Orden</button>
        <button onClick={clear} className="relative block w-full appearance-none bg-black text-white rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm hover:bg-red-800 hover:ring-red">Vaciar Carrito</button>
      </div>
    </div>
  )
}

export default Cart