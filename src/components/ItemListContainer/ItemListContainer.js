import "./ItemListContainer.css"

function ItemListContainer ({ greeting="NUESTROS PRODUCTOS" }){
    return(
    <div className="ItemListContainer">
        <h2>{ greeting}</h2>
    </div>)
}

export default ItemListContainer