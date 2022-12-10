
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
// import logo from'./carrito-de-compras.png'
import "./style.css";



const CartWidget = () => {
  return (
    <div className='menu_navbar_logo'>
      <ShoppingBagIcon className="h-8 w-8 text-white" />
      {/* <img className='menu-navbar-img' src={BeakerIcon} alt='cart widget'/> */}
    </div>
  )
}

export default CartWidget
