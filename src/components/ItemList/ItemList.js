import Item from "../Item/Item"

const ItemList = ({products}) => {
  return (
    products.map((product) => (
        <Item product={product} />
    ))
  );
}

export default ItemList
