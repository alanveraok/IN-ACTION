import "./form.css";
import { useState } from "react";
import { cartContext } from "../../store/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import firestoreDB from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function Form() {
  const { cart, total, clearCart } = useContext(cartContext);
  const [pucharserData, setPurchaserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  let navigate = useNavigate();
  const [purchaseFirebase, setPurchaseFirebase] = useState({
    id: "",
    complete: false,
  });

  //conexión a firebase

  async function handleSubmit(evt) {
    const purchase = {
      buyer: { ...pucharserData },
      items: [...cart],
      total: total,
      date: new Date(),
    };

    const collectionRef = collection(firestoreDB, "orders");
    const docRef = await addDoc(collectionRef, purchase);
    setPurchaseFirebase({ id: docRef.id, complete: true });
    clearCart();
  }

  function inputChangeHandler(evt) {
    const input = evt.target;

    const value = input.value;
    const inputName = input.name;

    setPurchaserData((prevState) => ({
      ...prevState,
      ...{ [inputName]: value },
    }));
  }

  function handleReset(evt) {
    setPurchaserData({
      nombre: "",
      email: "",
      telefono: "",
    });
  }

  const validForm =
    pucharserData.nombre === "" ||
    pucharserData.telefono === "" ||
    pucharserData.email === "";

  if (purchaseFirebase.complete === true) {
    return (
      <div>
        <h1>¡MUCHAS GRACIAS POR TU COMPRA!</h1>
        <p>Recibirás los detalles de tu compra en tu e-mail </p>
        <p>El id de tu seguimiento es: {purchaseFirebase.id}</p>
      </div>
    );
  }
  return (
    <>
      <div className="form-container">
        <div className="form-item">
          <label htmlFor="nombre">NOMBRE</label>
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            value={pucharserData.nombre}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="telefono">TELÉFONO</label>
          <input
            name="telefono"
            type="text"
            placeholder="Telefono"
            value={pucharserData.telefono}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">EMAIL</label>
          <input
            name="email"
            type="text"
            placeholder="Correo"
            value={pucharserData.email}
            onChange={inputChangeHandler}
            required
          />
        </div>

        <button className="btn-form" onClick={handleReset}>
          RESETEAR DATOS
        </button>
        <button
          type="submit"
          className="btn-form"
          onClick={handleSubmit}
          disabled={validForm}
        >
          TERMINAR MI COMPRA
        </button>
      </div>
    </>
  );
}

export default Form;
