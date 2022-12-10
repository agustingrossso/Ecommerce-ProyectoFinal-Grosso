
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './Pages/Cart/Cart';
import CartProvider from './Context/CartProvider';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryName" element={<ItemListContainer />}/>
            <Route path='*' element={<h1>404</h1>} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/category/:categoryName/item/:id" element={<ItemDetailContainer />}/> 
            <Route path='cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
   </CartProvider>
  );
}

export default App;
