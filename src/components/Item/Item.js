import { Link } from "react-router-dom"
// import "./style.css";


const Item = ({product}) => {
  return (
    
      <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" >

      
      <Link to={`item/${product.id}`} className="group">
        {/* <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"> */}
          <img withd='50%' src={`../images/${product.imageId}`} alt={product.title} />
        {/* </div> */}
       
        <h2 className="text-4xl font-bold tracking-tight sm:text-center sm:text-2xl">{product.title}</h2>
        <p className="mt-6 text-lg text-2xl  text-base font-semibold leading-7 text-black sm:text-center">${product.price}</p>
        {/* <h2>Stock: {product.stock}</h2> */}
        {/* <h2>{product}</h2> */}
        </Link>
      </div>   
      </div>    
      </div>
    
    
  )
}

export default Item