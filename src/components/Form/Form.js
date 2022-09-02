import "./form.css";

function Form() {
  return (
    <>
      <div className="form-item">
        <label htmlFor="telefono">Telefono</label>
        <input name="telefono" type="text" placeholder="Telefono" required />
      </div>
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input name="email" type="text" placeholder="Correo" required />
      </div>
    </>
  );
}

export default Form;
