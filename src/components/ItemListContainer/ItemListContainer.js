import "./ItemListContainer.css";
import ClickCount from "../ItemCount/ItemCount";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer({ greeting = "NUESTROS PRODUCTOS" }) {
  return (
    <div className="container">
      <h2>{greeting}</h2>

      <div>
        <ItemCount initial={1} stock={10} />
      </div>
    </div>
  );
}

export default ItemListContainer;
