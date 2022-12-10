import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { MinusCircleIcon } from '@heroicons/react/24/solid'



const ItemCount = ({setCount}) => {

    const addItem = () =>{
      setCount((currentValue) => currentValue + 1)
    }

    const removeItem = () =>{
      
      setCount((currentValue) => {
        if(currentValue > 1){
          return currentValue -1
        }else{
          return currentValue
        }
      })
    }

  return (
    <div>

      <button onClick={addItem}><PlusCircleIcon className="h-9 w-9" aria-hidden="true" /></button>
      <button onClick={removeItem} ><MinusCircleIcon className="h-9 w-9" aria-hidden="true" /></button>

    </div>
  )
}

export default ItemCount;
