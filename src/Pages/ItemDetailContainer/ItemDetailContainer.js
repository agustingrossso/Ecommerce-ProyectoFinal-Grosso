import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { Form, useParams } from "react-router-dom";
// import { data } from '../../Data/data';
import { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore";


const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState()

  const {id} = useParams();

  const getProduct = () => {
    const db = getFirestore();
    const query = doc(db, 'items', id)
    getDoc(query)
    .then(response => {
      console.log(response.data());
      setProductSelected({id: response.id, ...response.data()})
    })
    .catch(error => console.log(error))
    // setProductSelected(...productFiltered)
  }

  useEffect(() => {
    getProduct();
  }, [id])
  return (
    <div>
      {productSelected && 
      <ItemDetail productSelected={productSelected}/>
    }
    </div>
  )
}

export default ItemDetailContainer