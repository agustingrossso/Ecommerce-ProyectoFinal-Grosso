// import { data } from '../../Data/data';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import "./styles.css";




const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName} = useParams();
  

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db,'items');
    if (categoryName) {
      const queryFilter = query(querySnapshot, where('categoryId', '==', categoryName))

      getDocs(queryFilter).then((response) => {
        const data = response.docs.map((item) => {
          console.log(item.data());
          console.log(item.id);
          return {id: item.id, ...item.data()}
        });
        console.log(data);
        setItems(data);
      }).catch((error) => {console.log(error)})
    }else{
      getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((item) => {
          console.log(item.data());
          console.log(item.id);
          return {id: item.id, ...item.data()}
        });
        console.log(data);
        setItems(data);
      }).catch((error) => {console.log(error)})
    }
    
  };

  useEffect(() => {
    getProducts();
  }, [categoryName])


  

  return (
    <div className='contenedor'>
      <ItemList products={items} />
    </div>
  )
}

export default ItemListContainer
