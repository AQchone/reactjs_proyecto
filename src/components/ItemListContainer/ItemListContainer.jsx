import "./ItemListContainer.css"

const ItemListContainer = ( { mensaje } ) => {
return(
    <div className="listcontainer">
    <h2>Item List Container</h2>
    <hr />
    <p>{mensaje}</p>
    </div>
)
} 

export default ItemListContainer